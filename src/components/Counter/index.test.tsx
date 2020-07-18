import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Counter from './index';
import { Provider, rootStore } from '../../models/Root';

afterEach(cleanup);

test('renders learn react link', () => {
  const { asFragment } = render(
    <Provider value={rootStore}>
      <Counter />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
