import type { ApiPlan, PlanFeatures } from './plans';

/**
 * Textos de los beneficios de cada card. Se arman con las features que
 * devuelve /api/tiers?rubro= (rubro_tier.features): si cambia una feature en
 * la DB, la card cambia sola. Acá sólo vive el copy.
 *
 * Una feature nueva que no esté mapeada se ignora (no rompe la card).
 */

/** Lo que trae cualquier plan del rubro, antes de las features. */
const BASE_POR_RUBRO: Record<string, string[]> = {
  gastronomia: ['Pedidos, clientes y caja en un solo lugar'],
  educacion: ['Alumnos, clases e inscripciones', 'Cuotas y pagos al día'],
};

const BASE_DEFAULT = ['Clientes y ventas en un solo lugar'];

type Texto = string | ((f: PlanFeatures) => string | null);

/** Texto por feature. `porRubro` pisa el texto general para ese rubro. */
const TEXTOS: Partial<Record<keyof PlanFeatures, { general: Texto; porRubro?: Record<string, Texto> }>> = {
  canUsePedidosOnline: {
    general: f =>
      typeof f.maxPedidosMensuales === 'number'
        ? `Link de pedidos online (hasta ${f.maxPedidosMensuales} por mes)`
        : 'Link de pedidos online sin límite',
  },
  maxProductos: {
    general: f =>
      typeof f.maxProductos === 'number'
        ? `Hasta ${f.maxProductos} productos en el catálogo`
        : f.canUsePedidosOnline
          ? 'Productos ilimitados'
          : null,
  },
  canUseInventario: {
    general: f =>
      typeof f.maxStockItems === 'number'
        ? `Control de stock (hasta ${f.maxStockItems} ítems)`
        : 'Control de stock sin límite',
  },
  canUseRecetas: { general: 'Recetas y costo por plato' },
  canUseReports: {
    general: 'Reportes de tu negocio',
    porRubro: {
      gastronomia: 'Reportes de ventas, gastos y caja',
      educacion: 'Reportes de cuotas, morosidad y asistencia',
    },
  },
  canUseWhatsappBot: { general: 'Bot de WhatsApp para tus clientes' },
  canUseBot: {
    general: 'Avisos y consultas por Telegram',
    porRubro: { educacion: 'Avisos de pagos a tu equipo por Telegram' },
  },
};

/** Orden fijo de los beneficios, de lo más básico a lo más avanzado. */
const ORDEN: (keyof PlanFeatures)[] = [
  'canUsePedidosOnline',
  'maxProductos',
  'canUseInventario',
  'canUseRecetas',
  'canUseReports',
  'canUseWhatsappBot',
  'canUseBot',
];

/** Features "numéricas" que aplican aunque no haya un flag booleano en true. */
const SIEMPRE_EVALUAR = new Set<keyof PlanFeatures>(['maxProductos']);

function resolver(texto: Texto, f: PlanFeatures): string | null {
  return typeof texto === 'function' ? texto(f) : texto;
}

export function beneficiosDe(plan: ApiPlan, rubro: string): string[] {
  const f = plan.features ?? {};
  const base = BASE_POR_RUBRO[rubro] ?? BASE_DEFAULT;

  const desdeFeatures = ORDEN.flatMap(key => {
    const def = TEXTOS[key];
    if (!def) return [];
    if (!SIEMPRE_EVALUAR.has(key) && f[key] !== true) return [];
    // maxProductos sólo tiene sentido en rubros con catálogo
    if (key === 'maxProductos' && !f.canUsePedidosOnline) return [];
    const texto = resolver(def.porRubro?.[rubro] ?? def.general, f);
    return texto ? [texto] : [];
  });

  return [...base, ...desdeFeatures];
}
