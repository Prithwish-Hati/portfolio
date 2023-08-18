/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '744px',
      'lg': '1280px',
      'xl': '1440px'
    },
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
