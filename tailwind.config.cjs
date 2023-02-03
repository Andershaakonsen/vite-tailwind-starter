/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('radix-colors-for-tailwind')({
      colors: ['slate', 'blue', 'violet'],
    }),
  ],
};
