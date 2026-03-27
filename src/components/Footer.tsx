export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <div className="section-shell">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="/" className="text-xl font-extrabold tracking-tight text-brand-600">
              Counter
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Organizá pedidos, clientes y stock en un solo lugar. Para pequeños negocios que quieren crecer.
            </p>
          </div>

          {/* Product links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Producto</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: 'Funcionalidades', href: '#funcionalidades' },
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Precios', href: '#precios' }
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-500 transition hover:text-brand-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Contacto</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hola@counter.com"
                  className="text-slate-500 transition hover:text-brand-600"
                >
                  hola@counter.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491100000000"
                  className="text-slate-500 transition hover:text-brand-600"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Counter. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-600 transition">Privacidad</a>
            <a href="#" className="hover:text-brand-600 transition">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
