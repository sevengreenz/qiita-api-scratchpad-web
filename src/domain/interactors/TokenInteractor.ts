import TokenRepository from '../../data/repositories/TokenRepository';
import AuthRepository from '../../data/repositories/AuthRepository';

const tokenInteractor = {
  /**
   * アクセストークン 作成
   */
  create: async (code: string, state: string): Promise<string> => {
    if (state !== AuthRepository.getState()) {
      throw new Error('invalid state');
    }

    const token = await TokenRepository.issue(code);

    TokenRepository.update(token);

    return token;
  },
};

export default tokenInteractor;



