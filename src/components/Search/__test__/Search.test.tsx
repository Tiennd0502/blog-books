import { render, fireEvent, cleanup } from '@testing-library/react';

import Search from '../index';

describe('Search component', () => {
  const PLACEHOLDER = 'Enter keywords...';
  const KEYWORDS = 'Lorem';
  const onSubmit = jest.fn();

  afterEach(cleanup);
  test('Should render Search component', () => {
    const { getByRole } = render(
      <Search placeholder={PLACEHOLDER} onSubmit={onSubmit} />
    );

    expect(getByRole('form')).toBeInTheDocument();
  });

  test('should simulate input search change', () => {
    const { getByPlaceholderText } = render(
      <Search placeholder={PLACEHOLDER} onSubmit={onSubmit} />
    );
    const input = getByPlaceholderText(PLACEHOLDER) as HTMLInputElement;
    fireEvent.change(input, { target: { value: KEYWORDS } });

    expect(input).toBeInTheDocument();
    expect(input.value).toBe(KEYWORDS);
  });

  test('should simulate input search on Enter', () => {
    const { getByPlaceholderText } = render(
      <Search placeholder={PLACEHOLDER} onSubmit={onSubmit} />
    );
    const input = getByPlaceholderText(PLACEHOLDER) as HTMLInputElement;
    fireEvent.change(input, { target: { value: KEYWORDS } });
    fireEvent.keyDown(input, { keyCode: 13 });
    onSubmit(KEYWORDS);

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(KEYWORDS);
  });

  test('should simulate click button submit', () => {
    const { getByRole } = render(
      <Search placeholder={PLACEHOLDER} onSubmit={onSubmit} />
    );
    const btnSubmit = getByRole('button');
    fireEvent.click(btnSubmit);

    expect(onSubmit).toHaveBeenCalled();
  });

  test('Matches snapshot', () => {
    const { container } = render(
      <Search placeholder={KEYWORDS} onSubmit={onSubmit} />
    );

    expect(container).toMatchSnapshot();
  });
});
