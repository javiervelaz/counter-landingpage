import Image from 'next/image';
import logoClaro from '@/assets/Logos/COUNTER CRM/COUNTER CRM Logo horizontal claro.png';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-800">
      <div className="w-full px-4 md:px-8 lg:px-16 flex h-16 md:h-24 items-center justify-between gap-3">
        <a href="/" className="flex shrink-0 items-center">
          <Image
            src={logoClaro}
            alt="Counter CRM"
            height={52}
            priority
            className="h-8 md:h-[52px] w-auto"
          />
        </a>

        <nav className="hidden items-center gap-12 text-base font-semibold text-white/80 md:flex">
          <a href="#funcionalidades" className="transition hover:text-white">
            Funcionalidades
          </a>
          <a href="#como-funciona" className="transition hover:text-white">
            Cómo funciona
          </a>
          <a href="#precios" className="transition hover:text-white">
            Precios
          </a>
        </nav>

        <a
          href="#diagnostico"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-accent-500 px-4 py-2 text-sm font-bold text-white shadow-accent transition hover:bg-accent-400 md:px-8 md:py-3 md:text-base"
        >
          Empezar gratis
        </a>
      </div>
    </header>
  );
}
