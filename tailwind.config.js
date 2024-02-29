/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'hsl(0, 100%, 74%)',
          green: 'hsl(154, 59%, 51%)',
        },
        accent: {
          blue: 'hsl(248, 32%, 49%)',
        },
        neutral: {
          darkBlue: 'hsl(249, 10%, 26%)',
          grayishBlue: 'hsl(246, 25%, 77%)'
        }
      },
      backgroundImage: {
        mobile: "url('images/bg-intro-mobile.png')",
        desktop: "url('images/bg-intro-desktop.png')"
      },

      screens: {
        halfxl: '1440px'
      },
      fontFamily: {
        primary: 'Poppins',
      },
      fontWeight: {
        bold400: '400',
        bold500: '500',
        bold600: '600',
        bold700: '700'
      },
    },
  },
  plugins: [],
}

