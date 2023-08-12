import { createRouter, createWebHistory } from 'vue-router';

// import MainComponent from './components/MainComponent.vue'
// import TheMain from './components/layout/TheMain.vue';
import DocTrackerPage from './components/projects/DocTrackerPage.vue'
import TheMain from './components/view/TheMain.vue'

const router = createRouter({
  history: createWebHistory('/dio-space/'),
  routes: [
    { path: '/', redirect: '/dioarayan' },
    { path: '/dioarayan', component: TheMain },
    { path: '/projects-dts', component: DocTrackerPage },
  ],
});

export default router;

