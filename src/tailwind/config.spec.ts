import {createOsomConfig} from './config';

describe('createOsomConfig', () => {
  it('spacing.cell', () => {
    const spacing = createOsomConfig({}).theme?.extend?.spacing;
    expect(spacing).not.toBeUndefined();
    expect(
      Object.keys(spacing as Exclude<typeof spacing, undefined>).includes('cell'),
    ).toBeTruthy();
  });
});
