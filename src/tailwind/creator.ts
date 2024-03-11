import type {PluginAPI, Config} from 'tailwindcss/types/config';

export const DEFAULT_PREFIX = 'osom-';

export interface OsomPluginOptions {
  prefix?: string;
}

export function createOsomPlugin(api: PluginAPI, options: OsomPluginOptions): void {
  const prefix = options.prefix || DEFAULT_PREFIX;
  const {addComponents, theme} = api;
  addComponents({
    [`.${prefix}btn`]: {
      display: 'flex',
      color: theme('colors.gray.400'),
    },
  });
  // height: calc(100vh - theme(spacing.12));
}

export function createOsomConfig(options: OsomPluginOptions): Partial<Config> {
  const prefix = options.prefix || DEFAULT_PREFIX;
  return {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Noto Sans KR', 'sans-serif', 'system-ui'],
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
          // [`${prefix}header`]: '3rem',
          // [`${prefix}main`]: `calc(100vh - theme(spacing.${prefix}header))`,
          [`${prefix}cell-xs`]: '3rem',
          [`${prefix}cell-sm`]: '4rem',
          [`${prefix}cell-md`]: '5rem',
          [`${prefix}cell-lg`]: '6rem',
          [`${prefix}cell-xl`]: '7rem',
        },
      },
    },
  };
}
