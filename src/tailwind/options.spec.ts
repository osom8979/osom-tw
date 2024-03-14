import {getRequiredOptions} from './options';

describe('getRequiredOptions', () => {
  it('default', () => {
    const o = getRequiredOptions();
    expect(o.prefix).toBe('osom-');
    expect(o.light).toBe('light');
    expect(o.dark).toBe('dark');
    expect(o.fallback.color_accent).toBe('--osom-color-accent');
    const themeKeys = Object.keys(o.themes);
    expect(themeKeys.length).toBe(2);
    expect(themeKeys).toContain('dark');
    expect(themeKeys).toContain('light');
  });
});
