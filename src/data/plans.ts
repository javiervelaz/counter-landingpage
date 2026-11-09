export type PlanCode = 'FREE' | 'BASIC' | 'PREMIUM' | 'CUSTOM';

/** Features por rubro × plan, tal como las devuelve GET /api/tiers?rubro= (rubro_tier). */
export type PlanFeatures = Partial<{
  canUsePedidosOnline: boolean;
  maxPedidosMensuales: number | null;
  maxProductos: number | null;
  canUseInventario: boolean;
  maxStockItems: number | null;
  canUseRecetas: boolean;
  canUseReports: boolean;
  canUseBot: boolean;
  canUseWhatsappBot: boolean;
  diasDeTrial: number;
}> &
  Record<string, unknown>;

export type ApiPlan = {
  id: number;
  code: PlanCode;
  nombre_publico: string;
  descripcion: string;
  precio_mensual: number | string;
  es_activo: boolean;
  es_personalizado: boolean;
  duracion_meses: number;
  rubro_codigo?: string;
  disponible?: boolean;
  features?: PlanFeatures;
};

export type Rubro = { codigo: string; nombre: string };

export type RubroCatalogo = Rubro & { planes: ApiPlan[] };

// Ojo: la API vive en api.countercrm.com. app.countercrm.com es el front y
// devuelve 404 en /api/tiers (por eso la landing no mostraba precios).
const API_URL = (process.env.COUNTER_API_URL ?? 'https://api.countercrm.com').replace(/\/$/, '');

// Los precios se cambian en la DB (rubro_tier): 5 minutos es un balance
// razonable entre cache y que un cambio de precio se vea rápido.
const REVALIDATE_SECONDS = 300;

/** Orden en que se muestran los rubros; los que no estén acá van al final. */
const RUBRO_ORDEN = ['gastronomia', 'educacion'];

export function precio(plan: ApiPlan): number {
  const value = Number(plan.precio_mensual);
  return Number.isFinite(value) ? value : 0;
}

export function esFree(plan: ApiPlan): boolean {
  return plan.code === 'FREE';
}

/**
 * Misma regla que planService.esPagable en crm_api: un plan que no es FREE
 * sólo se puede contratar si está disponible y tiene precio > 0.
 */
export function esContratable(plan: ApiPlan): boolean {
  if (esFree(plan)) return plan.disponible !== false;
  return plan.disponible !== false && precio(plan) > 0;
}

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) {
    throw new Error(`GET ${path} respondió ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function getRubros(): Promise<Rubro[]> {
  const rubros = await getJson<Rubro[]>('/api/rubros');
  return [...rubros].sort((a, b) => {
    const ia = RUBRO_ORDEN.indexOf(a.codigo);
    const ib = RUBRO_ORDEN.indexOf(b.codigo);
    return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
  });
}

export async function getPlans(rubro: string): Promise<ApiPlan[]> {
  const plans = await getJson<ApiPlan[]>(`/api/tiers?rubro=${encodeURIComponent(rubro)}`);
  return plans.filter(plan => plan.es_activo && plan.disponible !== false);
}

/**
 * Rubros con sus planes. Si un rubro falla o no tiene planes se omite;
 * si fallan todos, devuelve [] y la sección muestra el estado vacío.
 */
export async function getCatalogo(): Promise<RubroCatalogo[]> {
  const rubros = await getRubros();
  const resultados = await Promise.allSettled(rubros.map(r => getPlans(r.codigo)));

  return rubros.flatMap((rubro, i) => {
    const r = resultados[i];
    if (r.status === 'rejected') {
      console.error(`No se pudieron obtener los planes de ${rubro.codigo}:`, r.reason);
      return [];
    }
    return r.value.length > 0 ? [{ ...rubro, planes: r.value }] : [];
  });
}
