export function FounderSection() {
  return (
    <section id="nosotros" className="section-spacing bg-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span className="section-label mb-4 inline-block">Quiénes somos</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Construido por dos que también tienen un negocio que ordenar
          </h2>
          <p className="mt-4 text-slate-600">
            Counter nació en 2024 cuando vimos de primera mano lo que le pasa a casi todo dueño de negocio: 
            vendía bien, pero perdía el control al crecer. Los pedidos llegaban por WhatsApp, el stock 
            vivía en una planilla que nadie actualizaba, y la caja cerraba "más o menos".
          </p>
          <p className="mt-3 text-slate-600">
            Somos <strong>Javi y Vane</strong>, dos profesionales de sistemas y comunicación que decidimos 
            construir la herramienta que le faltaba al comerciante argentino: simple como una conversación, 
            poderosa como un sistema profesional.
          </p>
          <p className="mt-3 text-slate-600">
            No somos una empresa faceless. Si tenés una duda, nos escribís por WhatsApp y te respondemos 
            nosotros. Así de simple.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#diagnostico"
              className="cta-button px-6 py-3 text-sm"
            >
              Hablar con nosotros
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {/* Javi card */}
          <div className="card flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-xl font-extrabold text-white shadow-brand">
              J
            </div>
            <div>
              <p className="font-bold text-slate-900">Javier Velázquez</p>
              <p className="text-sm text-slate-500">Desarrollo &amp; Producto</p>
              <p className="mt-2 text-sm text-slate-600">
                Programador con más de 10 años de experiencia. Construyó Counter desde el primer módulo 
                y lo sigue mejorando con el feedback de cada cliente.
              </p>
            </div>
          </div>

          {/* Vane card */}
          <div className="card flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-500 text-xl font-extrabold text-white shadow-accent">
              V
            </div>
            <div>
              <p className="font-bold text-slate-900">Vanesa Molina</p>
              <p className="text-sm text-slate-500">Estrategia &amp; Comunicación</p>
              <p className="mt-2 text-sm text-slate-600">
                Especialista en procesos de negocio y comunicación digital. Se asegura de que Counter 
                hable el mismo idioma que el comerciante.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="rounded-2xl bg-brand-50 px-5 py-4">
            <p className="text-sm italic text-brand-700">
              "Queríamos que cualquier dueño de negocio pudiera usar Counter el mismo día que lo conoce, 
              sin necesitar un manual ni llamar a un técnico."
            </p>
            <p className="mt-2 text-xs font-semibold text-brand-600">— Javi &amp; Vane, fundadores</p>
          </div>
        </div>
      </div>
    </section>
  );
}
