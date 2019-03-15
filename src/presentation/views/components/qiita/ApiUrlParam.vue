<template>
  <div>
    <v-layout row wrap v-for="(value, key) in params" v-bind:key="key">
      <v-flex d-flex xs12 md1>
        <v-subheader>
          <h2>{{ key }}</h2>
        </v-subheader>
      </v-flex>
      <v-flex d-flex xs4 md1>
        <v-subheader>required</v-subheader>
      </v-flex>
      <v-flex d-flex xs4 md3>
        <v-subheader>integer | string</v-subheader>
      </v-flex>
      <v-flex d-flex xs12 md2></v-flex>
      <v-flex d-flex xs12 md4>
        <v-text-field v-model="params[key]" required color="blue darken-2"></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { IUrlParams } from "../../../../domain/Qiita";

@Component
export default class ApiUrlParam extends Vue {
  @Prop(Object) readonly params!: IUrlParams;
}
</script>
