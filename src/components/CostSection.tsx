import { costItems } from '@/data/content';

export function CostSection() {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <h2 className="text-3xl font-bold tracking-tight">Cuando el negocio crece, el caos aparece</h2>
        <div className="mt-8 space-y-4">
          {costItems.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="card flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 text-brand-600" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
