<template>
  <div></div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import TokenInteractor from "../../../domain/interactors/TokenInteractor";

@Component
export default class Authorized extends Vue {
  beforeCreate() {
    TokenInteractor.create(this.$route.query.code).then(() =>
      this.$router.push("/")
    );
  }
}
</script>


