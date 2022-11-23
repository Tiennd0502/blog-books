import { render } from '@testing-library/react';

import IMAGES from '@constants/images';
import Logo from '../index';

describe('Logo component', () => {
  test('Should render Logo component', () => {
    const { getByAltText } = render(<Logo />);
    const image = getByAltText(IMAGES.LOGO_ALT) as HTMLImageElement;

    expect(image).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
