import { solutionItems } from '@/data/content';

const iconBg = [
  'bg-brand-100 text-brand-700',
  'bg-teal-100 text-teal-700',
  'bg-emerald-100 text-emerald-700',
  'bg-indigo-100 text-indigo-700'
];

export function SolutionSection() {
  return (
    <section id="funcionalidades" className="section-spacing bg-white">
      <div className="section-shell">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Funcionalidades</span>
        </div>
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Todo lo que necesitás, en un solo lugar
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-500">
          Counter centraliza la operación de tu negocio para que puedas vender más y preocuparte menos.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutionItems.map(({ title, description, icon: Icon }, i) => (
            <article
              key={title}
              className="card border-b-4 border-b-brand-500 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBg[i]}`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
