import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { // 将根 URL '/' 重定向到 /home。
      path: '/',
      redirect: '/home'
    },

    {
      // 用于 /home 路径，当匹配到这个路径时，加载 '@/views/home' 组件。
      path: '/home',
      component: () => import('@/views/home')
    },

    {
      // 用于 /information 路径，当匹配到这个路径时，加载 '@/views/home' 组件。
      path: '/information',
      component: () => import('@/views/information')
    },

    {
      // 用于 /information 路径，当匹配到这个路径时，加载 '@/views/home' 组件。
      path: '/privacyPolicy',
      component: () => import('@/views/privacyPolicy')
    },

    {
      // 用于 /information 路径，当匹配到这个路径时，加载 '@/views/home' 组件。
      path: '/informationPrivacyPolicy',
      component: () => import('@/views/informationPrivacyPolicy')
    },

    {
      // 用于 /information 路径，当匹配到这个路径时，加载 '@/views/home' 组件。
      path: '/contactUs',
      component: () => import('@/views/contactUs')
    },

    {
      // 用于 /information 路径，当匹配到这个路径时，加载 '@/views/home' 组件。
      path: '/business',
      component: () => import('@/views/business')
    },

    {
      // 用于 /information 路径，当匹配到这个路径时，加载 '@/views/home' 组件。
      path: '/informationPrivacyPolicy',
      component: () => import('@/views/informationPrivacyPolicy')
    },

    {
      // 动态的，它使用参数 :blogId 在路径中匹配像 /blog/1、/blog/2 等 URL。当匹配到这个路由时，加载 '@/views/blog' 组件。另外，props 函数用于将 blogId 参数从字符串转换为数字。
      path: '/blog/:blogId',
      component: () => import('@/views/blog'),
      // 类型转换，否则会将字符串类型的数字传递给blog组件
      props: (route) => ({ blogId: Number(route.params.blogId) })
    },

    {// 使用 process.env.ABOUT_ID 的值构建路径。它为 /about 路径设置了一个别名，这意味着访问 /blog/{ABOUT_ID_VALUE} 或 /about 都将导致加载同一个组件。
      path: '/blog/' + process.env.ABOUT_ID,
      alias: '/about'
    }
  ]
})
