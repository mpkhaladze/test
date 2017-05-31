import Vue from 'vue'
import Router from 'vue-router'
// import Auth from '@/packages/auth/Auth'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Dashboard from '@/components/user/Dashboard'
import Login from '@/components/auth/Login'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!Vue.auth.isAuthenticated()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About, meta: { forVisitors: true } },
    { path: '/contact', component: Contact },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/login', component: Login, meta: { forVisitors: true } },
    { path: '/logout',
      beforeEnter (to, from, next) {
        Vue.auth.logout()
        next('/')
      }
    }
  ]
})
