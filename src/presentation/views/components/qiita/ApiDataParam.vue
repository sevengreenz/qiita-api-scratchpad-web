<template>
  <div>
    <div v-if="isShow">
      <v-layout row wrap v-for="(property, key) in api.schema.properties" v-bind:key="key">
        <v-flex d-flex xs4 md2>
          <v-subheader>
            <h2>{{ key }}</h2>
          </v-subheader>
        </v-flex>
        <v-flex d-flex xs4 md1>
          <v-subheader>{{ (api.schema.required || []).includes(key) ? 'required' : 'optional' }}</v-subheader>
        </v-flex>
        <v-flex d-flex xs4 md1>
          <v-subheader>{{ property.type }}</v-subheader>
        </v-flex>
        <v-flex d-flex xs12 md4>
          <v-subheader>{{ property.description }}</v-subheader>
        </v-flex>
        <v-flex d-flex xs12 md4>
          <v-text-field
            v-model="params[key]"
            color="blue darken-2"
            :hint="'e.g. ' + property.example"
            persistent-hint
            box
          ></v-text-field>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IApi } from '../../../../domain/Qiita';

@Component
export default class ApiDataParam extends Vue {
  @Prop(Object) readonly api!: IApi;
  @Prop(Object) readonly params!: Object;

  get isShow(): boolean {
    return this.api.hasOwnProperty('schema');
  }
}
</script>
