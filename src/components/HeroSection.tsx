import { signupUrl } from '@/data/content';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import appPedidos from '@/assets/screenshots/app-pedidos.webp';

export function   HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="section-shell relative">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="section-label">Para pequeños negocios</span>
        </div>

        {/* Headline — Outfit para mayor impacto visual */}
        <h1 className="font-display mx-auto max-w-3xl text-center text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
          Somos el asistente digital 
que entiende tu ritmo,{' '}
          <span className="text-brand-600">habla tu lenguaje y te 
acompaña de igual a igual.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-slate-500">
          Organizá pedidos, clientes y reportes en un solo lugar. Sin Excel, sin cuadernos, sin caos.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={signupUrl('FREE', 'hero')} className="cta-button px-8 py-3.5 text-base">
            Crear mi cuenta gratis
          </a>

          <a href="#como-funciona" className="secondary-button px-8 py-3.5 text-base">
            Ver cómo funciona
          </a>
        </div>

        {/* App mockup */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-brand-100 bg-slate-50 shadow-soft">
          {/* Browser bar */}
          <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-4 flex-1 rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-400">
              app.countercrm.com
            </span>
          </div>

          {/* Captura real de la app */}
          <Image
            src={appPedidos}
            alt="Panel de pedidos de Counter CRM"
            className="h-auto w-full"
            placeholder="blur"
            priority
          />
        </div>

        {/* Social proof */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          {['Sin tarjeta de crédito', 'Configuración en 5 minutos', 'Soporte en español'].map(item => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-accent-500" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
