import Vue from 'vue';
import App from './App';
import Axios from 'axios'
import { router } from './router';
import './rem';
Vue.prototype.$http=Axios;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
