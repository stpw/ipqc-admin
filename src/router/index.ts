import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '~/views/index.vue'
import About from '~/views/about.vue'
import NotFound from '~/views/404.vue'
import Login from '~/views/login/login.vue'

const routes = [{
  path: '/',
  component: Index
},
{
  path: '/about',
  component: About  
},
{ path: '/:pathMatch(.*)*', 
  name: 'NotFound', 
  component: NotFound 
},{
  path: '/login',
  component: Login
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
