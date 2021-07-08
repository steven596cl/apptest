import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/login/')
  },
  {
    path: '/',
    component: () => import('../views/layout/'),
    children: [
      {
        path: '/home',
        name: 'HomeIndex',
        component: () => import('../views/Home/')
      },
      {
        path: '/messages',
        name: 'MessagesIndex',
        component: () => import('../views/Messages/')
      },
      {
        path: '/rank',
        name: 'RankIndex',
        component: () => import('../views/Rank/')
      },
      {
        path: '/mine',
        name: 'MineIndex',
        component: () => import('../views/Mine/')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
