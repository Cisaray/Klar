/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen: {
      lg:{max:'1199.99px'},
      md:{max:'991.99px'},
      sm:{max:'767.99px'},
      xs:{max:'479.99px'},
    },
    extend: {
      fontFamily:{
        roboto:['Roboto Slab', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

