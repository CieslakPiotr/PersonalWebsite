import { createRouter, createWebHistory } from "vue-router";

const TITLE = "Piotr Cieslak — Software Engineer";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: () => import("./views/HomeView.vue"), meta: { label: "Home" } },
    { path: "/about", name: "about", component: () => import("./views/AboutView.vue"), meta: { label: "About" } },
    { path: "/work", name: "work", component: () => import("./views/WorkView.vue"), meta: { label: "Work" } },
    { path: "/projects", name: "projects", component: () => import("./views/ProjectsView.vue"), meta: { label: "Projects" } },
    { path: "/projects/:slug", name: "project", component: () => import("./views/ProjectView.vue"), meta: { label: "Projects" } },
    { path: "/contact", name: "contact", component: () => import("./views/ContactView.vue"), meta: { label: "Contact" } },
    { path: "/:pathMatch(.*)*", name: "notfound", component: () => import("./views/NotFoundView.vue"), meta: { label: "Not found" } },
  ],
  scrollBehavior: () => ({ top: 0 }),
});

if (location.hash.startsWith("#/")) history.replaceState(null, "", location.hash.slice(1));

router.afterEach((to) => {
  document.title = to.name === "home" ? TITLE : `${to.meta.label} · ${TITLE}`;
});

export default router;
