<template>
  <layout></layout>
</template>


<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import router from './routes';
import store from './store/store';
import Layout from './views/components/layout/Main.vue';

@Component<App>({
  data: () => ({
    drawer: null
  }),
  router,
  store,
  components: {
    Layout
  }
})
export default class App extends Vue {}
</script>
