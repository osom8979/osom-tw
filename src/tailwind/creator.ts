import type {PluginAPI} from 'tailwindcss/types/config';

export const DEFAULT_PREFIX = 'osom-';

export interface OsomPluginOptions {
  prefix?: string;
  logs?: boolean;
}

export default function createOsomPlugin(api: PluginAPI, options: OsomPluginOptions) {
  if (options.logs) {
    console.log('Tailwind plugin :: osom-ui');
  }
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
