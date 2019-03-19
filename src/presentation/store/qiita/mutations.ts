import Qiita, { IResource, IApi, IApiResponse, IQiitaSchema } from '../../../domain/Qiita';
import qiitaState, { IQiitaState } from './state';

const setSchema = (state: IQiitaState, schema: IQiitaSchema) => {
  state.schema = schema;
};

const setTargetResource = (state: IQiitaState, resource: IResource) => {
  state.targetResource = resource;
};

const setTargetApi = (state: IQiitaState, api: IApi) => {
  state.targetApi = api;

  // 変更後の API の初期 URL パラメータ作成
  state.urlParams = Qiita.extractUrlParams(api.href);

  // 変更後の API の初期データパラメータ作成
  state.dataParams = api.schema === undefined
    ? {}
    : Qiita.makeApiParams(api.schema);

  // API 実行結果初期化
  state.apiResponse = qiitaState.createEmptyApiResponse();
};

const setApiResponse = (state: IQiitaState, apiReponse: IApiResponse) => {
  state.apiResponse = apiReponse;
};

export default {
  setSchema,
  setTargetResource,
  setTargetApi,
  setApiResponse,
};
