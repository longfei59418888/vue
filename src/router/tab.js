

const routers = [
  { path: 'home',name:'tabHome', component: () => import('src/containers/tab/home'),},
  { path: 'user',name:'tabUser', component: () => import('src/containers/tab/user'),},
]
export default routers
