<template>
  <div></div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TokenInteractor from '../../../domain/interactors/TokenInteractor';

@Component
export default class Authorized extends Vue {
  beforeCreate() {
    const code = this.$route.query.code as string;
    const state = this.$route.query.state as string;
    TokenInteractor.create(code, state).then(() => this.$router.push('/'));
  }
}
</script>


