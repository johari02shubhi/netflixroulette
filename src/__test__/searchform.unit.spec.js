import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from '../components/searchform';

describe('SearchForm Component', () => {
  test('renders an input with the value equal to initial value passed in props', () => {
    const initialQuery = 'Initial Value';
    const { getByDisplayValue } = render(<SearchForm initialQuery={initialQuery} />);
    const inputElement = getByDisplayValue(initialQuery);
    expect(inputElement).toBeInTheDocument();
  });

  test('after typing into the input and clicking the Submit button, the "onSearch" prop is called with the proper value', () => {
    const onSearchMock = jest.fn();
    const { getByText, getByRole } = render(<SearchForm initialQuery="" onSearch={onSearchMock} />);
    const inputElement = getByRole('textbox');
    const submitButton = getByText('Search');
    const inputValue = 'Test Value';

    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.click(submitButton);

    expect(onSearchMock).toHaveBeenCalledWith(inputValue);
  });

  test('after typing into the input and pressing Enter key, the "onSearch" prop is called with the proper value', () => {
    const onSearchMock = jest.fn();
    const { getByRole } = render(<SearchForm initialQuery="" onSearch={onSearchMock} />);
    const inputElement = getByRole('textbox');
    const inputValue = 'Test Value';

    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(onSearchMock).toHaveBeenCalledWith(inputValue);
  });
});
