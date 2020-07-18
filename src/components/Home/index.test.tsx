import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';
import { Provider, rootStore } from '../../models/Root';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider value={rootStore}>
      <Home />
    </Provider>
  );
  const linkElement = getByText(/Create react app boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
