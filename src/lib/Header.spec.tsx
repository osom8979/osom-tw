import {render, screen} from '@testing-library/react';
import {Header} from './Header';

describe('Header', () => {
  const props = {
    caption: 'test-button-title',
  };

  it('Render', () => {
    render(<Header {...props} />);

    const root = screen.getByTestId('root');

    expect(root).toBeDefined();
  });
});
