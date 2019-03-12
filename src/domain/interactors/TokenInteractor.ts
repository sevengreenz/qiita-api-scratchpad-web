import TokenRepository from '../../data/repositories/TokenRepository';

const tokenInteractor = {
  /**
   * アクセストークン 作成
   */
  create: async (code: string): Promise<string> => {
    const token = await TokenRepository.issue(code);

    TokenRepository.update(token);

    return token;
  },
};

export default tokenInteractor;



