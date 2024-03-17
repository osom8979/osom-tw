import type {CSSRuleObject} from 'tailwindcss/types/config';
import type {RequiredOsomOptions} from '../options.ts';
import badge from './badge';
import btn from './btn';
import center from './center';
import input from './input';
import link from './link';
import menu from './menu';
import navbar from './navbar';
import tooltip from './tooltip';
import viewport from './viewport';

export default [
  badge,
  btn,
  center,
  input,
  link,
  menu,
  navbar,
  tooltip,
  viewport,
] as Array<(o: RequiredOsomOptions) => CSSRuleObject>;
