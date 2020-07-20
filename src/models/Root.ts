import { useContext, createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';

import Counter from './Counter';
import Directory from './Directory';

const RootModel = types.model({
  counter: Counter,
  directory: Directory,
});

export const rootStore = RootModel.create({
  counter: {
    count: 0,
  },
  directory: {},
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const { Provider } = RootStoreContext;

export function useMst(): RootInstance {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
