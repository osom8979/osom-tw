import type {PluginAPI} from 'tailwindcss/types/config';
import {type OsomOptions, getRequiredOptions} from './options';

export function createOsomPlugin(api: PluginAPI, options: OsomOptions): void {
  const {prefix, light, dark, themes, fallback} = getRequiredOptions(options);
  const {addBase, addComponents, theme} = api;
  const dataThemes = Object.entries(themes).reduce((o, [key, value]) => {
    o[`[data-theme=${key}]`] = fallback.asVariables(value);
    return o;
  }, {} as Record<string, Record<string, string>>);

  addBase({
    ':root, [data-theme]': {
      backgroundColor: 'theme("colors.base.100")',
      color: 'theme("colors.base.content")',
    },
    ':root': {
      ...fallback.asVariables(themes[light]),
    },
    '@media (prefers-color-scheme: dark)': {
      ':root': {
        ...fallback.asVariables(themes[dark]),
      },
    },
    ...dataThemes,
  });

  addComponents({
    [`.${prefix}btn`]: {
      display: 'flex',
      color: theme('colors.gray.400'),
    },
  });
}
