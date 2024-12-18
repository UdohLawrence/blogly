/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.{edge, html}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

