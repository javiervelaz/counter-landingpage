export function FounderSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Construido para negocios reales</h2>
          <p className="mt-4 text-slate-600">
            Counter nació acompañando dueños de negocios que vendían bien, pero perdían control al crecer. La misión
            es simple: ayudarte a ordenar la operación diaria sin sumar complejidad.
          </p>
          <p className="mt-3 text-slate-600">
            Este espacio puede incluir la historia del fundador, casos reales y aprendizajes del terreno.
          </p>
        </div>
        <div
          className="card flex min-h-64 items-center justify-center border-dashed text-center text-sm text-slate-500"
          role="img"
          aria-label="Placeholder de imagen del fundador"
        >
          Placeholder de imagen del fundador
        </div>
      </div>
    </section>
  );
}
