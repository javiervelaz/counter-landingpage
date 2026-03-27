const testimonials = [
  {
    quote:
      'Antes anotaba todo en un cuaderno y perdía pedidos seguido. Con Counter tengo todo claro en el celular y no se me escapa nada.',
    name: 'Lucía M.',
    role: 'Dueña de tienda de ropa, Córdoba'
  },
  {
    quote:
      'El stock era un caos total. Ahora sé exactamente qué tengo y cuándo pedir. Ahorro tiempo y evito errores costosos.',
    name: 'Rodrigo P.',
    role: 'Distribuidor de alimentos, Buenos Aires'
  },
  {
    quote:
      'Empecé a usarlo en una semana y ya noté la diferencia. Mis clientes reciben respuestas más rápidas y yo trabajo más tranquilo.',
    name: 'Valentina G.',
    role: 'Emprendedora, Rosario'
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="section-shell">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Testimonios</span>
        </div>
        <h2 className="mx-auto max-w-xl text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Lo que dicen nuestros usuarios
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <figure key={name} className="card flex flex-col justify-between">
              <blockquote>
                <div className="mb-4 text-3xl font-extrabold leading-none text-brand-200">&ldquo;</div>
                <p className="text-sm leading-relaxed text-slate-600">{quote}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-extrabold text-brand-700">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{name}</p>
                  <p className="text-xs text-slate-400">{role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
