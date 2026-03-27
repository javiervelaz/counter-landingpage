import { problemItems } from '@/data/content';

const iconBg = [
  'bg-yellow-100 text-yellow-700',
  'bg-orange-100 text-orange-700',
  'bg-rose-100 text-rose-700',
  'bg-purple-100 text-purple-700'
];

export function ProblemSection() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="section-shell">
        <div className="mb-4 flex justify-center">
          <span className="section-label">El problema</span>
        </div>
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-extrabold tracking-tight text-slate-900">
          ¿Tu negocio todavía funciona así?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-500">
          Millones de pequeños negocios operan con estas herramientas a diario. El caos tiene un costo real.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problemItems.map(({ title, description, icon: Icon }, i) => (
            <article key={title} className="card transition hover:-translate-y-1 hover:shadow-soft">
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
