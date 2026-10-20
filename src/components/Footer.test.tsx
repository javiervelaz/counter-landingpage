import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

// next/image exige width/height en jsdom; el logo no es lo que se prueba acá
vi.mock('next/image', () => ({ default: (props: { alt: string }) => <span>{props.alt}</span> }));
import { TITULAR } from '@/data/content';
import { Footer } from './Footer';

describe('Footer — datos del titular (verificación de Meta)', () => {
  it('muestra el nombre legal y el CUIT tal cual ARCA', () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(`servicio de ${TITULAR.nombre} · CUIT ${TITULAR.cuit}`))).toBeInTheDocument();
  });

  it('linkea privacidad, términos y eliminación de datos', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Eliminación de datos' })).toHaveAttribute('href', '/eliminacion-datos');
    expect(screen.getByRole('link', { name: 'Privacidad' })).toHaveAttribute('href', '/privacidad');
    expect(screen.getByRole('link', { name: 'Términos' })).toHaveAttribute('href', '/terminos');
  });
});
