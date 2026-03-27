import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-brand-600 py-20 sm:py-28">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10" />

      <div className="section-shell relative text-center">
        <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Dejá atrás el caos del cuaderno y Excel.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-brand-100">
          Más de 500 negocios ya organizaron su operación con Counter. Tu turno.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#diagnostico"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-bold text-brand-700 shadow-soft transition hover:bg-brand-50"
          >
            Empezar gratis
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/5491100000000"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-8 py-3.5 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
