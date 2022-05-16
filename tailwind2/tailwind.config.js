module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          customColor: {
            light: '#b3bcf5',
            DEFAULT: '#5c6ac4',
            dark: '#202e78',
          },
          customColor2: {
            '100': '#570A57',
            '200': '#A91079',
            '300': '#F806CC',
          }
        },


        fontFamily: {
          'text-body': ['"Zen Loop"', 'cursive'],
         }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
