import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f5ff',
          100: '#ebe9ff',
          200: '#d7d2ff',
          300: '#bcb0ff',
          400: '#8c78ff',
          500: '#6455f4',
          600: '#5143d6',
          700: '#4239b3',
          800: '#372f92',
          900: '#2d276f'
        },
        surface: {
          50: '#f7f8fc',
          100: '#eef0f7',
          200: '#dfe3ef',
          300: '#c7cee0',
          400: '#a7b1c2',
          500: '#7f8aa9',
          600: '#5e6d8f',
          700: '#44506d',
          800: '#323d54',
          900: '#212a3d'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)'
      },
      borderRadius: {
        xl: '1.25rem'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};

export default config;
