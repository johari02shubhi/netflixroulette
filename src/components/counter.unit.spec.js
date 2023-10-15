import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Counter from './counter';

describe('Counter Component', () => {

  test('renders initial value provided in props', () => {
    const { getByText } = render(<Counter initialValue={5}/>);
    const valueElement = getByText('Value: 5');
    expect(valueElement).toBeInTheDocument();
  });

  test('clicking "decrement" button decrements the displayed value', () => {
    const { getByText } = render(<Counter initialValue={10} />);
    const decrementButton = getByText('Decrement');
    const valueElement = getByText('Value: 10');

    fireEvent.click(decrementButton);

    expect(valueElement).toHaveTextContent('Value: 9');
  });

  test('clicking "increment" button increments the displayed value', () => {
    const { getByText } = render(<Counter initialValue={5} />);
    const incrementButton = getByText('Increment');
    const valueElement = getByText('Value: 5');

    fireEvent.click(incrementButton);

    expect(valueElement).toHaveTextContent('Value: 6');
  });
});
