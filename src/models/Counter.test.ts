import { getSnapshot, onPatch, IJsonPatch } from 'mobx-state-tree';
import Counter from './Counter';

it('should create Counter instance', () => {
  const item = Counter.create({ count: 0 });
  expect(getSnapshot(item)).toMatchSnapshot();
});

it('should increment and decrement', () => {
  const item = Counter.create({ count: 0 });
  const patches: IJsonPatch[] = [];

  onPatch(item, (patch) => {
    patches.push(patch);
  });

  item.increment();
  item.decrement();
  expect(patches).toMatchSnapshot();
});
