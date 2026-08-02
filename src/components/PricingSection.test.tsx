import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { ApiPlan } from '@/data/plans';

vi.mock('@/data/plans', async importOriginal => {
  const actual = await importOriginal<typeof import('@/data/plans')>();
  return { ...actual, getPlans: vi.fn() };
});

import { getPlans } from '@/data/plans';
import { PricingSection } from './PricingSection';

const plans: ApiPlan[] = [
  {
    id: 1, code: 'FREE', nombre_publico: 'Free', descripcion: 'Plan sin costo, limitado',
    precio_mensual: '0.00', es_activo: true, es_personalizado: false, duracion_meses: 1,
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

describe('PricingSection', () => {
  it('renderiza los planes vendibles y el plan personalizado', async () => {
    vi.mocked(getPlans).mockResolvedValue(plans);

    render(await PricingSection());

    expect(screen.getByText('Gratis')).toBeInTheDocument();
    expect(screen.getByText('Plan sin costo, limitado')).toBeInTheDocument();
    expect(screen.getByText('$150')).toBeInTheDocument();
    expect(screen.getByText('Elegir Premium')).toBeInTheDocument();

    expect(screen.getByText('Custom')).toBeInTheDocument();
    expect(screen.getByText('Plan 1 año')).toBeInTheDocument();
    expect(screen.getByText('$500')).toBeInTheDocument();
    expect(screen.getByText('Solicitar servicio personalizado')).toBeInTheDocument();

    expect(screen.getByText('¿Necesitás algo más?')).toBeInTheDocument();
    expect(screen.getByText('Hablemos')).toBeInTheDocument();

    expect(screen.getAllByRole('link')).toHaveLength(plans.length + 1);
  });
});
