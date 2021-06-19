module.exports = {
  purge: ['./src/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '12': '2.9rem'
      },
      fontSize: {
        'tiny': '.675rem',
        '2sm': ['0.94rem', {
          lineHeight: '1.45rem',
        }],
        'xlBigger': ['1.4rem', {
          lineHeight: '1.75rem',
        }],
        '2xlBigger': ['1.74rem', {
          lineHeight: '2.25rem',
        }],
      },
      colors: {
        amber: {
          25: "#f0eae6"
        },
        green: {
          450: "#00c660"
        },
        blue: {
          750: "#0c4b88"
        },
        blueGray: {
          650: "#374048"
        },
        sky: {
          800: "#075985"
        },
        cyan: {
          450: "#5eb7bb",
          500: "#06B6D4",
          550: "#07899c"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
