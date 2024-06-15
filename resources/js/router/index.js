import { createWebHistory, createRouter } from 'vue-router'
import Login from '../views/auth/Login.vue'


const routes = [
    {
        path:'/',
        name:'partner_index',
        component:Login
    },
    {
        path: '/:unauthorized(.*)*',
        name: '401',
        component: () => import ('../error/404.vue')
     },
     
     {
        path: '/admin-accounts',
        name:'admin-accounts',
        component: () => import('../views/admin/pages/Accounts.vue')
     }

     ,
     {
        path:'/admin-profile',
        name:'admin-profile',
        component: () => import('../views/admin/pages/Profile.vue')
     },
    {
        path:'/admin-analytics',
        name:'admin-analytics',
        component:() => import('../views/admin/pages/Analytics.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || new Promise ((resolve => {
            setTimeout(() => resolve({top:0, behavior: "smooth"}),1)
        }))
        return {top:null,left:null, behavior: null}
    }
  })

  export default router;
