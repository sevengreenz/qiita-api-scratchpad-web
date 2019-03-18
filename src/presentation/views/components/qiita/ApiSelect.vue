<template>
  <v-select
    v-bind:items="resource.links"
    v-model="api"
    item-text="title"
    item-value="title"
    return-object
    :hint="`${api.description}`"
    persistent-hint
    label="API"
    bottom
  ></v-select>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { IApi, IResource } from '../../../../domain/Qiita';
import * as QiitaStore from '../../../store/qiita';

@Component
export default class Index extends Vue {
  get resource(): IResource {
    return QiitaStore.getTargetResource(this.$store);
  }

  get api(): IApi {
    return QiitaStore.getTargetApi(this.$store);
  }

  set api(api: IApi) {
    QiitaStore.changeTargetApi(this.$store, api);
  }
}
</script>
