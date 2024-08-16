import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faJsSquare,
  faVuejs,
  faGolang,
  faNodeJs,
  faXTwitter,
  faGithub,
  faSteam,
  faSpotify
} from '@fortawesome/free-brands-svg-icons'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

library.add(
  faJsSquare,
  faVuejs,
  faGolang,
  faNodeJs,
  faXTwitter,
  faGithub,
  faSteam,
  faSpotify,
  faCircleDollarToSlot
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
