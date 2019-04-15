import Vue from 'vue';
import Vuetify from 'vuetify';
import Meta from 'vue-meta';
import App from './presentation/App.vue';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  theme: {
    primary: '#55c500'
  }
});
Vue.use(Meta);

const vm = new App();
vm.$mount('#app');
