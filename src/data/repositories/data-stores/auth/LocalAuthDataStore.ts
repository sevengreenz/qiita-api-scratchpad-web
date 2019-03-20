import { IAuthDataStore } from './AuthDataStoreInterface';

const localTokenDataStore = (): IAuthDataStore => {
  const KEY_STATE = 'state';

  return {
    getState: () => {
      return sessionStorage.getItem(KEY_STATE);
    },

    setState: (state) => {
      sessionStorage.setItem(KEY_STATE, state);
    },
  };
};

export default localTokenDataStore;
