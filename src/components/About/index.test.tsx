import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from './index';
import { GITHUB_LINK } from '../../constants';

afterEach(cleanup);

test('renders', () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders github link', () => {
  const { getByText } = render(<About />);
  expect(getByText(GITHUB_LINK)).toBeInTheDocument();
});
