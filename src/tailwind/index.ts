import plugin from 'tailwindcss/plugin';
import {createOsomConfig} from './config';
import type {OsomOptions} from './options';
import {createOsomPlugin} from './plugin';

export default plugin.withOptions(
  (options: OsomOptions = {}) => {
    return api => createOsomPlugin(api, options);
  },
  (options: OsomOptions = {}) => {
    return createOsomConfig(options);
  },
);
