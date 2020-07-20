import { types } from 'mobx-state-tree';

const TypeGeoLocation = types.model({
  lat: 'string',
  lng: 'string',
});

const TypeAddress = types.model({
  street: 'string',
  suite: 'string',
  city: 'string',
  zipcode: 'string',
  geo: TypeGeoLocation,
});

const TypeCompany = types.model({
  name: 'string',
  catchPhrase: 'string',
  bs: 'string',
});

const TypeUser = types.model({
  id: types.identifierNumber,
  name: types.string,
  username: types.string,
  email: types.string,
  address: TypeAddress,
  phone: types.string,
  website: types.string,
  company: TypeCompany,
});

export default TypeUser;
