import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('open about page', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('About'));
  expect(getByText('Source code')).toBeInTheDocument();
});
