import { createRouter, createWebHistory } from "vue-router";

// import MainComponent from "./components/MainComponent.vue"
// import TheMain from "./components/layout/TheMain.vue";
import DocTrackerPage from "./components/projects/DocTrackerPage.vue"
import TheMain from "./components/view/TheMain.vue"

const router = createRouter({
  history: createWebHistory("/dio-space/"),
  routes: [
    { path: "/", component: TheMain },
    { path: "/projects-dts", component: DocTrackerPage },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth"};
    } else {
      return {x: 0, y: 0}
    }
  }
});

export default router;

