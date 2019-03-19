import {
  QiitaContext,
  commitApiResponse,
  commitTargetResource,
  commitTargetApi,
  getTargetResource,
  getTargetApi,
  commitSchema,
} from './qiita';
import { IApiParams, IApi, IResource, IApiResponse, IQiitaSchema } from '../../../domain/Qiita';
import SchemaInteractor from '../../../domain/interactors/SchemaInteractor';
import QiitaInteractor from '../../../domain/interactors/QiitaInteractor';
import ExecutedInteractor from '../../../domain/interactors/ExecutedInteractor';

const fetchSchema = async (context: QiitaContext): Promise<void> => {
  await SchemaInteractor
    .fetch()
    .then((schema: IQiitaSchema) => {
      commitSchema(context, schema);

      // session に保存されていた場合、targetResource にセットする
      const executed = ExecutedInteractor.getLastExecuteApi();
      if (executed !== null) {
        commitTargetResource(context, executed.resource);
        commitTargetApi(context, executed.api);
      } else {
        const resource = Object.values(schema.properties)[0];
        commitTargetResource(context, resource);
        commitTargetApi(context, resource.links[0]);
      }
    });
};

const changeTargetResource = (context: QiitaContext, resource: IResource): void => {
  commitTargetResource(context, resource);
  commitTargetApi(context, resource.links[0]);
};

const changeTargetApi = (context: QiitaContext, api: IApi): void => {
  commitTargetApi(context, api);
};

/**
 * API を実行する
 *
 * @param {QiitaContext} context
 */
const executeApi = async (context: QiitaContext, params: IApiParams): Promise<void> => {
  await QiitaInteractor
    .executeApi({
      resource: getTargetResource(context),
      api: getTargetApi(context),
      urlParams: params.urlParams,
      dataParams: params.dataParams,
    }).then((response: IApiResponse) => {
      commitApiResponse(context, response);
    });
};

export default {
  fetchSchema,
  changeTargetResource,
  changeTargetApi,
  executeApi,
};
