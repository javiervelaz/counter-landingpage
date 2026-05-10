import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const montserrat = localFont({
  src: [
    { path: '../assets/Fuentes/Montserrat/Montserrat-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/Fuentes/Montserrat/Montserrat-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../assets/Fuentes/Montserrat/Montserrat-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../assets/Fuentes/Montserrat/Montserrat-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../assets/Fuentes/Montserrat/Montserrat-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: '../assets/Fuentes/Montserrat/Montserrat-Black.ttf', weight: '900', style: 'normal' }
  ],
  variable: '--font-montserrat',
  display: 'swap'
});

const outfit = localFont({
  src: '../assets/Fuentes/Outfit/Outfit-VariableFont_wght.ttf',
  variable: '--font-outfit',
  display: 'swap'
});

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
    <html lang="es" className={`${montserrat.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
