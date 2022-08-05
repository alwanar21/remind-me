/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        'h': '#212121',
        'p': '#747474',
        'blue-icons': '#2D76F9',
      },
      fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        h1: ['64px', {
          lineHeight: '85px',
        }],
        h1m: ['48px', {
          lineHeight: '85px',
        }],
        h2: ['36px', {
          lineHeight: '65px',
        }],
        h3: ['24px', {
          lineHeight: '40px',
        }],
        para: ['18px', {
          lineHeight: '36px',
        }],
      },
    },
  },
  plugins: [],
}
