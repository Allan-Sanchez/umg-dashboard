import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Invitado/Home.vue'
import AdminHomeView from '../views/Admin/AdminHomeView.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Guest',
    component: Home,
    children:[
      {
        path: '/',
        name: 'Guest-home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Invitado/HomePage.vue')
      },
      {
        path: 'eventos',
        name: 'Guest-event',
        component: () => import(/* webpackChunkName: "about" */ '../views/Invitado/Events.vue')
      },
      {
        path: 'calendario',
        name: 'Guest-calendar',
        component: () => import(/* webpackChunkName: "about" */ '../views/Invitado/Calendar.vue')
      },
    ]
  },
  {
    path: '/dashboard',
    name: 'Admin-home',
    component:AdminHomeView,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Dashboard.vue')
      },
      {
        path: 'usuarios',
        name: 'Users',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Users.vue')
      },
      {
        path: 'eventos',
        name: 'events',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Events.vue')
      },
      {
        path: 'facultades',
        name: 'faculties',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Faculties.vue')
      },
      {
        path: 'calendarios',
        name: 'calendars',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Calendars.vue')
      },
      
  ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Invitado/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
