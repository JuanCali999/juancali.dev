/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#101114',
        section: '#191716',
        text: '#636060',
        border: '#0D1418',
        'text-primary': '#ffffff',
        'bg-hover': '#101311'
      }
    }
  },
  plugins: [],
}
