import { when } from 'mobx';
import moxios from 'moxios';
import fs from 'fs';
import Directory from './Directory';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

it('fetches all the 10 users', async () => {
  const store = Directory.create({});
  await moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: JSON.parse(
        fs.readFileSync('./src/mocks/users.json').toString()
      ),
    });
  });
  await when(() => store.loading === false);
  expect(store.users.size).toBe(10);
  expect(store.users.get('1')?.name).toBe('Leanne Graham');
});
