import { IAuthRepository } from '../../domain/repositories/AuthRepositoryInterface';
import AuthDataStoreFactory from './data-stores/auth/AuthDataStoreFactory';

const authRepository: IAuthRepository = {
  getState: (): string => {
    return AuthDataStoreFactory
      .createLocalDataStore()
      .getState() || '';
  },

  setState: (token: string) => {
    return AuthDataStoreFactory
      .createLocalDataStore()
      .setState(token);
  },
};

export default authRepository;
