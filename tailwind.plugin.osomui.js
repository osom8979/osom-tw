/** @type {import('tailwindcss/plugin').Plugin} */
const plugin = require('tailwindcss/plugin'); // eslint-disable-line @typescript-eslint/no-var-requires

const osomUiPlugin = plugin(
  () => {
    // EMPTY.
  },
  {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Sunflower', 'sans-serif', 'system-ui'],
          serif: ['Hahmlet Variable', 'serif', 'system-ui'],
          mono: ['Nanum Gothic Coding', 'monospace', 'system-ui'],
        },
        colors: {
          primary: '#96B6C5',
          secondary: '#ADC4CE',
          tertiary: '#EEE0C9',
          quaternary: '#F1F0E8',
          background: '#F0F0F0',
          dark: {
            primary: '#27374D',
            secondary: '#526D82',
            tertiary: '#9DB2BF',
            quaternary: '#DDE6ED',
            background: '#0f172a',
          },
        },
        spacing: {
          header: '2.5rem',
        },
      },
    },
  },
);

module.exports = osomUiPlugin;
