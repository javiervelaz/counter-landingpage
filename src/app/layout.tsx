import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Counter | Organizá tu negocio en un solo lugar',
  description:
    'Counter ayuda a pequeños negocios a organizar pedidos, clientes y stock, dejando atrás cuadernos, Excel y WhatsApp.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
