import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../components/Login')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../components/Index'),
      children: [
        {
          path: 'file',
          name: 'CardFile',
          component: () => import('../components/CardFile')
        },
        {
          path: 'upload',
          name: 'CardUpload',
          component: () => import('../components/CardUpload')
        },
        {
          path: 'search',
          name: 'CardSearch',
          component: () => import('../components/CardSearch')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})
router.beforeEach(({ name }, from, next) => {
  // 获取 JWT Token
  if (localStorage.getItem('JWT_TOKEN')) {
    next()
  } else {
    if (name === 'Login') {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
})
export default router
