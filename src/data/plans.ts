export type PlanCode = 'FREE' | 'BASIC' | 'PREMIUM' | 'CUSTOM';

export type ApiPlan = {
  id: number;
  code: PlanCode;
  nombre_publico: string;
  descripcion: string;
  precio_mensual: string;
  es_activo: boolean;
  es_personalizado: boolean;
  duracion_meses: number;
};

export type SellablePlan = ApiPlan & { code: Exclude<PlanCode, 'CUSTOM'> };

const PLANS_API_URL = process.env.PLANS_API_URL ?? 'https://app.countercrm.com/api/tiers';

export function isSellablePlan(plan: ApiPlan): plan is SellablePlan {
  return !plan.es_personalizado;
}

export async function getPlans(): Promise<ApiPlan[]> {
  const res = await fetch(PLANS_API_URL, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`No se pudieron obtener los planes (${res.status})`);
  }

  const plans: ApiPlan[] = await res.json();
  return plans.filter(plan => plan.es_activo);
}
