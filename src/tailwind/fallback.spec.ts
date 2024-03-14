import {Fallback} from './fallback';

describe('Fallback', () => {
  it('default', () => {
    const fallback = new Fallback();
    expect(fallback.color_accent).toBe('--color-accent');
  });

  it('Use prefix', () => {
    const fallback = new Fallback('osom-');
    expect(fallback.color_accent).toBe('--osom-color-accent');
  });
});
