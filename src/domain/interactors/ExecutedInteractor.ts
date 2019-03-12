import { IExecuteApi } from '../Qiita';
import ExecutedRepository from '../../data/repositories/ExecutedRepository';

const executedInteractor = {
  getLastExecuteApi: (): IExecuteApi | null => {
    return ExecutedRepository.getExecuted();
  },
};

export default executedInteractor;



