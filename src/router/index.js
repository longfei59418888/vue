import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import tab from './tab'


let routers = [
  { path: '/tab', component: () => import('src/containers/tab'), children:tab},
  { path: '*', redirect:'/tab/home'},
]

export default new Router({
  model:'hash',
  routes: routers
})


/*
* Router option   路由类
* routes -- 路由数组
* mode  --  模式(hash -- 默认,hash作为路由兼容所有浏览器)(history -- 依赖底层H5 history)（abstract -- node服务端时候自动切换）
* scrollBehavior  滚动行为
*
* */


/*
* Router.prototype  原型  Router 实例
* 属性
* currentRoute  --  当前路由对应的路由信息对象。
* app  --  配置了 router 的 Vue 根实例。
* beforeEach((to,from,next)=>{})    ---    注册路由变化前触发
* afterEach((to,from)=>{})  ---   注册路由变化后触发
*
* */


/*
* Router.routes option  路由数组
* path  --  路径
* component  --  组件
* children(Router.routes)  --  子组件，父组件中包含   <router-view></router-view>  用于显示
* redirect  --   重定向( path['/b'] , Object[{name:''} ,Function[to=>{}] ] )
* props:true  --   将$route.param.id 直接设置为  props:['id']
* beforeEnter:(to,from,next)=>{}    注册路由变化前触发
* name   --   名字
* alias  --   别名
* caseSensitive   --  大小写敏感
* */


/*
* RouterComponent  option   有关路由的组件属性
* watch{ '$route'(to,from){}}   监听当前路由变化
* beforeRouteUpdate(to,from,next){}   路由更新回调
* beforeRouteEnter
* beforeRouteLeave
* */


/*
* router  组件方法
* router.push(location, onComplete?, onAbort?)   ---   路径入栈
* router.replace(location, onComplete?, onAbort?)   ---   替换当前路由
* router.go(n)   ---   返回
* <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>    组件跳转
*
* */

/*
导航被触发。
在失活的组件里调用离开守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
* */


/*
* 懒加载   () => import('./Foo.vue')
* */
