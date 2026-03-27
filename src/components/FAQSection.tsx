'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Necesito saber de tecnología para usar Counter?',
    answer:
      'No. Counter fue diseñado para dueños de negocios, no para técnicos. La interfaz es simple e intuitiva, y te ayudamos en la configuración inicial paso a paso.'
  },
  {
    question: '¿Puedo usarlo desde el celular?',
    answer:
      'Sí. Counter funciona en cualquier dispositivo con navegador web: celular, tablet o computadora. No necesitás instalar nada.'
  },
  {
    question: '¿Qué pasa con mis datos si cancelo?',
    answer:
      'Tus datos son tuyos. Podés exportarlos en cualquier momento antes de cancelar. Nunca bloqueamos el acceso a tu información.'
  },
  {
    question: '¿Puedo migrar desde Excel o WhatsApp?',
    answer:
      'Sí. Te ayudamos a importar tu base de clientes y productos existentes. El proceso tarda menos de 30 minutos con nuestro soporte.'
  },
  {
    question: '¿Hay contrato de permanencia?',
    answer:
      'No. Podés cancelar cuando quieras, sin penalizaciones ni letras chicas. El plan Pro se factura mes a mes.'
  }
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-spacing bg-white">
      <div className="section-shell">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Preguntas frecuentes</span>
        </div>
        <h2 className="mx-auto max-w-xl text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Todo lo que querés saber
        </h2>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div key={faq.question}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`ml-4 h-5 w-5 flex-shrink-0 text-brand-600 transition-transform ${
                    open === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {open === i && (
                <div className="pb-5 text-sm leading-relaxed text-slate-500">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
