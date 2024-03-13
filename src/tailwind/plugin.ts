import type {PluginAPI} from 'tailwindcss/types/config';
import {type OsomOptions, getRequiredOptions} from './options';
import {fallbackVariables} from './variables';

export function createOsomPlugin(api: PluginAPI, options: OsomOptions): void {
  console.assert(typeof options !== 'undefined');

  const {prefix, light, dark, themes} = getRequiredOptions(options);
  const {addBase, addComponents, theme} = api;
  const dataThemes = Object.entries(themes).reduce((o, [key, value]) => {
    o[`[data-theme=${key}]`] = value;
    return o;
  }, {} as typeof themes);

  addBase({
    ':root, [data-theme]': {
      backgroundColor: theme('colors.base.100'),
      color: theme('colors.base.content'),
    },
    ':root': {
      ...fallbackVariables(themes[light]),
    },
    '@media (prefers-color-scheme: dark)': {
      ':root': {
        ...fallbackVariables(themes[dark]),
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
