<template>
  <v-layout v-show="isShow" row wrap>
    <code>{{ result }}</code>
  </v-layout>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import Qiita, { IApiResponse } from "../../../../domain/Qiita";

@Component
export default class ApiResult extends Vue {
  @Prop(Object) readonly result!: IApiResponse;

  get isShow(): boolean {
    return !Qiita.isEmptyApiResponse(this.result);
  }
}
</script>
