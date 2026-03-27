import { ArrowRight, CheckCircle } from 'lucide-react';

export function   HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Decorative circles — inspired by Clienty */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-200/50" />
      <div className="pointer-events-none absolute top-1/2 -left-16 h-56 w-56 -translate-y-1/2 rounded-full bg-brand-100/60" />
      <div className="pointer-events-none absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-orange-200/40" />

      <div className="section-shell relative">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="section-label">Para pequeños negocios</span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl text-center text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
          Tus ventas más simples,{' '}
          <span className="text-brand-600">desde hoy.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-slate-500">
          Organizá pedidos, clientes y stock en un solo lugar. Sin Excel, sin cuadernos, sin caos.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#diagnostico" className="cta-button px-8 py-3.5 text-base">
            Empezar gratis
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#como-funciona" className="secondary-button px-8 py-3.5 text-base">
            Ver cómo funciona
          </a>
        </div>

        {/* App mockup */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft">
          {/* Browser bar */}
          <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-4 flex-1 rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-400">
              app.counter.com
            </span>
          </div>

          {/* App UI simulation */}
          <div className="grid min-h-72 grid-cols-4 gap-0 sm:min-h-80">
            {/* Sidebar */}
            <div className="col-span-1 border-r border-slate-200 bg-white p-4">
              <div className="mb-4 h-6 w-20 rounded-md bg-brand-600" />
              <div className="space-y-1">
                {['Pedidos', 'Clientes', 'Stock', 'Historial'].map(item => (
                  <div
                    key={item}
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 first:bg-brand-50 first:text-brand-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="col-span-3 space-y-4 p-5">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Pedidos hoy', value: '24', color: 'bg-brand-50 text-brand-700' },
                  { label: 'Clientes activos', value: '138', color: 'bg-emerald-50 text-emerald-700' },
                  { label: 'Stock OK', value: '98%', color: 'bg-yellow-50 text-yellow-700' }
                ].map(stat => (
                  <div key={stat.label} className={`rounded-xl p-3 ${stat.color}`}>
                    <p className="text-lg font-extrabold">{stat.value}</p>
                    <p className="text-xs opacity-70">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* List rows */}
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-card">
                <div className="mb-3 h-2.5 w-28 rounded-full bg-slate-200" />
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-brand-100" />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2 w-32 rounded-full bg-slate-200" />
                        <div className="h-2 w-20 rounded-full bg-slate-100" />
                      </div>
                      <div className="h-6 w-16 rounded-full bg-emerald-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          {['Sin tarjeta de crédito', 'Configuración en 5 minutos', 'Soporte en español'].map(item => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-brand-500" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
