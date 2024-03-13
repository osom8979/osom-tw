import type {OsomTheme} from './themes/interface';
import {DEFAULT_LIGHT_THEME} from './themes/light';
import {DEFAULT_DARK_THEME} from './themes/dark';

export const DEFAULT_PREFIX = 'osom-';
export const DEFAULT_LIGHT_NAME = 'light';
export const DEFAULT_DARK_NAME = 'dark';

export interface OsomOptions {
  logs?: boolean;
  prefix?: string;
  light?: string;
  dark?: string;
  themes?: Record<string, Partial<OsomTheme>>;
}

type RequiredOsomOptions = Required<Omit<OsomOptions, 'themes'>> & {
  themes: Record<string, Required<OsomTheme>>;
};

export function getRequiredOptions(options?: OsomOptions) {
  const o = options ?? {};
  const logs = o.logs || false;
  const prefix = o.prefix || DEFAULT_PREFIX;
  const light = o.light || DEFAULT_LIGHT_NAME;
  const dark = o.dark || DEFAULT_DARK_NAME;
  const defaultThemes = {
    [light]: DEFAULT_LIGHT_THEME,
    [dark]: DEFAULT_DARK_THEME,
  };

  const themes = Object.entries({...defaultThemes, ...o.themes}).reduce(
    (o, [key, value]) => {
      const scheme = value?.colorScheme ?? 'light';
      const base = scheme === 'dark' ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME;
      o[key] = {...base, ...value};
      return o;
    },
    {} as Record<string, Required<OsomTheme>>,
  );

  return {logs, prefix, light, dark, themes} as RequiredOsomOptions;
}
