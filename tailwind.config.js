/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Karla',],
      'body': ['Karla',],
      'sans': ['Karla',],
      'serif': ['Karla',],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

