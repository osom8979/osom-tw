import type {CSSRuleObject} from 'tailwindcss/types/config';
import center from './center';
import navbar from './navbar';
import viewport from './viewport';

export default {
  ...center,
  ...viewport,
  ...navbar,
} as CSSRuleObject;
