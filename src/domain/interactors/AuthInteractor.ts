import Auth from '../Auth';
import AuthRepository from '../../data/repositories/AuthRepository';

const interactor = {
  /**
   * 認可 URL 作成
   */
  makeAuthorizationUrl: () => {
    const state = Auth.createState();
    AuthRepository.setState(state);

    return Auth.makeAuthorizationUrl(state);
  },
}

export default interactor;
