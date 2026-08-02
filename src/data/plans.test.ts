import { describe, expect, it, vi, beforeEach } from 'vitest';
import { getPlans, isSellablePlan, type ApiPlan } from './plans';

const apiResponse: ApiPlan[] = [
  {
    id: 1, code: 'FREE', nombre_publico: 'Free', descripcion: 'Plan sin costo, limitado',
    precio_mensual: '0.00', es_activo: true, es_personalizado: false, duracion_meses: 1,
  },
  {
    id: 2, code: 'BASIC', nombre_publico: 'Básico', descripcion: 'CRM sin límites de uso',
    precio_mensual: '200.00', es_activo: true, es_personalizado: false, duracion_meses: 1,
  },
  {
    id: 3, code: 'PREMIUM', nombre_publico: 'Premium', descripcion: 'CRM + reportes + bot de WhatsApp',
    precio_mensual: '150.00', es_activo: true, es_personalizado: false, duracion_meses: 1,
  },
  {
    id: 4, code: 'CUSTOM', nombre_publico: 'Custom', descripcion: 'Plan 1 año',
    precio_mensual: '500.00', es_activo: true, es_personalizado: true, duracion_meses: 12,
  },
];

describe('getPlans', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('devuelve todos los planes activos, incluidos los personalizados', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => apiResponse,
    }));

    const plans = await getPlans();
    expect(plans.map(p => p.code)).toEqual(['FREE', 'BASIC', 'PREMIUM', 'CUSTOM']);
    expect(plans.filter(isSellablePlan).map(p => p.code)).toEqual(['FREE', 'BASIC', 'PREMIUM']);
  });

  it('excluye planes inactivos', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        { ...apiResponse[1], es_activo: false },
      ],
    }));

    const plans = await getPlans();
    expect(plans).toEqual([]);
  });

  it('lanza un error cuando la respuesta no es exitosa', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ([]),
    }));

    await expect(getPlans()).rejects.toThrow('No se pudieron obtener los planes (500)');
  });
});
