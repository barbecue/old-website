/** @type {import('tailwindcss').Config} */
const srcDir = 'src';

module.exports = {
  content: [
    `./${srcDir}/components/**/*.{js,vue,ts}`,
    `./${srcDir}/layouts/**/*.vue`,
    `./${srcDir}/pages/**/*.vue`,
    `./${srcDir}/plugins/**/*.{js,ts`,
    `./${srcDir}/nuxt.config.{js,ts}`
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
