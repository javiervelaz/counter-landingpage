import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { TITULAR } from '@/data/content';

export const metadata = {
  title: 'Eliminación de datos — Counter CRM',
  description: 'Cómo pedir la eliminación de tus datos personales en Counter CRM.',
};

export default function EliminacionDatosPage() {
  return (
    <>
      <Navbar />
      <main className="section-shell py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-3xl font-semibold text-brand-800">Eliminación de datos</h1>
          <p className="mb-8 text-sm text-slate-400">
            Cómo pedir que borremos tus datos personales de Counter CRM.
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-slate-600">
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">1. Quién puede pedirla</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Comercios con cuenta en Counter CRM:</strong> la cuenta del comercio y todos los
                  datos que cargó (productos, pedidos, clientes, caja y usuarios).
                </li>
                <li>
                  <strong>Clientes que hicieron un pedido a un comercio por WhatsApp:</strong> tu nombre,
                  teléfono, dirección de entrega y los mensajes asociados a tus pedidos.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">2. Cómo pedirla</h2>
              <ol className="list-decimal space-y-1 pl-5">
                <li>
                  Escribí a <a href={`mailto:${TITULAR.emailPrivacidad}?subject=Eliminaci%C3%B3n%20de%20datos`} className="text-brand-600 underline">{TITULAR.emailPrivacidad}</a> con
                  el asunto <em>“Eliminación de datos”</em>.
                </li>
                <li>
                  Si sos un comercio, mandalo desde el email con el que te registraste e indicá el nombre del
                  comercio.
                </li>
                <li>
                  Si hiciste un pedido por WhatsApp, indicá el número de teléfono desde el que escribiste y el
                  nombre del comercio. Para confirmar que el número es tuyo te vamos a escribir a ese WhatsApp.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">3. Qué pasa después</h2>
              <p>
                Confirmamos la recepción y eliminamos los datos dentro de los 5 días hábiles, como establece la
                Ley 25.326. Te avisamos por el mismo medio cuando esté hecho. Sólo conservamos lo que la
                normativa nos obligue a guardar (por ejemplo, comprobantes fiscales), durante el plazo legal y
                sin usarlo para ningún otro fin.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">4. WhatsApp y Meta</h2>
              <p>
                Counter CRM no usa el inicio de sesión con Facebook para los clientes finales. Los mensajes de
                WhatsApp se procesan para tomar tu pedido. Los datos que conserva Meta como proveedor de
                WhatsApp se gestionan desde la configuración de tu cuenta de WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">5. Responsable</h2>
              <p>
                {TITULAR.nombre}, CUIT {TITULAR.cuit}, Córdoba, Argentina. Más información en la{' '}
                <Link href="/privacidad" className="text-brand-600 underline">Política de Privacidad</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
