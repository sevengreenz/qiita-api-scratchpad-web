<template>
  <schema></schema>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import Schema from '../components/qiita/Schema.vue';

@Component({
  components: {
    Schema
  },
  props: {},
  metaInfo: {
    title: 'Qiita API Scratchpad',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Qiita API を簡単に試せるツールです' },
      {
        name: 'keywords',
        content: 'Qiita,キータ,デベロッパー,api,developer,test'
      }
    ]
  }
})
export default class Index extends Vue {}
</script>
