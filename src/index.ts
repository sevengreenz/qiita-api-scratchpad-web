import Vue from 'vue';
import Vuetify from 'vuetify';
import Meta from 'vue-meta';
import App from './presentation/App.vue';

Vue.use(Vuetify);
Vue.use(Meta);

const vm = new App();
vm.$mount('#app');
