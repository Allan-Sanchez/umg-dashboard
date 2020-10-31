import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Invitado/Home.vue'
import AdminHomeView from '../views/Admin/AdminHomeView.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Guest',
    meta:{
      requiresGuest:true
    },
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
    meta:{
      requiresAuth:true
    },
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
    meta:{
      requiresGuest:true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Invitado/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//nav guards
router.beforeEach((to,from,next) => {
  // check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // check i not logged in
    if (!localStorage.getItem('token')) {
      next({
        path:'/login',
        query:{
          redirect: to.fullPath
        }
      });
    }else{
      next();
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)){
       // check i not logged in
    if (localStorage.getItem('token')) {
      next({
        path:'/dashboard',
        query:{
          redirect: to.fullPath
        }
      });
    }else{
      // proceed to route
      next();
    }
  }else{
    // proceed to route
    next();
  }
});

export default router
