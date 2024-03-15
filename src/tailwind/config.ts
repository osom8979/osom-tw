import type {Config} from 'tailwindcss/types/config';
import {OsomPluginGenerator} from './generator';
import type {OsomOptions} from './options';

export function createOsomConfig(options: OsomOptions): Partial<Config> {
  const opg = new OsomPluginGenerator(options);
  return {
    theme: {
      extend: opg.configThemeExtend,
    },
  };
}
