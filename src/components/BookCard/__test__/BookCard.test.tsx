import { render } from '@testing-library/react';

import { BOOK_ITEM } from '@__mocks__/constants/books';
import BookCard from '../index';

describe('BookCard component', () => {
  test('Should render BookCard component', () => {
    const { getByRole } = render(<BookCard book={BOOK_ITEM} />);
    const book = getByRole('link');

    expect(book).toBeInTheDocument();
  });

  test('Should render match data', () => {
    const { getByRole, findByText, getByAltText } = render(
      <BookCard book={BOOK_ITEM} />
    );
    const book = getByRole('link');
    const image = getByAltText(BOOK_ITEM.title);

    expect(findByText(BOOK_ITEM.title)).toBeTruthy();
    expect(findByText(`by ${BOOK_ITEM.author}`)).toBeTruthy();
    expect(image).toBeInTheDocument();
    expect(book).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(<BookCard book={BOOK_ITEM} />);

    expect(container).toMatchSnapshot();
  });
});
