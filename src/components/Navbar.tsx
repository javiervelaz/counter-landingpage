import Image from 'next/image';
import logoClaro from '@/assets/Logos/COUNTER CRM/COUNTER CRM Logo horizontal claro.png';
import { signupUrl } from '@/data/content';

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
          <a href="#nosotros" className="transition hover:text-white">
            Nosotros
          </a>
          <a href="#precios" className="transition hover:text-white">
            Precios
          </a>
        </nav>

       <a href={signupUrl('FREE', 'navbar')} className="...">Empezar gratis</a>
      </div>
    </header>
  );
}
