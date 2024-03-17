import type {CSSRuleObject, CustomThemeConfig} from 'tailwindcss/types/config';
import {hexToRgb} from './colors.ts';
import components from './components';
import {
  type OsomOptions,
  type RequiredOsomOptions,
  getRequiredOptions,
} from './options';

export class InvalidComponentTypeError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class InvalidClassNameError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class OsomPluginGenerator {
  options: RequiredOsomOptions;

  constructor(options?: OsomOptions) {
    this.options = getRequiredOptions(options);
  }

  get prefix() {
    return this.options.prefix;
  }

  get light() {
    return this.options.light;
  }

  get dark() {
    return this.options.dark;
  }

  get fallback() {
    return this.options.fallback;
  }

  get themes() {
    return this.options.themes;
  }

  get lightFallbackVariables() {
    return this.fallback.asVariables(this.themes[this.light]);
  }

  get darkFallbackVariables() {
    return this.fallback.asVariables(this.themes[this.dark]);
  }

  get configThemeExtend() {
    return {
      fontFamily: {
        sans: [
          `var(${this.fallback.font_sans})`,
          'Noto Sans KR',
          'sans-serif',
          'ui-serif',
          'system-ui',
        ],
        serif: [
          `var(${this.fallback.font_serif})`,
          'Hahmlet Variable',
          'serif',
          'ui-sans-serif',
          'system-ui',
        ],
        mono: [
          `var(${this.fallback.font_mono})`,
          'Nanum Gothic Coding',
          'monospace',
          'ui-monospace',
          'system-ui',
        ],
      },
      colors: {
        base: {
          100: `rgb(var(${this.fallback.color_base_100}) / <alpha-value>)`,
          200: `rgb(var(${this.fallback.color_base_200}) / <alpha-value>)`,
          300: `rgb(var(${this.fallback.color_base_300}) / <alpha-value>)`,
          content: `rgb(var(${this.fallback.color_base_content}) / <alpha-value>)`,
        },
        primary: {
          DEFAULT: `rgb(var(${this.fallback.color_primary}) / <alpha-value>)`,
          content: `rgb(var(${this.fallback.color_primary_content}) / <alpha-value>)`,
        },
        secondary: {
          DEFAULT: `rgb(var(${this.fallback.color_secondary}) / <alpha-value>)`,
          content: `rgb(var(${this.fallback.color_secondary_content}) / <alpha-value>)`,
        },
        accent: {
          DEFAULT: `rgb(var(${this.fallback.color_accent}) / <alpha-value>)`,
          content: `rgb(var(${this.fallback.color_accent_content}) / <alpha-value>)`,
        },
        neutral: {
          DEFAULT: `rgb(var(${this.fallback.color_neutral}) / <alpha-value>)`,
          content: `rgb(var(${this.fallback.color_neutral_content}) / <alpha-value>)`,
          50: `rgb(${hexToRgb('#fafafa')} / <alpha-value>)`,
          100: `rgb(${hexToRgb('#f5f5f5')} / <alpha-value>)`,
          200: `rgb(${hexToRgb('#e5e5e5')} / <alpha-value>)`,
          300: `rgb(${hexToRgb('#d4d4d4')} / <alpha-value>)`,
          400: `rgb(${hexToRgb('#a3a3a3')} / <alpha-value>)`,
          500: `rgb(${hexToRgb('#737373')} / <alpha-value>)`,
          600: `rgb(${hexToRgb('#525252')} / <alpha-value>)`,
          700: `rgb(${hexToRgb('#404040')} / <alpha-value>)`,
          800: `rgb(${hexToRgb('#262626')} / <alpha-value>)`,
          900: `rgb(${hexToRgb('#171717')} / <alpha-value>)`,
          950: `rgb(${hexToRgb('#0a0a0a')} / <alpha-value>)`,
        },
        info: {
          DEFAULT: `rgb(var(${this.fallback.color_info}) / <alpha-value>)`,
          content: `rgb(var(${this.fallback.color_info_content}) / <alpha-value>)`,
        },
        success: {
          DEFAULT: `rgb(var(${this.fallback.color_success}) / <alpha-value>)`,
          content: `rgb(var(${this.fallback.color_success_content}) / <alpha-value>)`,
        },
        warning: {
          DEFAULT: `rgb(var(${this.fallback.color_warning}) / <alpha-value>)`,
          content: `rgb(var(${this.fallback.color_warning_content}) / <alpha-value>)`,
        },
        error: {
          DEFAULT: `rgb(var(${this.fallback.color_error}) / <alpha-value>)`,
          content: `rgb(var(${this.fallback.color_error_content}) / <alpha-value>)`,
        },
      },
      spacing: {
        cell: `var(${this.fallback.size_cell}, 3rem)`,
        'cell-etc': 'calc(100vh - theme(spacing.cell))',
      },
      borderRadius: {
        box: `var(${this.fallback.rounded_box}, 0.75rem)`,
        btn: `var(${this.fallback.rounded_btn}, 0.5rem)`,
        badge: `var(${this.fallback.rounded_badge}, 0.25rem)`,
      },
    } as Partial<CustomThemeConfig>;
  }

  get fallbackDataThemes() {
    return Object.entries(this.themes).reduce(
      (o, [key, value]) => {
        o[`[data-theme=${key}]`] = this.fallback.asVariables(value);
        return o;
      },
      {} as Record<string, Record<string, string>>,
    );
  }

  get base() {
    return {
      ':root, [data-theme]': {
        backgroundColor: 'theme("colors.base.100")',
        color: 'theme("colors.base.content")',
      },
      ':root': {
        ...this.lightFallbackVariables,
      },
      '@media (prefers-color-scheme: dark)': {
        ':root': {
          ...this.darkFallbackVariables,
        },
      },
      ...this.fallbackDataThemes,
    } as CSSRuleObject;
  }

  get components() {
    const cs = components
      .map(c => {
        if (typeof c !== 'function') {
          throw new InvalidComponentTypeError();
        }
        return c(this.options);
      })
      .reduce((o, c) => {
        return {...o, ...c};
      }, {} as CSSRuleObject);

    return Object.entries(cs).reduce((o, [key, value]) => {
      if (!key.startsWith('.')) {
        throw new InvalidClassNameError();
      }
      o[`.${this.prefix}${key.substring(1)}`] = value;
      return o;
    }, {} as CSSRuleObject);
  }

  get utilities() {
    return {
      '.scroll-hidden': {
        '&::-webkit-scrollbar': {display: 'none'}, // Chrome, Edge, Opera, Safari
        '-ms-overflow-style': 'none', // IE, Edge
        'scrollbar-width': 'none', // Firefox
      },
    } as CSSRuleObject;
  }
}
