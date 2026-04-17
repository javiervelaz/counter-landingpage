import { ArrowRight } from 'lucide-react';
import { diagnosisSteps } from '@/data/content';

export function DiagnosisSection() {
  return (
    <section id="como-funciona" className="section-spacing bg-slate-50">
      <div className="section-shell">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Cómo funciona</span>
        </div>
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Empezá en tres pasos simples
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-500">
          Sin configuraciones complicadas. En minutos tenés tu operación organizada.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {diagnosisSteps.map((step, index) => (
            <div key={step} className="relative">
              {index < diagnosisSteps.length - 1 && (
                <div className="absolute left-full top-8 hidden h-px w-full -translate-x-1/2 border-t-2 border-dashed border-slate-200 sm:block" />
              )}
              <div className="card text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-xl font-extrabold text-white shadow-blue">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-700">{step}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a id="diagnostico" href="#final-cta" className="cta-button px-8 py-3.5 text-base">
            Solicitar diagnóstico gratuito
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
