import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Política de Privacidad — Counter CRM',
  description: 'Política de privacidad de Counter CRM.',
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="section-shell py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800">
            Borrador para revisión legal. Reemplazar por la versión validada por un asesor antes de producción.
          </div>

          <h1 className="mb-2 text-3xl font-semibold text-brand-800">Política de Privacidad</h1>
          <p className="mb-8 text-sm text-slate-400">Última actualización: {new Date().toLocaleDateString('es-AR')}</p>

          <div className="space-y-6 text-sm leading-relaxed text-slate-600">
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">1. Responsable</h2>
              <p>Counter CRM (“nosotros”), con domicilio en Córdoba, Argentina, es responsable del tratamiento de los datos personales que se recopilan a través de countercrm.com y de la plataforma Counter CRM.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">2. Datos que recopilamos</h2>
              <p>Datos de registro (nombre, email, datos del comercio), datos de uso de la plataforma, y los datos que cada comercio carga sobre su operación (productos, pedidos, clientes, caja). Cada comercio es responsable de los datos de sus propios clientes.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">3. Finalidad</h2>
              <p>Usamos los datos para prestar el servicio, operar y mejorar la plataforma, brindar soporte, y cumplir obligaciones legales y fiscales.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">4. Base legal y consentimiento</h2>
              <p>El tratamiento se basa en la ejecución del contrato de servicio y en el consentimiento del usuario al registrarse y aceptar estos términos.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">5. Conservación</h2>
              <p>Conservamos los datos mientras la cuenta esté activa y durante los plazos que exija la normativa aplicable. El usuario puede solicitar la baja de su cuenta.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">6. Terceros</h2>
              <p>Utilizamos proveedores de infraestructura y pagos (por ejemplo, servicios de base de datos, hosting y procesadores de pago) que tratan datos por cuenta nuestra bajo acuerdos de confidencialidad.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">7. Derechos del titular</h2>
              <p>Conforme a la Ley 25.326 de Protección de Datos Personales (Argentina), podés acceder, rectificar, actualizar y suprimir tus datos escribiendo a privacidad@countercrm.com. La Agencia de Acceso a la Información Pública es el órgano de control.</p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-brand-700">8. Contacto</h2>
              <p>Ante cualquier consulta sobre privacidad: privacidad@countercrm.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
