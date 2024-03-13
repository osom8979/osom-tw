import type {Config} from 'tailwindcss/types/config';
import {hexToRgb} from './colors';
import type {OsomOptions} from './options';
import {
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
  osom_color_accent,
  osom_color_accent_content,
  osom_color_neutral,
  osom_color_neutral_content,
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
} from './variables';

export function createOsomConfig(options: OsomOptions): Partial<Config> {
  console.assert(typeof options !== 'undefined');
  return {
    theme: {
      extend: {
        fontFamily: {
          sans: [
            `var(${osom_font_sans})`,
            'Noto Sans KR',
            'sans-serif',
            'ui-serif',
            'system-ui',
          ],
          serif: [
            `var(${osom_font_serif})`,
            'Hahmlet Variable',
            'serif',
            'ui-sans-serif',
            'system-ui',
          ],
          mono: [
            `var(${osom_font_mono})`,
            'Nanum Gothic Coding',
            'monospace',
            'ui-monospace',
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
          accent: {
            DEFAULT: `rgba(var(${osom_color_accent}), <alpha-value>)`,
            content: `rgba(var(${osom_color_accent_content}), <alpha-value>)`,
          },
          neutral: {
            DEFAULT: `rgba(var(${osom_color_neutral}), <alpha-value>)`,
            content: `rgba(var(${osom_color_neutral_content}), <alpha-value>)`,
            50: `rgba(${hexToRgb('#fafafa')}, <alpha-value>)`,
            100: `rgba(${hexToRgb('#f5f5f5')}, <alpha-value>)`,
            200: `rgba(${hexToRgb('#e5e5e5')}, <alpha-value>)`,
            300: `rgba(${hexToRgb('#d4d4d4')}, <alpha-value>)`,
            400: `rgba(${hexToRgb('#a3a3a3')}, <alpha-value>)`,
            500: `rgba(${hexToRgb('#737373')}, <alpha-value>)`,
            600: `rgba(${hexToRgb('#525252')}, <alpha-value>)`,
            700: `rgba(${hexToRgb('#404040')}, <alpha-value>)`,
            800: `rgba(${hexToRgb('#262626')}, <alpha-value>)`,
            900: `rgba(${hexToRgb('#171717')}, <alpha-value>)`,
            950: `rgba(${hexToRgb('#0a0a0a')}, <alpha-value>)`,
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
          'cell-etc': 'calc(100vh - theme(spacing.cell))',
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
