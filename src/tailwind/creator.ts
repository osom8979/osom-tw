import type {PluginAPI, Config} from 'tailwindcss/types/config';

export const DEFAULT_PREFIX = 'osom-';

export interface OsomTheme {
  fontSans: string;
  fontSerif: string;
  fontMono: string;

  colorBase100: string;
  colorBase200: string;
  colorBase300: string;
  colorBaseContent: string;

  colorPrimary: string;
  colorPrimaryContent: string;
  colorSecondary: string;
  colorSecondaryContent: string;
  colorInfo: string;
  colorInfoContent: string;
  colorSuccess: string;
  colorSuccessContent: string;
  colorWarning: string;
  colorWarningContent: string;
  colorError: string;
  colorErrorContent: string;

  sizeCell: string;

  roundedBox: string;
  roundedBtn: string;
  roundedBadge: string;
}

export interface OsomPluginOptions {
  logs?: boolean;
  prefix?: string;

  light?: Partial<OsomTheme>;
  dark?: Partial<OsomTheme>;
}

export function createOsomPlugin(api: PluginAPI, options: OsomPluginOptions): void {
  console.assert(typeof options !== 'undefined');

  const prefix = options.prefix || DEFAULT_PREFIX;
  const {addBase, addComponents, theme} = api;

  addBase({
    ':root': {
      backgroundColor: theme('colors.base.100'),
      color: theme('colors.base.content'),
    },
  });

  addComponents({
    [`.${prefix}btn`]: {
      display: 'flex',
      color: theme('colors.gray.400'),
    },
  });
}

export function createOsomConfig(options: OsomPluginOptions): Partial<Config> {
  console.assert(typeof options !== 'undefined');
  return {
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-sans)', 'Noto Sans KR', 'sans-serif', 'system-ui'],
          serif: ['var(--font-serif)', 'Hahmlet Variable', 'serif', 'system-ui'],
          mono: ['var(--font-mono)', 'Nanum Gothic Coding', 'monospace', 'system-ui'],
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          base: {
            100: 'rgba(var(--color-base-100), <alpha-value>)',
            200: 'rgba(var(--color-base-200), <alpha-value>)',
            300: 'rgba(var(--color-base-300), <alpha-value>)',
            content: 'rgba(var(--color-base-content), <alpha-value>)',
          },
          primary: {
            DEFAULT: 'rgba(var(--color-primary, <alpha-value>)',
            content: 'rgba(var(--color-primary-content, <alpha-value>)',
          },
          secondary: {
            DEFAULT: 'rgba(var(--color-secondary, <alpha-value>)',
            content: 'rgba(var(--color-secondary-content, <alpha-value>)',
          },
          info: {
            DEFAULT: 'rgba(var(--color-info, <alpha-value>)',
            content: 'rgba(var(--color-info-content, <alpha-value>)',
          },
          success: {
            DEFAULT: 'rgba(var(--color-success, <alpha-value>)',
            content: 'rgba(var(--color-success-content, <alpha-value>)',
          },
          warning: {
            DEFAULT: 'rgba(var(--color-warning, <alpha-value>)',
            content: 'rgba(var(--color-warning-content, <alpha-value>)',
          },
          error: {
            DEFAULT: 'rgba(var(--color-error, <alpha-value>)',
            content: 'rgba(var(--color-error-content, <alpha-value>)',
          },
        },
        spacing: {
          cell: 'var(--size-cell, 3rem)',
          cellEtc: 'calc(100vh - theme(spacing.cell))',
        },
        borderRadius: {
          box: 'var(--rounded-box, 0.75rem)',
          btn: 'var(--rounded-btn, 0.5rem)',
          badge: 'var(--rounded-badge, 0.25rem)',
        },
      },
    },
  };
}
