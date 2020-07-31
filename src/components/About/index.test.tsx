import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from './index';

afterEach(cleanup);

test('renders', () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders github link', () => {
  const { getByText } = render(<About />);
  expect(getByText('Source code')).toBeInTheDocument();
});
