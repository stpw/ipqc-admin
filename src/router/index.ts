import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '~/views/index.vue'
import About from '~/views/about.vue'
import NotFound from '~/views/404.vue'
import Login from '~/views/login/login.vue'

const routes = [{
  path: '/',
  component: Index,
  meta: { title: '后台主页' }
},
{
  path: '/about',
  component: About  ,
  meta: { title: '关于' }
},
{ path: '/:pathMatch(.*)*', 
  name: 'NotFound', 
  component: NotFound ,
  meta: { title: '404' }
},{
  path: '/login',
  component: Login,
  meta: { title: '登陆' }
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
