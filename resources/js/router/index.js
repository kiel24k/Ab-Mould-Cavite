import { createWebHistory, createRouter } from 'vue-router'
import Partner_Home from '../views/member/pages/Home.vue'


const routes = [
    {
        path:'/',
        name:'partner_index',
        component:Partner_Home
    },
    {
        path: '/:unauthorized(.*)*',
        name: '401',
        component: () => import ('../error/404.vue')
     },
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
