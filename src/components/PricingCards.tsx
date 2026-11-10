'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { signupUrl } from '@/data/content';
import { beneficiosDe } from '@/data/beneficios';
import { esContratable, esFree, precio, type ApiPlan, type RubroCatalogo } from '@/data/plans';

const ctaLabel = (plan: ApiPlan) => (esFree(plan) ? 'Empezar gratis' : `Elegir ${plan.nombre_publico}`);

const HIGHLIGHTED_CODE: ApiPlan['code'] = 'PREMIUM';

function formatPrecio(value: number) {
  return `$${value.toLocaleString('es-AR')}`;
}

function PlanCard({ plan, rubro }: { plan: ApiPlan; rubro: string }) {
  const contratable = esContratable(plan);
  const free = esFree(plan);
  const highlighted = plan.code === HIGHLIGHTED_CODE && contratable;
  const meses = Number(plan.duracion_meses) || 1;
  const beneficios = beneficiosDe(plan, rubro);

  return (
    <div
      className={`card relative flex flex-col ${
        highlighted ? 'border-brand-600 shadow-brand ring-2 ring-brand-600' : ''
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
          {free ? (
            <span className="text-4xl font-extrabold text-slate-900">Gratis</span>
          ) : contratable ? (
            <>
              <span className="text-4xl font-extrabold text-slate-900">{formatPrecio(precio(plan))}</span>
              <span className="mb-1 text-sm text-slate-400">{meses > 1 ? `por ${meses} meses` : '/mes'}</span>
            </>
          ) : (
            <span className="text-2xl font-extrabold text-slate-400">Próximamente</span>
          )}
        </div>
        {contratable && !free && meses > 1 && (
          <p className="mt-1 text-xs font-semibold text-brand-600">Pago único</p>
        )}

        <p className="mt-2 text-sm text-slate-500">{plan.descripcion}</p>

        <ul className="mt-6 space-y-3">
          {beneficios.map(beneficio => (
            <li key={beneficio} className="flex items-start gap-2 text-sm text-slate-600">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" aria-hidden="true" />
              {beneficio}
            </li>
          ))}
        </ul>
      </div>

      {contratable ? (
        <a
          href={signupUrl(plan.code, 'pricing', rubro)}
          className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-bold transition ${
            highlighted
              ? 'bg-brand-600 text-white shadow-brand hover:bg-brand-700'
              : 'border border-brand-100 text-brand-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700'
          }`}
        >
          {ctaLabel(plan)}
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="mt-8 block w-full cursor-not-allowed rounded-xl border border-slate-100 py-3 text-center text-sm font-bold text-slate-400"
        >
          Muy pronto
        </span>
      )}
    </div>
  );
}

export function PricingCards({ catalogo }: { catalogo: RubroCatalogo[] }) {
  const [rubroActivo, setRubroActivo] = useState(catalogo[0]?.codigo);
  const actual = catalogo.find(r => r.codigo === rubroActivo) ?? catalogo[0];
  if (!actual) return null;

  const cols = actual.planes.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <>
      {catalogo.length > 1 && (
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Rubro de tu negocio"
            className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-card"
          >
            {catalogo.map(rubro => {
              const activo = rubro.codigo === actual.codigo;
              return (
                <button
                  key={rubro.codigo}
                  type="button"
                  role="tab"
                  aria-selected={activo}
                  onClick={() => setRubroActivo(rubro.codigo)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    activo ? 'bg-brand-600 text-white' : 'text-slate-500 hover:text-brand-600'
                  }`}
                >
                  {rubro.nombre}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div role="tabpanel" className={`mx-auto mt-10 grid max-w-6xl gap-6 ${cols}`}>
        {actual.planes.map(plan => (
          <PlanCard key={`${actual.codigo}-${plan.id}`} plan={plan} rubro={actual.codigo} />
        ))}
      </div>
    </>
  );
}
