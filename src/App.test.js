import { render, screen } from '@testing-library/react';
import App from './App'; // Import App instead of TaskList

test('renders Add button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/add/i); // Matches the initial button text
  expect(buttonElement).toBeInTheDocument();
});
