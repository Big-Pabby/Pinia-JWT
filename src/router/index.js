import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import { userData } from '../stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Register.vue')
    },
    {
      path: '/error',
      name: 'error',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/error.vue')
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue'),
      meta: {
        needsAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {

  const loggedIn = userData()
  // to and from are both route objects. must call `next`.
  if(to.meta.needsAuth) {
    if(loggedIn.isLoggedIn == true) {
      next();
    } else {
      next("/error")
    }
  } else {
    next()
  }
})

export default router
