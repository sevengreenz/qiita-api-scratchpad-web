import { IAuthDataStore } from './AuthDataStoreInterface';

const cloudTokenDataStore = (): IAuthDataStore => {
  return {
    getState: () => {
      throw Error('Not Implemented');
    },

    setState: () => {
      throw Error('Not Implemented');
    },
  };
};

export default cloudTokenDataStore;
