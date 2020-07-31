import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Directory from './index';
import { Provider, rootStore } from '../../models/Root';

afterEach(cleanup);

test('renders user directory loading', () => {
  const { asFragment } = render(
    <Provider value={rootStore}>
      <Directory />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders user directory with 10 users', async () => {
  const { asFragment } = render(
    <Provider value={rootStore}>
      <Directory />
    </Provider>
  );

  await new Promise((resolve) => setTimeout(resolve, 3000));
  expect(asFragment()).toMatchSnapshot();
});
