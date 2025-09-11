/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'system-ui', 'sans-serif'],
        'sans': ['Montserrat', 'system-ui', 'sans-serif'], // También como fuente por defecto
      },
      colors: {
        'custom-hover': 'oklch(70.9% 0.01 56.259)',
      },
    },
  },
  plugins: [],
}

