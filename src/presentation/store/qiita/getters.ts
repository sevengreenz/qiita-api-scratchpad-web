import { IResource, IApi, IApiResponse, IUrlParams, IQiitaSchema } from '../../../domain/Qiita';
import { IQiitaState } from './state';

const getSchema = (state: IQiitaState): IQiitaSchema => {
  return state.schema;
};

const getResources = (state: IQiitaState): IResource[] => {
  return Object.values(state.schema.properties);
};

const getTargetResource = (state: IQiitaState): IResource => {
  return state.targetResource;
};

const getTargetApi = (state: IQiitaState): IApi => {
  return state.targetApi;
};

const getApiUrlParams = (state: IQiitaState): IUrlParams => {
  return state.urlParams;
};

const getApiDataParams = (state: IQiitaState) => {
  return state.dataParams;
};

const getApiResponse = (state: IQiitaState): IApiResponse => {
  return state.apiResponse;
};

export default {
  getSchema,
  getResources,
  getTargetResource,
  getTargetApi,
  getApiUrlParams,
  getApiDataParams,
  getApiResponse,
};
