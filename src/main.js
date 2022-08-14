import { createApp } from 'vue'
import App from './App.vue'
import { VueQueryPlugin } from "vue-query";
import {createRouter, createWebHistory} from 'vue-router';
import Home from './Home.vue'
import Details from './Details.vue';
import Detail from './Detail.vue';
import AddContent from './AddContent.vue';

import ImageCompress from './components/ImageCompress.vue'
import Image from './components/Image.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/image",
    name: "image",
    component: ImageCompress,
  },

  {
    path: "/img",
    name: "img",
    component: Image,
  },

  {
    path: "/details/:docId",
    name: "details",
    component: Details,
    props: true,
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail,
    props: true,
  },
  {
    path: "/add",
    name: "add",
    component: AddContent,
    props: true,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes:routes
});


window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const token = `Bearer ${localStorage.getItem("token")}`;
window.axios.defaults.headers.common["Authorization"] = token;

createApp(App).use(router).use(VueQueryPlugin).mount('#app');
