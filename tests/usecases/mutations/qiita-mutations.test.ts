import QiitaMutations from '../../../src/presentation/store/qiita/mutations';
import QiitaStore, { IQiitaState } from '../../../src/presentation/store/qiita/state';
import { IApiResponse } from '../../../src/domain/Qiita';

describe('qiita mutations', () => {
  let state: IQiitaState;

  beforeEach(() => {
    state = QiitaStore.createInitialState();
  });

  it('setApiResponse', () => {
    const apiResponse: IApiResponse = {
      headers: 'headers',
      data: 'data',
    };

    QiitaMutations.setApiResponse(state, apiResponse);

    expect(state.apiResponse).toBe(apiResponse);
  });

});
