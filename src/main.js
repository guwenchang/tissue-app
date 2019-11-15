import Vue from 'vue';
import App from './App';
import { router } from './router';
import './rem';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
