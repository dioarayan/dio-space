import { createRouter, createWebHistory } from 'vue-router';

import MainComponent from './components/MainComponent.vue'
import ProjectItem from './components/projects/ProjectItem.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dioarayan' },
    { path: '/dioarayan', component: MainComponent },
    { path: '/projects-dts', component: ProjectItem },
  ]
});

export default router;

