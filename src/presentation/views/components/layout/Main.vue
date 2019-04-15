<template>
  <v-app>
    <v-navigation-drawer fixed v-model="drawer" app>
      <side></side>
    </v-navigation-drawer>
    <v-toolbar app class="primary" dark fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Qiita API Scratchpad</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="primary"></v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Side from './Side.vue';

@Component({
  components: {
    Side
  }
})
export default class Main extends Vue {
  drawer = false;
}
</script>
