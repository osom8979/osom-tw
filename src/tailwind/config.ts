import type {Config} from 'tailwindcss/types/config';
import {hexToRgb} from './colors';
import {type OsomOptions, getRequiredOptions} from './options';

export function createOsomConfig(options: OsomOptions): Partial<Config> {
  const {fallback} = getRequiredOptions(options);
  return {
    theme: {
      extend: {
        fontFamily: {
          sans: [
            `var(${fallback.font_sans})`,
            'Noto Sans KR',
            'sans-serif',
            'ui-serif',
            'system-ui',
          ],
          serif: [
            `var(${fallback.font_serif})`,
            'Hahmlet Variable',
            'serif',
            'ui-sans-serif',
            'system-ui',
          ],
          mono: [
            `var(${fallback.font_mono})`,
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
            100: `rgba(var(${fallback.color_base_100}), <alpha-value>)`,
            200: `rgba(var(${fallback.color_base_200}), <alpha-value>)`,
            300: `rgba(var(${fallback.color_base_300}), <alpha-value>)`,
            content: `rgba(var(${fallback.color_base_content}), <alpha-value>)`,
          },
          primary: {
            DEFAULT: `rgba(var(${fallback.color_primary}), <alpha-value>)`,
            content: `rgba(var(${fallback.color_primary_content}), <alpha-value>)`,
          },
          secondary: {
            DEFAULT: `rgba(var(${fallback.color_secondary}), <alpha-value>)`,
            content: `rgba(var(${fallback.color_secondary_content}), <alpha-value>)`,
          },
          accent: {
            DEFAULT: `rgba(var(${fallback.color_accent}), <alpha-value>)`,
            content: `rgba(var(${fallback.color_accent_content}), <alpha-value>)`,
          },
          neutral: {
            DEFAULT: `rgba(var(${fallback.color_neutral}), <alpha-value>)`,
            content: `rgba(var(${fallback.color_neutral_content}), <alpha-value>)`,
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
            DEFAULT: `rgba(var(${fallback.color_info}), <alpha-value>)`,
            content: `rgba(var(${fallback.color_info_content}), <alpha-value>)`,
          },
          success: {
            DEFAULT: `rgba(var(${fallback.color_success}), <alpha-value>)`,
            content: `rgba(var(${fallback.color_success_content}), <alpha-value>)`,
          },
          warning: {
            DEFAULT: `rgba(var(${fallback.color_warning}), <alpha-value>)`,
            content: `rgba(var(${fallback.color_warning_content}), <alpha-value>)`,
          },
          error: {
            DEFAULT: `rgba(var(${fallback.color_error}), <alpha-value>)`,
            content: `rgba(var(${fallback.color_error_content}), <alpha-value>)`,
          },
        },
        spacing: {
          cell: `var(${fallback.size_cell}, 3rem)`,
          'cell-etc': 'calc(100vh - theme(spacing.cell))',
        },
        borderRadius: {
          box: `var(${fallback.rounded_box}, 0.75rem)`,
          btn: `var(${fallback.rounded_btn}, 0.5rem)`,
          badge: `var(${fallback.rounded_badge}, 0.25rem)`,
        },
      },
    },
  };
}
