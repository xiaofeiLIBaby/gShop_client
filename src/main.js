import Vue from "vue"
import App from './App'
import router from './router/index'
import Header from './components/Header/Header'
import store from './store/index'
import Stars from './components/Stars/Stars'
Vue.component('Header',Header)
Vue.component('Stars',Stars)

new Vue({
  el:'#app',
 /* component:{
    App
  },
  template:'<App/>'*/
 render:h=>h(App),
  router,
  store
})
