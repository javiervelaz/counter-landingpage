import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Gratis',
    description: 'Para arrancar y ordenar tu negocio desde cero.',
    features: [
      'Hasta 50 pedidos por mes',
      'Gestión de clientes básica',
      'Control de stock simple',
      'Soporte por email'
    ],
    cta: 'Empezar gratis',
    href: '#diagnostico',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$9.990',
    period: '/mes',
    description: 'Para negocios que quieren crecer sin límites.',
    features: [
      'Pedidos ilimitados',
      'Clientes y historial completo',
      'Stock en tiempo real',
      'Reportes y métricas',
      'Soporte prioritario en español',
      'Acceso anticipado a nuevas funciones'
    ],
    cta: 'Probar 14 días gratis',
    href: '#diagnostico',
    highlighted: true
  }
];

export function PricingSection() {
  return (
    <section id="precios" className="section-spacing bg-slate-50">
      <div className="section-shell">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Precios</span>
        </div>
        <h2 className="mx-auto max-w-xl text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Simple y sin sorpresas
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-slate-500">
          Empezá gratis. Escalá cuando tu negocio lo necesite.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`card relative flex flex-col ${
                plan.highlighted
                  ? 'border-brand-500 shadow-blue ring-2 ring-brand-500'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-600 px-4 py-1 text-xs font-bold text-white shadow-blue">
                    Más popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{plan.name}</p>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="mb-1 text-sm text-slate-400">{plan.period}</span>}
                </div>
                <p className="mt-2 text-sm text-slate-500">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.href}
                className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-bold transition ${
                  plan.highlighted
                    ? 'bg-brand-600 text-white shadow-blue hover:bg-brand-700'
                    : 'border border-slate-200 text-slate-700 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
