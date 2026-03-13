import { problemItems } from '@/data/content';

export function ProblemSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="section-shell">
        <h2 className="text-3xl font-bold tracking-tight">¿Tu negocio funciona así?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemItems.map(({ title, description, icon: Icon }) => (
            <article key={title} className="card">
              <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
