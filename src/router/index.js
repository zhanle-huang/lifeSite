import { createRouter, createWebHashHistory } from 'vue-router'
import whiteName from 'static/json/whiteName.json'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index.vue'),
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: 'article',
                name: 'Article',
                component: () => import('@/views/Article.vue')
            },
            {
                path: 'case',
                name: 'Case',
                component: () => import('@/views/Case.vue')
            },
            {
                path: 'leaving',
                name: 'Leaving',
                component: () => import('@/views/Leaving.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/404',
        name: 'NoFound',
        component: () => import('@/views/NoFound.vue')
    },
    // 未指定则重定向
    {
        path: '/:pathMatch(.*)',
        redirect: '/home'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to.path)
    // if (whiteName.menuNameList.indexOf(to.path) > -1) {
    // }
    next()
})

export default router
