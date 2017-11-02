import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('containers/Home/Home')
const City = () => import('containers/City/City')
const Login = () => import('containers/Login/Login')
const Detail = () => import('containers/Detail/Detail')
const Search = () => import('containers/Search/Search')
const User = () => import('containers/User/User')

Vue.use(Router)

const loginPath = {
  path: 'login',
  component: Login,
  children: [
    {
      path: 'user',
      component: User
    }
  ]
}
const userPath = {
  path: 'user',
  component: User
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'search/:cate',
          component: Search,
          children: [
            {
              path: 'detail/:shopId',
              component: Detail,
              children: [loginPath, userPath]
            }
          ]
        },
        {
          path: 'detail/:shopId',
          component: Detail,
          children: [loginPath, userPath]
        },
        {
          path: 'city',
          component: City
        },
        loginPath,
        userPath
      ]
    }
  ]
})
