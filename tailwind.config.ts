import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        display: ['var(--font-outfit)', 'Outfit', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#F3EDF9',
          100: '#E4D5F2',
          200: '#C9ABE5',
          300: '#817E9F',
          400: '#8A2C70',
          500: '#6B3D88',
          600: '#4B2D67',
          700: '#3A2250',
          800: '#261734',
          900: '#1A0F24'
        },
        accent: {
          300: '#F7D64B',
          400: '#FFB860',
          500: '#FF992D',
          600: '#FC6153'
        }
      },
      boxShadow: {
        soft: '0 4px 24px rgba(15, 23, 42, 0.08)',
        card: '0 2px 12px rgba(15, 23, 42, 0.06)',
        brand: '0 8px 32px rgba(75, 45, 103, 0.35)',
        accent: '0 8px 32px rgba(255, 153, 45, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
