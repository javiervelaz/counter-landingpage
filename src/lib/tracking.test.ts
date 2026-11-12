import { describe, expect, it } from 'vitest';
import {
  ATTR_KEY,
  aplicarAtribucion,
  esLinkSignup,
  esLinkWhatsapp,
  guardarAtribucion,
  leerAtribucionDeUrl,
  leerAtribucionGuardada
} from './tracking';

const memoria = () => {
  const data = new Map<string, string>();
  return {
    getItem: (k: string) => data.get(k) ?? null,
    setItem: (k: string, v: string) => void data.set(k, v)
  };
};

describe('leerAtribucionDeUrl', () => {
  it('toma utm_* y fbclid, ignora el resto y los vacíos', () => {
    expect(
      leerAtribucionDeUrl('?utm_source=facebook&utm_medium=cpc&utm_campaign=c1&utm_content=v2&fbclid=AbC&x=1&utm_term=')
    ).toEqual({ utm_source: 'facebook', utm_medium: 'cpc', utm_campaign: 'c1', utm_content: 'v2', fbclid: 'AbC' });
  });

  it('recorta valores larguísimos', () => {
    const r = leerAtribucionDeUrl(`?utm_source=${'a'.repeat(500)}`);
    expect(r.utm_source).toHaveLength(150);
  });
});

describe('guardarAtribucion', () => {
  it('guarda si la URL trae parámetros', () => {
    const s = memoria();
    guardarAtribucion('?utm_source=instagram&utm_content=v1', s);
    expect(JSON.parse(s.getItem(ATTR_KEY)!)).toEqual({ utm_source: 'instagram', utm_content: 'v1' });
  });

  it('conserva la atribución previa si la visita siguiente no trae parámetros', () => {
    const s = memoria();
    guardarAtribucion('?utm_source=instagram', s);
    expect(guardarAtribucion('', s)).toEqual({ utm_source: 'instagram' });
  });

  it('una visita nueva con parámetros reemplaza a la anterior', () => {
    const s = memoria();
    guardarAtribucion('?utm_source=instagram', s);
    guardarAtribucion('?utm_source=facebook', s);
    expect(leerAtribucionGuardada(s)).toEqual({ utm_source: 'facebook' });
  });

  it('no explota si el storage tira error', () => {
    const roto = {
      getItem: () => {
        throw new Error('bloqueado');
      },
      setItem: () => {
        throw new Error('bloqueado');
      }
    };
    expect(guardarAtribucion('?utm_source=facebook', roto)).toEqual({ utm_source: 'facebook' });
    expect(guardarAtribucion('', roto)).toEqual({});
  });

  it('ignora JSON corrupto', () => {
    const s = memoria();
    s.setItem(ATTR_KEY, '{no-es-json');
    expect(leerAtribucionGuardada(s)).toEqual({});
  });
});

describe('aplicarAtribucion', () => {
  const base = 'https://app.countercrm.com/saas?plan=FREE&utm_source=landing&utm_campaign=hero';

  it('sin atribución devuelve el link intacto', () => {
    expect(aplicarAtribucion(base, {})).toBe(base);
  });

  it('los valores del anuncio pisan a los de la landing y conserva plan', () => {
    const u = new URL(aplicarAtribucion(base, { utm_source: 'facebook', utm_content: 'v2', fbclid: 'XYZ' }));
    expect(u.searchParams.get('plan')).toBe('FREE');
    expect(u.searchParams.get('utm_source')).toBe('facebook');
    expect(u.searchParams.get('utm_campaign')).toBe('hero');
    expect(u.searchParams.get('utm_content')).toBe('v2');
    expect(u.searchParams.get('fbclid')).toBe('XYZ');
  });

  it('una URL inválida se devuelve sin tocar', () => {
    expect(aplicarAtribucion('no es url', { utm_source: 'x' })).toBe('no es url');
  });
});

describe('detección de links', () => {
  it('reconoce WhatsApp', () => {
    expect(esLinkWhatsapp('https://wa.me/5493510000000?text=hola')).toBe(true);
    expect(esLinkWhatsapp('https://api.whatsapp.com/send?phone=1')).toBe(true);
    expect(esLinkWhatsapp('https://example.com/wa.me/')).toBe(false);
  });

  it('reconoce el signup de la app', () => {
    expect(esLinkSignup('https://app.countercrm.com/saas?plan=FREE', 'https://app.countercrm.com')).toBe(true);
    expect(esLinkSignup('https://otro.com/saas', 'https://app.countercrm.com')).toBe(false);
  });
});
