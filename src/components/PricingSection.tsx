import { whatsappUrl } from '@/data/content';
import { getCatalogo, type RubroCatalogo } from '@/data/plans';
import { PricingCards } from './PricingCards';

export async function PricingSection() {
  let catalogo: RubroCatalogo[] = [];

  try {
    catalogo = await getCatalogo();
  } catch (error) {
    console.error('No se pudieron obtener los planes:', error);
  }

  return (
    <section id="precios" className="section-spacing bg-slate-50">
      <div className="section-shell">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Precios</span>
        </div>
        <h2 className="mx-auto max-w-xl text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Simple y sin sorpresas
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-slate-500">
          Empezá gratis. Elegí tu rubro y escalá cuando tu negocio lo necesite.
        </p>

        {catalogo.length === 0 ? (
          <div className="card mx-auto mt-12 max-w-md text-center">
            <p className="text-base font-bold text-slate-900">
              No pudimos cargar los planes en este momento
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Escribinos por WhatsApp y te contamos los precios al instante.
            </p>
            <a
              href={whatsappUrl('Hola, quiero información sobre los planes de Counter CRM')}
              className="cta-button mt-6"
            >
              Hablar por WhatsApp
            </a>
          </div>
        ) : (
          <>
            <PricingCards catalogo={catalogo} />

            <div className="card mx-auto mt-6 flex max-w-3xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">¿Necesitás algo más?</p>
                <p className="mt-1 text-sm text-slate-500">Armamos un plan a medida para tu negocio.</p>
              </div>
              <a
                href={whatsappUrl('Hola, quiero información sobre un servicio personalizado')}
                className="secondary-button whitespace-nowrap px-6 py-3 text-sm"
              >
                Hablemos
              </a>
            </div>

            <p className="mt-8 text-center text-xs text-slate-400">
              Precios en pesos argentinos (ARS). IVA no incluido.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
