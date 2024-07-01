import { createRouter, createWebHistory } from "vue-router";
import AboutUsPage from "./style/pages/AboutUsPage.vue";
import HomePage from "./style/pages/HomePage.vue";
import ProjectsPage from "./style/pages/ProjectsPage.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    label: "Home",
    component: HomePage,
  },
  {
    path: "/about-us",
    name: "about us",
    label: "About Us",
    component: AboutUsPage,
  },
  {
    path: "/projects",
    name: "projects",
    label: "Projects",
    component: ProjectsPage,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
