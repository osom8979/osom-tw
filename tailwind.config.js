/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,njk,md,ts,tsx}'],
  plugins: [require('./dist/osom-ui.umd.js')],
};
