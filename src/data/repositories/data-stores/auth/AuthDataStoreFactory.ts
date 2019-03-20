import LocalTokenDataStore from './LocalAuthDataStore';
import CloudTokenDataStore from './CloudAuthDataStore';
import { IAuthDataStore } from './AuthDataStoreInterface';


const tokenDataStoreFactory = {
  createLocalDataStore: (): IAuthDataStore => {
    return LocalTokenDataStore();
  },

  createCloudDataStore: (): IAuthDataStore => {
    return CloudTokenDataStore();
  },
};

export default tokenDataStoreFactory;
