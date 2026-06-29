/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(63, 131, 248, 0.08), 0 24px 80px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
