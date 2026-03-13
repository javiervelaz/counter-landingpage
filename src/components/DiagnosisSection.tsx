import { ArrowRight } from 'lucide-react';
import { diagnosisSteps } from '@/data/content';

export function DiagnosisSection() {
  return (
    <section id="diagnostico" className="section-spacing">
      <div className="section-shell card">
        <h2 className="text-3xl font-bold tracking-tight">Diagnóstico gratuito para tu negocio</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {diagnosisSteps.map((step, index) => (
            <li key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-brand-700">Paso {index + 1}</p>
              <p className="mt-2 text-sm text-slate-700">{step}</p>
            </li>
          ))}
        </ol>
        <a className="cta-button mt-8" href="#final-cta">
          Solicitar diagnóstico gratuito
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
