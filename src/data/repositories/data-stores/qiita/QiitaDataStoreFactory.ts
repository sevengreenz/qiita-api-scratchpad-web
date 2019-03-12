import CloudQiitaDataStore from './CloudQiitaDataStore';
import { IQiitaDataStore } from './QiitaDataStoreInterface';


const qiitaDataStoreFactory = {
  createLocalDataStore: (): IQiitaDataStore => {
    throw new Error('Not Implemented');
  },

  createCloudDataStore: (): IQiitaDataStore => {
    return CloudQiitaDataStore();
  },
};

export default qiitaDataStoreFactory;
