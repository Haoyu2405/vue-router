import Vue from 'vue'
import App from './App.vue'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Part from './views/Part.vue'
import NotFound from './views/NotFound.vue'
import Recommend from './views/Second/Recommend.vue'
import Ranking from './views/Second/Ranking.vue'
import SongList from './views/Second/SongList.vue'

// @在import语句中是一个缩写,它会被解析为src文件夹的路径。
// 一些其他常见的缩写还有:
// - @/ : src路径
// - @c/ : components路径
// - @v/ : views路径
// - 等等
// 所以,总结来说,在Vue项目的导入语句中,@符号的作用是:
// - 缩写src目录的路径
// - 简化导入路径,使代码看起来更清爽简洁
// - 是Vue开发中的一种常见的路径缩写方式

// vue-router的基本使用
// 1.下载vue-router（第三方包）
// 2.引入
import VueRouter from 'vue-router'
// 3.注册全局组件
Vue.use(VueRouter)
// 4.规则数组
const routes = [
  {
    path: '/', // 默认根路径
    redirect: '/find', // 重定向
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    children: [
      {
        path: 'recommend',
        component: Recommend,
      },
      {
        path: 'ranking',
        component: Ranking,
      },
      {
        path: 'songlist',
        component: SongList,
      },
    ],
  },
  {
    path: '/my',
    name: 'My',
    component: My,
  },
  {
    path: '/part',
    name: 'Part',
    component: Part,
  },
  {
    path: '/part/:username',
    component: Part,
  },
  {
    // 404规则写在最后，路由规则匹配是从上往下逐一匹配的
    path: '*',
    component: NotFound,
  },
]
// 5.生成路由对象
const router = new VueRouter({
  // routes: routes, // routes是固定key（传入规则数组）
  routes,
  mode: 'history', // 路由模式的修改，默认是hash模式
})

// 路由守卫
// 场景：当要对路由权限进行判断时
// 语法：router.beforeEach((to,from,next)=>{//路由跳转之前先执行这里，决定是否跳转})
// to：要跳转到的路由（路由信息对象） 目标
// from：从哪里跳转的路由（路由对象信息）来源
// next：函数体 - next()才会让路由正常的跳转切换，next(false)在原地停留，next("强制修改到另一个路由路径上")
// 注意：如果不调用next,页面留在原地

// 例子：判断用户是否登录，是否决定去“我的音乐”
let isLogin = false // 未登录状态
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)
  if (to.path === '/my' && isLogin === false) {
    alert('请先登录！')
    next(false) // 阻止路由跳转
  } else {
    next() // 正常放行
  }
})

Vue.config.productionTip = false

new Vue({
  // 6.路由对象注入到vue实例中，this可以访问$route和$router
  router,
  el: '#app',
  render: (h) => h(App),
}).$mount()
