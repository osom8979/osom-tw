import type {OsomTheme} from './themes/interface';
import {DEFAULT_LIGHT_THEME} from './themes/light';
import {DEFAULT_DARK_THEME} from './themes/dark';

export const DEFAULT_PREFIX = 'osom-';

export interface OsomOptions {
  logs?: boolean;
  prefix?: string;
  light?: Partial<OsomTheme>;
  dark?: Partial<OsomTheme>;
}

type RequiredOsomOptions = Required<Omit<OsomOptions, 'light' | 'dark'>> & {
  light: Required<OsomTheme>;
  dark: Required<OsomTheme>;
};

export function getRequiredOptions(options?: OsomOptions): RequiredOsomOptions {
  const o = options ?? {};
  const logs = o.logs || false;
  const prefix = o.prefix || DEFAULT_PREFIX;
  const light = {...DEFAULT_LIGHT_THEME, ...o.light};
  const dark = {...DEFAULT_DARK_THEME, ...o.dark};
  return {logs, prefix, light, dark} as RequiredOsomOptions;
}
