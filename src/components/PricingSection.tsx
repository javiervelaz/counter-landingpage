import { signupUrl, whatsappUrl } from '@/data/content';
import { getPlans, type ApiPlan } from '@/data/plans';
import { Check } from 'lucide-react';

const CTA_LABEL = {
  FREE: 'Empezar gratis',
  BASIC: 'Elegir Básico',
  PREMIUM: 'Elegir Premium',
  CUSTOM: 'Elegir Custom',
} as const;

const FEATURES: Record<keyof typeof CTA_LABEL, string[]> = {
  FREE: [
    'Hasta 50 pedidos por mes',
    'Gestión de clientes básica',
    'Control de stock simple',
  ],
  BASIC: [
    'Pedidos ilimitados',
    'Gestión de clientes completa',
    'Control de stock en tiempo real',
  ],
  PREMIUM: [
    'Todo lo de Básico',
    'Reportes avanzados',
    'Bot de WhatsApp',
  ],
  CUSTOM: [
    'Todo lo de Premium',
    'Implementación a medida',
    'Soporte dedicado',
  ],
};

const HIGHLIGHTED_CODE: keyof typeof CTA_LABEL = 'PREMIUM';

function formatPrice(precioMensual: string) {
  const value = Number(precioMensual);
  return value === 0 ? 'Gratis' : `$${value.toLocaleString('es-AR')}`;
}

function planHref(plan: ApiPlan) {
  return signupUrl(plan.code, 'pricing');
}

export async function PricingSection() {
  const plans = await getPlans();

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
          {plans.map(plan => {
            const highlighted = plan.code === HIGHLIGHTED_CODE;
            const isFree = Number(plan.precio_mensual) === 0;

            return (
              <div
                key={plan.id}
                className={`card relative flex flex-col ${
                  highlighted
                    ? 'border-brand-600 shadow-brand ring-2 ring-brand-600'
                    : ''
                }`}
              >
                {highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-accent-500 px-4 py-1 text-xs font-bold text-white shadow-accent">
                      Más popular
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{plan.nombre_publico}</p>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{formatPrice(plan.precio_mensual)}</span>
                    {!isFree && <span className="mb-1 text-sm text-slate-400">/mes</span>}
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{plan.descripcion}</p>

                  <ul className="mt-6 space-y-3">
                    {FEATURES[plan.code].map(feature => (
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
                  href={planHref(plan)}
                  className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-bold transition ${
                    highlighted
                      ? 'bg-brand-600 text-white shadow-brand hover:bg-brand-700'
                      : 'border border-brand-100 text-brand-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700'
                  }`}
                >
                  {CTA_LABEL[plan.code]}
                </a>
              </div>
            );
          })}
        </div>

        <div className="card mx-auto mt-6 flex max-w-3xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">¿Necesitás algo más?</p>
            <p className="mt-1 text-sm text-slate-500">Armamos un plan a medida para tu negocio.</p>
          </div>
          <a
            href={whatsappUrl('Hola, quiero información sobre un servicio personalizado')}
            className="secondary-button whitespace-nowrap px-6 py-3 text-sm"
          >
            Hablemos
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Precios en pesos argentinos (ARS). IVA no incluido.
        </p>
      </div>
    </section>
  );
}
