import {hexToRgb, UnsupportedHexColorError} from './colors';

describe('hexToRgb', () => {
  it('6 length', () => {
    expect(hexToRgb('#000000')).toBe('0 0 0');
    expect(hexToRgb('#AAAAAA')).toBe('170 170 170');
    expect(hexToRgb('#FFFFFF')).toBe('255 255 255');
  });

  it('3 length', () => {
    expect(hexToRgb('#000')).toBe('0 0 0');
    expect(hexToRgb('#AAA')).toBe('170 170 170');
    expect(hexToRgb('#FFF')).toBe('255 255 255');
  });

  it('error', () => {
    expect(() => hexToRgb('#000F')).toThrow(UnsupportedHexColorError);
    expect(() => hexToRgb('#000000FF')).toThrow(UnsupportedHexColorError);
  });
});
