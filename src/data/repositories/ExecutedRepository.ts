import ExecutedDataStoreFactory from './data-stores/executed/ExecutedDataStoreFactory';
import { IExecutedRepository } from '../../domain/repositories/ExecutedRepositoryInterface';

const executedRepository: IExecutedRepository = {
  getExecuted: () => {
    return ExecutedDataStoreFactory
      .createLocalDataStore()
      .getExecuted();
  },

  setExecuted: (executed) => {
    ExecutedDataStoreFactory
      .createLocalDataStore()
      .setExecuted(executed);
  },

};

export default executedRepository;
