import { IApiResponse, IResource, IApi, IUrlParams, IQiitaSchema } from '../../../domain/Qiita';

/**
 * Qiita State インターフェース
 */
export interface IQiitaState {
  schema: IQiitaSchema;
  targetResource: IResource;
  targetApi: IApi;
  urlParams: IUrlParams;
  dataParams: { [key: string]: any };
  apiResponse: IApiResponse;
}

const createEmptyApi = (): IApi => {
  return {
    title: '',
    description: '',
    href: '',
    method: '',
  };
};

const createEmptyApiResponse = (): IApiResponse => {
  return {
    headers: '',
    data: '',
  };
};

const createInitialState = (): IQiitaState => {
  return {
    schema: {
      description: '',
      properties: {}
    },
    targetResource: {
      title: '',
      description: '',
      links: [],
      properties: {},
      required: [],
    },
    targetApi: createEmptyApi(),
    urlParams: {},
    dataParams: {},
    apiResponse: createEmptyApiResponse(),
  };
};

export default {
  createInitialState,
  createEmptyApiResponse,
};
