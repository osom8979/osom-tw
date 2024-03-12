import type {PluginAPI, Config} from 'tailwindcss/types/config';
import type {OsomTheme} from './theme/interface';
import {DEFAULT_LIGHT_THEME} from './theme/light';
import {DEFAULT_DARK_THEME} from './theme/dark';
import {
  convertFallbackVariables,
  osom_font_sans,
  osom_font_serif,
  osom_font_mono,
  osom_color_base_100,
  osom_color_base_200,
  osom_color_base_300,
  osom_color_base_content,
  osom_color_primary,
  osom_color_primary_content,
  osom_color_secondary,
  osom_color_secondary_content,
  osom_color_info,
  osom_color_info_content,
  osom_color_success,
  osom_color_success_content,
  osom_color_warning,
  osom_color_warning_content,
  osom_color_error,
  osom_color_error_content,
  osom_size_cell,
  osom_rounded_box,
  osom_rounded_btn,
  osom_rounded_badge,
} from './theme/fallback';

export const DEFAULT_PREFIX = 'osom-';

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

  const light = convertFallbackVariables({...DEFAULT_LIGHT_THEME, ...options.light});
  const dark = convertFallbackVariables({...DEFAULT_DARK_THEME, ...options.dark});

  addBase({
    ':root': {
      backgroundColor: theme('colors.base.100'),
      color: theme('colors.base.content'),
      colorScheme: 'light',
      ...light,
    },
    '@media (prefers-color-scheme: dark)': {
      ':root': {
        colorScheme: 'dark',
        ...dark,
      },
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
          sans: [`var(${osom_font_sans})`, 'Noto Sans KR', 'sans-serif', 'system-ui'],
          serif: [`var(${osom_font_serif})`, 'Hahmlet Variable', 'serif', 'system-ui'],
          mono: [
            `var(${osom_font_mono})`,
            'Nanum Gothic Coding',
            'monospace',
            'system-ui',
          ],
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          base: {
            100: `rgba(var(${osom_color_base_100}), <alpha-value>)`,
            200: `rgba(var(${osom_color_base_200}), <alpha-value>)`,
            300: `rgba(var(${osom_color_base_300}), <alpha-value>)`,
            content: `rgba(var(${osom_color_base_content}), <alpha-value>)`,
          },
          primary: {
            DEFAULT: `rgba(var(${osom_color_primary}), <alpha-value>)`,
            content: `rgba(var(${osom_color_primary_content}), <alpha-value>)`,
          },
          secondary: {
            DEFAULT: `rgba(var(${osom_color_secondary}), <alpha-value>)`,
            content: `rgba(var(${osom_color_secondary_content}), <alpha-value>)`,
          },
          info: {
            DEFAULT: `rgba(var(${osom_color_info}), <alpha-value>)`,
            content: `rgba(var(${osom_color_info_content}), <alpha-value>)`,
          },
          success: {
            DEFAULT: `rgba(var(${osom_color_success}), <alpha-value>)`,
            content: `rgba(var(${osom_color_success_content}), <alpha-value>)`,
          },
          warning: {
            DEFAULT: `rgba(var(${osom_color_warning}), <alpha-value>)`,
            content: `rgba(var(${osom_color_warning_content}), <alpha-value>)`,
          },
          error: {
            DEFAULT: `rgba(var(${osom_color_error}), <alpha-value>)`,
            content: `rgba(var(${osom_color_error_content}), <alpha-value>)`,
          },
        },
        spacing: {
          cell: `var(${osom_size_cell}, 3rem)`,
          cellEtc: 'calc(100vh - theme(spacing.cell))',
        },
        borderRadius: {
          box: `var(${osom_rounded_box}, 0.75rem)`,
          btn: `var(${osom_rounded_btn}, 0.5rem)`,
          badge: `var(${osom_rounded_badge}, 0.25rem)`,
        },
      },
    },
  };
}
