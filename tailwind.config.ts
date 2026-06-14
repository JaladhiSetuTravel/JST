import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { navy: '#08264A', blue: '#0D3B66', gold: '#D6A84F', mist: '#F4F7FB', ink: '#111827' },
      boxShadow: { soft: '0 18px 50px rgba(8,38,74,.12)' },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] }
    }
  },
  plugins: []
};
export default config;
