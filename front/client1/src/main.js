// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { store } from './store/store'

import Auth from './packages/auth/Auth'

Vue.config.productionTip = false
Vue.use(Auth)
Vue.use(VueResource)
/* eslint-disable no-new */

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/dashboard'
        })
      } else next()
    } else next()
  }
)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
