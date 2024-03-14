import type {Config} from 'tailwindcss/types/config';
import type {OsomOptions} from './options';
import {OsomPluginGenerator} from './generator';

export function createOsomConfig(options: OsomOptions): Partial<Config> {
  const opg = new OsomPluginGenerator(options);
  return {
    theme: {
      extend: opg.configThemeExtend,
    },
  };
}
