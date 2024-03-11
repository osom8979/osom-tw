import plugin from 'tailwindcss/plugin';
import {type OsomPluginOptions, createOsomPlugin, createOsomConfig} from './creator';

export const OsomUiTailwindPlugin = plugin.withOptions(
  (options: OsomPluginOptions = {}) => {
    return api => createOsomPlugin(api, options);
  },
  (options: OsomPluginOptions = {}) => {
    return createOsomConfig(options);
  },
);

export default OsomUiTailwindPlugin;
