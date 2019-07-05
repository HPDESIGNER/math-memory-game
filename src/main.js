import Vue from 'vue'
import App from './vues/start-component.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');