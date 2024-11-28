/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
        '1': '#FFE117',
        '2': '#FFE433',
        '3': '#FFFCE5',
        },
        black: {
        '1':'#1A1A1A',
        '2':'#333333',
        '3':'#4D4D4D',
        },
        Gray :{
        '1':'#FFFFFF',
        '2':'#F7F7F7',
        '3':'#E6E6E6',
        '4':'#CCCCCC',
        '5':'#B3B3B3',
        '6':'#666666',
        },
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
