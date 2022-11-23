import { render } from '@testing-library/react';

import Footer from '../index';

describe('Footer component', () => {
  test('Should render Footer component', () => {
    const { getByTestId } = render(<Footer />);
    const image = getByTestId('footer') as HTMLImageElement;

    expect(image).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
