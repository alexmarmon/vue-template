import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
// import all components
import Hello from '@/components/Hello';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});

// remove production tip... 
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
