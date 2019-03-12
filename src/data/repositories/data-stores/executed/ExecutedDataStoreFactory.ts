import LocalExecutedDataStore from './LocalExecutedDataStore';
import { IExecutedDataStore } from './ExecutedDataStoreInterface';

const executedDataStoreFactory = {
  createLocalDataStore: (): IExecutedDataStore => {
    return LocalExecutedDataStore();
  },

  createCloudDataStore: (): IExecutedDataStore => {
    throw new Error('Not Implemented');
  },
};

export default executedDataStoreFactory;
