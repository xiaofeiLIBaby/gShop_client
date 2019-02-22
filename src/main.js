import Vue from "vue"
import App from './App'
import router from './router/index'
new Vue({
  el:'#app',
 /* component:{
    App
  },
  template:'<App/>'*/
 render:h=>h(App),
  router
})
