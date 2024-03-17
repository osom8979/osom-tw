import {OsomPluginGenerator} from './generator';

describe('OsomPluginGenerator', () => {
  describe('default', () => {
    const opg = new OsomPluginGenerator();

    it('options', () => {
      const o = opg.options;
      expect(o.prefix).toBe('osom-');
      expect(o.light).toBe('light');
      expect(o.dark).toBe('dark');
      expect(o.fallback.color_accent).toBe('--osom-color-accent');

      const themeKeys = Object.keys(o.themes);
      expect(themeKeys.length).toBe(2);
      expect(themeKeys).toContain('dark');
      expect(themeKeys).toContain('light');
    });

    it('components', () => {
      const componentsKeys = Object.keys(opg.components);
      expect(componentsKeys).toContain('.osom-center');
      expect(componentsKeys).toContain('.osom-menu');
      expect(componentsKeys).toContain('.osom-navbar');
      expect(componentsKeys).toContain('.osom-viewport');
    });
  });
});
