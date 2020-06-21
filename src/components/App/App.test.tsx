import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /Hello World with Eslint, Prettier, Husky and Lint Staged/i
  );
  expect(linkElement).toBeInTheDocument();
});
