/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '12px 9px 10px rgba(0, 0, 0, 0.5)',
        '2xl': '12px 9px 10px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'hero-bg': "url('/hero-bg.svg')"
      },
    },
  },
  plugins: [],
}
