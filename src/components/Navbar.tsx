export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight text-brand-600">
          Counter
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a href="#funcionalidades" className="transition hover:text-brand-600">
            Funcionalidades
          </a>
          <a href="#como-funciona" className="transition hover:text-brand-600">
            Cómo funciona
          </a>
          <a href="#precios" className="transition hover:text-brand-600">
            Precios
          </a>
        </nav>

        <a href="#diagnostico" className="cta-button">
          Empezar gratis
        </a>
      </div>
    </header>
  );
}
