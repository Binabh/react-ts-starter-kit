import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getUserRequest: ['payload'],
    getUserSuccess: ['payload'],
    getUserFailure: null,
  },
  { prefix: 'USER/' },
);

export default Creators;
