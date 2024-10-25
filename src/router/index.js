import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
//import OmeView from '@/views/OmeView.vue'
import NewsCategoryView from '@/views/NewsCategoryView.vue'
import NewsDetailView from '@/views/NewsDetailView.vue'

import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AboutUsView',
      name: 'aboutus',
      component: AboutUsView
    },
    {
      path: '/ContactUsView',
      name: 'contactusView',
      component: ContactUsView
    },
    // {
    // path: '/OmeView',
    //   name: 'ome',
    //   component: OmeView
    // },
    {
      path: '/NewsCategoryView/:category',
      name: 'NewsCategoryView',
      component: NewsCategoryView
    },
    {
      path: '/NewsDetailView/:uuid',
      name: 'NewsDetailView',
      component: NewsDetailView
    },
  ]
})

export default router
