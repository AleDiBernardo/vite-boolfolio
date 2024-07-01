import { createRouter, createWebHistory } from 'vue-router'
import ProjectAboutUsPage from './style/pages/ProjectAboutUsPage.vue'
import ProjectHomePage from './style/pages/ProjectHomePage.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component:  ProjectHomePage
    },
    {
        path: '/about-us',
        name: 'About Us',
        component:  ProjectAboutUsPage
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
  })

export default router
