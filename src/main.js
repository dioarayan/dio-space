import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@iconify/vue';

import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('iconify-icon', Icon);
app.mount('#app')
