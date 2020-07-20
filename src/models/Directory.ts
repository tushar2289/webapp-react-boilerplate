import { types, flow, SnapshotIn } from 'mobx-state-tree';
import axios, { AxiosResponse } from 'axios';
import User from './User';

const TypeDirectory = types
  .model({
    users: types.map(User),
    loading: true,
  })
  .actions((self) => {
    const markLoading = (status: boolean) => {
      self.loading = status;
    };

    const processUsers = (users: SnapshotIn<typeof User>[]) => {
      users.forEach((userJson: SnapshotIn<typeof User>) => {
        return self.users.put(userJson);
      });
    };

    const loadUsers = flow(function* loadUsers() {
      markLoading(true);
      try {
        const users: AxiosResponse = yield axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        processUsers(users.data);
        markLoading(false);
      } catch (e) {
        // Do nothing
      }
    });

    const afterCreate = () => {
      loadUsers();
    };

    return {
      afterCreate,
      loadUsers,
      processUsers,
    };
  });

export default TypeDirectory;
