import { registerMicroApps, start } from 'qiankun';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
registerMicroApps([
  {
    name: 'son-one',
    entry: '//localhost:81',
    container: '#son-one',
    activeRule: '/son-one',
  },
]);
// 启动 qiankun
start();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
