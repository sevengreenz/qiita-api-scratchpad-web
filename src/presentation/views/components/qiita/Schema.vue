<template>
  <div>
    <v-card class="grey lighten-4 evaluation-0">
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <resource-select></resource-select>
          </v-layout>
          <v-layout row wrap>
            <api-select></api-select>
          </v-layout>

          <api-url-param :params="urlParams"></api-url-param>

          <api-data-param :api="targetApi" :params="dataParams"></api-data-param>

          <v-btn color="primary" dark v-on:click="execute">Exec</v-btn>

          <unauthorized :isShow="hasError" :onDisagree="hideError"></unauthorized>
          <api-result :result="result"></api-result>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import ResourceSelect from '../qiita/ResourceSelect.vue';
import ApiSelect from '../qiita/ApiSelect.vue';
import ApiUrlParam from '../qiita/ApiUrlParam.vue';
import ApiDataParam from '../qiita/ApiDataParam.vue';
import ApiResult from '../qiita/ApiResult.vue';
import { IApi, IApiParams, IUrlParams } from '../../../../domain/Qiita';
import * as QiitaStore from '../../../store/qiita';
import UnauthorizedError from '../../../../data/errors/UnauthorizedError';
import Unauthorized from '../common/Unauthorized.vue';

@Component({
  components: {
    ResourceSelect,
    ApiSelect,
    ApiUrlParam,
    ApiDataParam,
    Unauthorized,
    ApiResult
  },
  props: {}
})
export default class Index extends Vue {
  hasError: boolean = false;

  async created() {
    QiitaStore.fetchSchema(this.$store);
  }

  get targetApi(): IApi {
    return QiitaStore.getTargetApi(this.$store);
  }

  get urlParams(): IUrlParams {
    return QiitaStore.getUrlParams(this.$store);
  }

  get dataParams(): object {
    return QiitaStore.getDataParams(this.$store);
  }

  get result() {
    return QiitaStore.getApiResponse(this.$store);
  }

  async execute(): Promise<void> {
    console.log(this.dataParams);
    const apiParams: IApiParams = {
      api: this.targetApi,
      urlParams: this.urlParams,
      dataParams: this.dataParams
    };

    await QiitaStore.executeApi(this.$store, apiParams).catch((e: Error) => {
      if (e instanceof UnauthorizedError) {
        this.hasError = true;
      }
      // TODO: modal で表示
      console.log(e);
    });
  }

  hideError(): void {
    this.hasError = false;
  }
}
</script>
