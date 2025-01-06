import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './counter';

test('renders Counter component and increments count', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/Counter/i);
  expect(counterElement);
  
  const button = screen.getByText(/Increment/i);
  fireEvent.click(button);

  expect(screen.getByText(/Counter :  1/i));
});
