import type {PluginAPI} from 'tailwindcss/types/config';
import type {OsomOptions} from './options';
import {OsomPluginGenerator} from './generator';

export function createOsomPlugin(api: PluginAPI, options: OsomOptions): void {
  const {addBase, addComponents} = api;
  const opg = new OsomPluginGenerator(options);
  addBase(opg.base);
  addComponents(opg.components);
}
