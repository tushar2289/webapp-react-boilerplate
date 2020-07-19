import { types } from 'mobx-state-tree';

const Counter = types
  .model({
    count: types.number,
  })
  .actions((self) => ({
    increment() {
      self.count += 1;
    },
    decrement() {
      self.count -= 1;
    },
  }));

export default Counter;
