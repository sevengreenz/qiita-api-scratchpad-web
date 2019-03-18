<template>
  <v-select
    v-bind:items="resources"
    v-model="resource"
    item-text="title"
    item-value="title"
    return-object
    :hint="`${resource.description}`"
    persistent-hint
    label="Resource"
    bottom
  ></v-select>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { IResource } from '../../../../domain/Qiita';
import * as QiitaStore from '../../../store/qiita';

@Component
export default class Index extends Vue {
  get resources(): IResource[] {
    return QiitaStore.getResources(this.$store);
  }

  get resource(): IResource {
    return QiitaStore.getTargetResource(this.$store);
  }

  set resource(resource: IResource) {
    QiitaStore.changeTargetResource(this.$store, resource);
  }
}
</script>
