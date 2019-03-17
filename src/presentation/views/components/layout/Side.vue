<template>
  <div>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <router-link :to="homeHref">
            <v-list-tile-title>Home</v-list-tile-title>
          </router-link>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>info</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <router-link :to="aboutHref">
            <v-list-tile-title>About</v-list-tile-title>
          </router-link>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <a :href="contactsHref">
            <v-list-tile-title>Contacts</v-list-tile-title>
          </a>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  homeHref = { name: 'index' };
  aboutHref = { name: 'about' };
  contactsHref =
    'https://docs.google.com/forms/d/e/1FAIpQLSdBrMncEtJ6NIjODL0U8tv28_8eHRop-yDw2jtb2hpgCg1l4g/viewform';
}
</script>


