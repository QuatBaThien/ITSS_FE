import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faClock, faLocationDot, faPhone, faUser, faPen, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import VueStarRating from 'vue-star-rating';

import App from './App.vue';
import router from './router';
import './assets/main.css';
import './style.css';
import './axios';

// Add icons to the library
library.add(faPhone, faClock, faLocationDot, faBookmark, faUser, faPen);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('star-rating', VueStarRating);
app.mount('#app');
