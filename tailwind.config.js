/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import withMT from '@material-tailwind/html/utils/withMT';

export default withMT({
  content: ['./views/*.{hbs,html,js,handlebars}', './views/partials/*.{html,js,handlebars,hbs}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'meteor-svg': "url('/svg/Meteor.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'tertiary-color': 'var(--tertiary-color)',
        'quaternary-color': 'var(--quaternary-color)',
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
    },
    body: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    fontFamily: {
      sans: ['sans-serif', 'Lato', 'Quicksand', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
});
