/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,njk,md,ts,tsx}'],
  plugins: [require('./dist/tailwind/osom-tailwind.umd.js')],
};
