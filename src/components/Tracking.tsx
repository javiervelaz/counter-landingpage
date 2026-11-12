'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { APP_URL } from '@/data/content';
import {
  PIXEL_ID,
  aplicarAtribucion,
  esLinkSignup,
  esLinkWhatsapp,
  guardarAtribucion,
  leerAtribucionGuardada,
  trackPixel
} from '@/lib/tracking';

// Pixel de Meta + atribución. Se monta una sola vez en el layout y usa un listener
// delegado, así los links de los componentes server no necesitan cambios.
export default function Tracking() {
  useEffect(() => {
    guardarAtribucion(window.location.search, window.localStorage);

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';

      if (esLinkWhatsapp(href)) {
        trackPixel('Lead', { content_name: 'whatsapp' });
        return;
      }
      if (esLinkSignup(href, APP_URL)) {
        anchor.setAttribute('href', aplicarAtribucion(href, leerAtribucionGuardada(window.localStorage)));
      }
    };

    document.addEventListener('click', onClick, true);
    document.addEventListener('auxclick', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('auxclick', onClick, true);
    };
  }, []);

  if (!PIXEL_ID) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(PIXEL_ID)});fbq('track','PageView');`}
    </Script>
  );
}
