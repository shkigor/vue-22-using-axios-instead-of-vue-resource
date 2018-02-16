import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-http-23956.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'something';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
    console.log('Request Interceptor', config);
    config.headers['SMTH_IN_INTERCEPTORS'] = 'foo';
    return config;
});
const resInterceptor = axios.interceptors.response.use(res => {
    console.log('Response Interceptor', res);
    return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
