import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './index';

test('renders', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <AppHeader />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders header text', () => {
  const { getByText } = render(
    <BrowserRouter>
      <AppHeader />
    </BrowserRouter>
  );
  const linkElement = getByText(/Material UI/i);
  expect(linkElement).toBeInTheDocument();
});
