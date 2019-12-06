import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Vueaxios from 'vue-axios' ;
Vue.config.productionTip = false;

Vue.use(axios,Vueaxios);

new Vue({
  render: h => h(App),
}).$mount('#app');
