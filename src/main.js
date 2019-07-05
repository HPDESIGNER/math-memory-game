import Vue from 'vue'
import App from './vues/control-panel.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');