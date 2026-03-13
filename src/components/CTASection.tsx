import { MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section id="final-cta" className="section-spacing">
      <div className="section-shell card text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Dejá atrás el caos del cuaderno y Excel.</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#diagnostico" className="cta-button w-full sm:w-auto">
            Solicitar diagnóstico gratuito
          </a>
          <a href="https://wa.me/5491100000000" className="secondary-button w-full sm:w-auto">
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
