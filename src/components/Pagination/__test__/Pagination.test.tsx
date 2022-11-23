import { render, fireEvent, cleanup } from '@testing-library/react';

import Pagination from '../index';

describe('Pagination component', () => {
  const count = 5;
  const currentPage = 2;
  const onChange = jest.fn();

  afterEach(cleanup);
  test('Should render Pagination component', () => {
    const { getByRole } = render(
      <Pagination count={count} currentPage={currentPage} onChange={onChange} />
    );

    expect(getByRole('list')).toBeInTheDocument();
  });

  test('should simulate click change page', () => {
    const { getAllByRole } = render(
      <Pagination count={count} currentPage={currentPage} onChange={onChange} />
    );
    const buttonList = getAllByRole('button');

    fireEvent.click(buttonList[3]);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(3);
  });

  test('should simulate click button previous', () => {
    const { getByText } = render(
      <Pagination count={count} currentPage={currentPage} onChange={onChange} />
    );
    const btnPrevious = getByText(/Previous/i);
    fireEvent.click(btnPrevious);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(currentPage - 1);
  });

  test('should simulate click button next', () => {
    const { getByText } = render(
      <Pagination count={count} currentPage={currentPage} onChange={onChange} />
    );
    const btnNext = getByText(/Next/i);
    fireEvent.click(btnNext);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(currentPage + 1);
  });

  test('Matches snapshot', () => {
    const { container } = render(
      <Pagination count={count} currentPage={currentPage} onChange={onChange} />
    );

    expect(container).toMatchSnapshot();
  });
});
