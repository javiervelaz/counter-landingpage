import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Términos y Condiciones — Counter CRM',
  description: 'Términos y condiciones de uso de Counter CRM.',
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="section-shell py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800">
            Borrador para revisión legal. Reemplazar por la versión validada por un asesor antes de producción.
          </div>

          <h1 className="mb-2 text-3xl font-semibold text-brand-800">Términos y Condiciones</h1>
          <p className="mb-8 text-sm text-slate-400">Última actualización: {new Date().toLocaleDateString('es-AR')}</p>

          <div className="space-y-6 text-sm leading-relaxed text-slate-600">
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">1. Aceptación</h2>
              <p>Al registrarte y usar Counter CRM aceptás estos Términos y Condiciones y la Política de Privacidad. Si no estás de acuerdo, no utilices el servicio.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">2. El servicio</h2>
              <p>Counter CRM es una plataforma SaaS para la gestión de comercios (productos, pedidos, caja, reportes). El servicio se ofrece “tal cual”, con planes de distinto alcance según la suscripción contratada.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">3. Cuenta y uso</h2>
              <p>El usuario es responsable de la veracidad de sus datos, de la confidencialidad de sus credenciales y de todo lo que ocurra bajo su cuenta. No está permitido usar la plataforma para fines ilícitos.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">4. Planes y pagos</h2>
              <p>Los planes, límites y precios vigentes se informan en la plataforma. La falta de pago puede suspender o dar de baja el acceso. Los impuestos aplicables corren por cuenta del usuario cuando corresponda.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">5. Datos del usuario</h2>
              <p>Los datos que cargás son de tu propiedad. Podés exportarlos o solicitar su eliminación. El tratamiento se rige por la Política de Privacidad.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">6. Disponibilidad y responsabilidad</h2>
              <p>Procuramos la mayor disponibilidad posible, pero no garantizamos un servicio ininterrumpido. En la medida permitida por la ley, no somos responsables por daños indirectos derivados del uso o imposibilidad de uso del servicio.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">7. Modificaciones</h2>
              <p>Podemos actualizar estos términos. Los cambios se informarán por los canales habituales y regirán desde su publicación.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">8. Ley aplicable</h2>
              <p>Estos términos se rigen por las leyes de la República Argentina. Toda controversia se someterá a los tribunales ordinarios de la ciudad de Córdoba.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">9. Contacto</h2>
              <p>Consultas: legales@countercrm.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
