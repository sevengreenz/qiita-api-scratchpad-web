import { IResource } from '../Qiita';

/**
 * 外部 API インターフェース
 *
 * @export
 * @interface IExternalApi
 */
export interface ISchemaRepository {

  /**
   * Qiita API Schema を取得
   */
  fetch: () => Promise<IResource[]>;
}
