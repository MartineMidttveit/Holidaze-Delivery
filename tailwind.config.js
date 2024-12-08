/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      screens: {
        '2xl': '1536px',
        '3xl': '1900px',
      },
      colors: {
        primary: '#1C1A1D',
        secondary: '#595959',
        background: '#F7F7F7',
        contrast: '#006284',
        customOrange: '#f57600',
        customLightBlue: '#CDEAF5',
      },
      height: {
        'screen-minus-40': 'calc(100vh - 40rem)',
        'screen-minus-35': 'calc(100vh - 35rem)',
        'screen-minus-25': 'calc(100vh - 25rem)',
        'screen-minus-20': 'calc(100vh - 20rem)',
        'screen-minus-15': 'calc(100vh - 15rem)',
        'screen-minus-10': 'calc(100vh - 10rem)',
        '106': '26rem',
      },
      width: {
        '106': '26rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '10xl': '8rem',
        '12xl': '10rem',
        '14xl': '12rem',
        '16xl': '14rem',
      },
    },
  },
  plugins: [],
}