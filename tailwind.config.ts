import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af'
        }
      },
      boxShadow: {
        soft: '0 4px 24px rgba(15, 23, 42, 0.08)',
        card: '0 2px 12px rgba(15, 23, 42, 0.06)',
        blue: '0 8px 32px rgba(37, 99, 235, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
