export class UnsupportedHexColorError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export function hexToRgb(hex: string) {
  const rgb = hex.replace(/^#/, '');
  if (rgb.length === 6) {
    const r = parseInt(rgb.substring(0, 2), 16);
    const g = parseInt(rgb.substring(2, 4), 16);
    const b = parseInt(rgb.substring(4, 6), 16);
    return `${r} ${g} ${b}`;
  } else if (rgb.length === 3) {
    const r = parseInt(rgb.substring(0, 1).repeat(2), 16);
    const g = parseInt(rgb.substring(1, 2).repeat(2), 16);
    const b = parseInt(rgb.substring(2, 3).repeat(2), 16);
    return `${r} ${g} ${b}`;
  } else {
    throw new UnsupportedHexColorError(`Unsupported hex color: '${hex}'`);
  }
}
