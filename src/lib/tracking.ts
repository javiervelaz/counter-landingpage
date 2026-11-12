// Atribución de campañas (Meta/Instagram) entre la landing y la app.
// Funciones puras + storage inyectable para poder testearlas sin navegador.

export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

export const ATTR_KEY = 'counter_attr';
export const ATTR_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'fbclid'] as const;

export type AtribucionParam = (typeof ATTR_PARAMS)[number];
export type Atribucion = Partial<Record<AtribucionParam, string>>;

const MAX_LEN = 150;

type StorageLike = Pick<Storage, 'getItem' | 'setItem'>;

/** Extrae los parámetros de atribución de un querystring. Ignora vacíos y recorta largos. */
export function leerAtribucionDeUrl(search: string): Atribucion {
  const params = new URLSearchParams(search);
  const out: Atribucion = {};
  for (const key of ATTR_PARAMS) {
    const value = (params.get(key) || '').trim().slice(0, MAX_LEN);
    if (value) out[key] = value;
  }
  return out;
}

/** Guarda la atribución si la URL trae parámetros nuevos; si no, conserva la anterior. */
export function guardarAtribucion(search: string, storage: StorageLike): Atribucion {
  const nueva = leerAtribucionDeUrl(search);
  try {
    if (Object.keys(nueva).length > 0) {
      storage.setItem(ATTR_KEY, JSON.stringify(nueva));
      return nueva;
    }
    return leerAtribucionGuardada(storage);
  } catch {
    // storage bloqueado (modo privado, etc.): seguimos con lo que vino en la URL
    return nueva;
  }
}

export function leerAtribucionGuardada(storage: StorageLike): Atribucion {
  try {
    const raw = storage.getItem(ATTR_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const out: Atribucion = {};
    for (const key of ATTR_PARAMS) {
      const v = parsed[key];
      if (typeof v === 'string' && v) out[key] = v.slice(0, MAX_LEN);
    }
    return out;
  } catch {
    return {};
  }
}

/** Pisa los parámetros del link de signup con los del anuncio (si los hay). */
export function aplicarAtribucion(href: string, attr: Atribucion): string {
  if (Object.keys(attr).length === 0) return href;
  try {
    const url = new URL(href);
    for (const key of ATTR_PARAMS) {
      const value = attr[key];
      if (value) url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return href;
  }
}

export function esLinkWhatsapp(href: string): boolean {
  return /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href);
}

export function esLinkSignup(href: string, appUrl: string): boolean {
  return href.startsWith(`${appUrl}/saas`);
}

type Fbq = (...args: unknown[]) => void;

/** Dispara un evento estándar del Pixel. No hace nada si el Pixel no está cargado. */
export function trackPixel(evento: string, data?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (typeof fbq === 'function') fbq('track', evento, data);
}
