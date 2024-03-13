import type {PluginAPI} from 'tailwindcss/types/config';
import {type OsomOptions, getRequiredOptions} from './options';
import {convertFallbackVariables} from './variables';

export function createOsomPlugin(api: PluginAPI, options: OsomOptions): void {
  console.assert(typeof options !== 'undefined');

  const {prefix, light, dark} = getRequiredOptions(options);
  const {addBase, addComponents, theme} = api;
  const lightFallbackVariables = convertFallbackVariables(light);
  const darkFallbackVariables = convertFallbackVariables(dark);

  addBase({
    ':root': {
      backgroundColor: theme('colors.base.100'),
      color: theme('colors.base.content'),
      colorScheme: 'light',
      ...lightFallbackVariables,
    },
    '@media (prefers-color-scheme: dark)': {
      ':root': {
        colorScheme: 'dark',
        ...darkFallbackVariables,
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
