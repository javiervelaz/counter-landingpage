import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { ApiPlan, RubroCatalogo } from '@/data/plans';

vi.mock('@/data/plans', async importOriginal => {
  const actual = await importOriginal<typeof import('@/data/plans')>();
  return { ...actual, getCatalogo: vi.fn() };
});

import { getCatalogo } from '@/data/plans';
import { PricingSection } from './PricingSection';

const plan = (over: Partial<ApiPlan>): ApiPlan => ({
  id: 1, code: 'FREE', nombre_publico: 'Free', descripcion: 'Plan sin costo, limitado',
  precio_mensual: 0, es_activo: true, es_personalizado: false, duracion_meses: 1,
  disponible: true, features: {},
  ...over,
});

const catalogo: RubroCatalogo[] = [
  {
    codigo: 'gastronomia',
    nombre: 'Gastronomía',
    planes: [
      plan({ id: 1, features: { canUsePedidosOnline: true, maxPedidosMensuales: 50 } }),
      plan({ id: 2, code: 'BASIC', nombre_publico: 'Básico', descripcion: 'CRM sin límites', precio_mensual: 1000 }),
      plan({ id: 4, code: 'CUSTOM', nombre_publico: 'Anual', descripcion: 'Plan 1 año', precio_mensual: 10000, duracion_meses: 12 }),
    ],
  },
  {
    codigo: 'educacion',
    nombre: 'Educación',
    planes: [
      plan({ id: 1 }),
      plan({ id: 2, code: 'BASIC', nombre_publico: 'Básico', descripcion: 'CRM sin límites', precio_mensual: 2600 }),
      plan({ id: 3, code: 'PREMIUM', nombre_publico: 'Premium', descripcion: 'Con reportes', precio_mensual: 0 }),
    ],
  },
];

describe('PricingSection', () => {
  it('muestra los precios del primer rubro y cambia al elegir otro', async () => {
    vi.mocked(getCatalogo).mockResolvedValue(catalogo);
    render(await PricingSection());

    expect(screen.getByRole('tab', { name: 'Gastronomía' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('$1.000')).toBeInTheDocument();
    expect(screen.getByText('$10.000')).toBeInTheDocument();
    expect(screen.getByText('por 12 meses')).toBeInTheDocument();
    expect(screen.getByText('Pago único')).toBeInTheDocument();
    expect(screen.getByText('Link de pedidos online (hasta 50 por mes)')).toBeInTheDocument();

    const basico = screen.getByText('Elegir Básico').closest('a');
    expect(basico?.getAttribute('href')).toContain('plan=BASIC');
    expect(basico?.getAttribute('href')).toContain('rubro=gastronomia');

    fireEvent.click(screen.getByRole('tab', { name: 'Educación' }));

    expect(screen.getByText('$2.600')).toBeInTheDocument();
    expect(screen.queryByText('$1.000')).not.toBeInTheDocument();
    expect(screen.getAllByText('Alumnos, clases e inscripciones')).toHaveLength(3);
    expect(screen.getByText('Elegir Básico').closest('a')?.getAttribute('href')).toContain('rubro=educacion');
  });

  it('un plan pago con precio 0 se muestra como Próximamente y sin link', async () => {
    vi.mocked(getCatalogo).mockResolvedValue([catalogo[1]]);
    render(await PricingSection());

    expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
    expect(screen.getByText('Próximamente')).toBeInTheDocument();
    expect(screen.queryByText('Elegir Premium')).not.toBeInTheDocument();
    expect(screen.getByText('Muy pronto')).toBeInTheDocument();
  });

  it('muestra un estado vacío si no se pudieron obtener los planes', async () => {
    vi.mocked(getCatalogo).mockRejectedValue(new Error('GET /api/rubros respondió 500'));
    vi.spyOn(console, 'error').mockImplementation(() => {});
    render(await PricingSection());

    expect(screen.getByText('No pudimos cargar los planes en este momento')).toBeInTheDocument();
    expect(screen.queryByText('¿Necesitás algo más?')).not.toBeInTheDocument();
  });

  it('muestra un estado vacío si no hay rubros con planes', async () => {
    vi.mocked(getCatalogo).mockResolvedValue([]);
    render(await PricingSection());

    expect(screen.getByText('No pudimos cargar los planes en este momento')).toBeInTheDocument();
  });
});
