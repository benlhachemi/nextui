import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/theme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [nextui({
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          background: '#f9fafb',
          foreground: '#111827',
        }, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          background: '#000000',
          foreground: '#f9fafb',
        }, // dark theme colors
      },
    },
  })],
};
export default config;
