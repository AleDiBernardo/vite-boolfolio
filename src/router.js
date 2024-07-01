import { createRouter, createWebHistory } from 'vue-router'
import AboutUsPage from './style/pages/AboutUsPage.vue'
import HomePage from './style/pages/HomePage.vue'
import ProjectsPage from './style/pages/ProjectsPage.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component:  HomePage
    },
    {
        path: '/about-us',
        name: 'About Us',
        component:  AboutUsPage
    },
    {
        path: '/projects',
        name: 'Projects',
        component:  ProjectsPage
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
  })

export default router
