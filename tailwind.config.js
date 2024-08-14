/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    letterSpacing: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
    },
    extend: {
      colors: {
        primary: {
          darkCyan: "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)"
        },
        neutral: {
          veryDarkBlue: "hsl(212, 36%, 14%)",
          darkGrayishBlue: "hsl(228, 12%, 48%)",
          white: "hsl(0, 0%, 100%)"
        }
      },
      fontFamily: {
        montserrat: '"Montserrat"',
        fraunces: '"Fraunces"'
      },
      backgroundImage: {
        'desktop-image': "url(/images/image-product-desktop.jpg)",
        'mobile-image': "url(/images/image-product-mobile.jpg)"
      },
    },
  },
  plugins: [],
}