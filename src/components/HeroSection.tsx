import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="section-spacing">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Plataforma para pequeños negocios
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Tu negocio, sin hojas sueltas.
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
            Organizá pedidos, clientes y stock en un solo lugar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="cta-button" href="#diagnostico">
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="card p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-rose-100 bg-rose-50 p-4">
              <h2 className="text-sm font-semibold text-rose-700">Caos actual</h2>
              <ul className="mt-3 space-y-2 text-sm text-rose-600">
                <li>• Pedidos perdidos</li>
                <li>• Stock desactualizado</li>
                <li>• Mensajes sin responder</li>
              </ul>
            </article>
            <article className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
              <h2 className="text-sm font-semibold text-emerald-700">Con Counter</h2>
              <ul className="mt-3 space-y-2 text-sm text-emerald-700">
                <li>• Proceso ordenado</li>
                <li>• Datos en tiempo real</li>
                <li>• Seguimiento claro</li>
              </ul>
            </article>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Ilustración simple: del caos operativo a una operación organizada.
          </p>
        </div>
      </div>
    </section>
  );
}
