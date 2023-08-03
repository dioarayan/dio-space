import { createRouter, createWebHistory } from 'vue-router';

// import MainComponent from './components/MainComponent.vue'
import TheMain from './components/layout/TheMain.vue';
import ProjectItem from './components/projects/ProjectItem.vue'

const router = createRouter({
  history: createWebHistory('/dio-space/'),
  routes: [
    { path: '/', redirect: '/dioarayan' },
    { path: '/dioarayan', component: TheMain },
    { path: '/projects-dts', component: ProjectItem },
  ],
});

export default router;

