import { ITokenRepository } from '../../domain/repositories/TokenRepositoryInterface';
import TokenDataStoreFactory from './data-stores/token/TokenDataStoreFactory';

const tokenRepository: ITokenRepository = {
  issue: async (code: string): Promise<string> => {
    return await TokenDataStoreFactory
      .createCloudDataStore()
      .issue(code);
  },

  find: (): string | null => {
    return TokenDataStoreFactory
      .createLocalDataStore()
      .find();
  },

  update: (token: string) => {
    return TokenDataStoreFactory
      .createLocalDataStore()
      .update(token);
  },
};

export default tokenRepository;
