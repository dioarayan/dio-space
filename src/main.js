import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import BaseButton from './components/UI/BaseButton.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { faEye } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
