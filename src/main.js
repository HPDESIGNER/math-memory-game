import Vue from 'vue'
import App from './vues/math-memory-game-mainfield.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');