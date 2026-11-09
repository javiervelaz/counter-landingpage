import { describe, expect, it, vi, beforeEach } from 'vitest';
import { esContratable, getCatalogo, getPlans, type ApiPlan } from './plans';
import { beneficiosDe } from './beneficios';

const plan = (over: Partial<ApiPlan>): ApiPlan => ({
  id: 1, code: 'FREE', nombre_publico: 'Free', descripcion: 'Plan sin costo, limitado',
  precio_mensual: 0, es_activo: true, es_personalizado: false, duracion_meses: 1,
  rubro_codigo: 'gastronomia', disponible: true, features: {},
  ...over,
});

const okJson = (body: unknown) => ({ ok: true, status: 200, json: async () => body });

describe('getPlans', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('pide los planes del rubro a api.countercrm.com', async () => {
    const fetchMock = vi.fn().mockResolvedValue(okJson([plan({})]));
    vi.stubGlobal('fetch', fetchMock);

    await getPlans('educacion');
    expect(fetchMock.mock.calls[0][0]).toBe('https://api.countercrm.com/api/tiers?rubro=educacion');
  });

  it('excluye planes inactivos o no disponibles', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(okJson([
      plan({ id: 1 }),
      plan({ id: 2, code: 'BASIC', es_activo: false }),
      plan({ id: 3, code: 'PREMIUM', disponible: false }),
    ])));

    const plans = await getPlans('gastronomia');
    expect(plans.map(p => p.id)).toEqual([1]);
  });

  it('lanza un error cuando la respuesta no es exitosa', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500, json: async () => [] }));
    await expect(getPlans('gastronomia')).rejects.toThrow('respondió 500');
  });
});

describe('getCatalogo', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('ordena gastronomía primero y omite rubros que fallan o vienen vacíos', async () => {
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      if (url.endsWith('/api/rubros')) {
        return okJson([
          { codigo: 'educacion', nombre: 'Educación' },
          { codigo: 'gastronomia', nombre: 'Gastronomía' },
          { codigo: 'salud', nombre: 'Salud' },
          { codigo: 'kiosco', nombre: 'Kiosco' },
        ]);
      }
      if (url.includes('rubro=salud')) return { ok: false, status: 500, json: async () => [] };
      if (url.includes('rubro=kiosco')) return okJson([]);
      return okJson([plan({})]);
    }));
    vi.spyOn(console, 'error').mockImplementation(() => {});

    const catalogo = await getCatalogo();
    expect(catalogo.map(r => r.codigo)).toEqual(['gastronomia', 'educacion']);
  });
});

describe('esContratable', () => {
  it('FREE siempre; un plan pago sólo con precio > 0', () => {
    expect(esContratable(plan({}))).toBe(true);
    expect(esContratable(plan({ code: 'BASIC', precio_mensual: 0 }))).toBe(false);
    expect(esContratable(plan({ code: 'BASIC', precio_mensual: '1000.00' }))).toBe(true);
    expect(esContratable(plan({ code: 'BASIC', precio_mensual: 1000, disponible: false }))).toBe(false);
  });
});

describe('beneficiosDe', () => {
  it('arma los beneficios de gastronomía desde las features', () => {
    const free = plan({ features: { canUsePedidosOnline: true, maxPedidosMensuales: 50, maxProductos: 5 } });
    expect(beneficiosDe(free, 'gastronomia')).toEqual([
      'Pedidos, clientes y caja en un solo lugar',
      'Link de pedidos online (hasta 50 por mes)',
      'Hasta 5 productos en el catálogo',
    ]);
  });

  it('usa el texto del rubro y no muestra catálogo en educación', () => {
    const premium = plan({
      code: 'PREMIUM',
      features: { canUsePedidosOnline: false, maxProductos: null, canUseReports: true, canUseBot: true },
    });
    expect(beneficiosDe(premium, 'educacion')).toEqual([
      'Alumnos, clases e inscripciones',
      'Cuotas y pagos al día',
      'Reportes de cuotas, morosidad y asistencia',
      'Avisos de pagos a tu equipo por Telegram',
    ]);
  });

  it('ignora features que no conoce', () => {
    expect(beneficiosDe(plan({ features: { featureNueva: true } }), 'gastronomia')).toEqual([
      'Pedidos, clientes y caja en un solo lugar',
    ]);
  });
});
