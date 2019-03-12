import LocalTokenDataStore from './LocalTokenDataStore';
import CloudTokenDataStore from './CloudTokenDataStore';
import { ITokenDataStore } from './TokenDataStoreInterface';


const tokenDataStoreFactory = {
  createLocalDataStore: (): ITokenDataStore => {
    return LocalTokenDataStore();
  },

  createCloudDataStore: (): ITokenDataStore => {
    return CloudTokenDataStore();
  },
};

export default tokenDataStoreFactory;
