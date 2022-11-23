import { render } from '@testing-library/react';

import { BOOK_LIST } from '@__mocks__/constants/books';
import BookList from '../index';

describe('BookList component', () => {
  test('Should render BookList component', () => {
    const { getByRole } = render(<BookList books={BOOK_LIST} />);
    const bookList = getByRole('list');

    expect(bookList).toBeInTheDocument();
  });

  test('Should render enough elements', () => {
    const { getByRole } = render(<BookList books={BOOK_LIST} />);
    const bookList = getByRole('list');

    expect(bookList.childNodes).toHaveLength(BOOK_LIST.length);
  });

  test('Should render empty elements', () => {
    const { getByRole } = render(<BookList books={[]} />);
    const bookList = getByRole('list');

    expect(bookList.childNodes).toHaveLength(0);
  });

  test('Matches snapshot', () => {
    const { container } = render(<BookList books={BOOK_LIST} />);

    expect(container).toMatchSnapshot();
  });
});
