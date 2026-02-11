import router from '~/router'
import { getToken } from '~/composables/auth'
import { toast,showFullScreenLoading,hideFullScreenLoading } from '~/composables/util'


router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
    //显示loding
    showFullScreenLoading()
  const token = getToken()
    if (!token && to.path !== '/login') {
        // 如果没有 token，而且要跳转的路由不是登录页，则重定向到登录页
        //console.log(to.path)
        toast('请先登录', 'error', 'Error')
         next({
            path: '/login',
            query: { redirect: to.path ,expired: true} // 将要跳转的路由 path 作为参数，登录成功后跳转到该路由
        })
    }else if (token && to.path === '/login') {
        // 如果已经有 token，并且要跳转的路由是登录页，则重定向到主页
        toast('您已登录', 'info', 'Info')
         next({ path: from.path || '/' })
    }else 
    {
        //一定要放行，否则路由守卫被重定向的login页面触发，会被死循环
        next()  // 确保一定要调用 next() 方法，否则钩子就不会被 resolved。
    }

    //设置页面标题
    document.title = to.meta.title || 'IPQC后台管理系统'
})

router.afterEach((to,from) => {
    //隐藏loding
    hideFullScreenLoading()
})