import { createApp } from 'vue'
import { createStore } from "vuex";

import App from './App.vue'
import { VueQueryPlugin } from "vue-query";
import {createRouter, createWebHistory} from 'vue-router';
import Home from './Home.vue'
import Details from './Details.vue';
import Detail from './Detail.vue';
import AddContent from './AddContent.vue';
import Test from './Test.vue'

import ImageCompress from './components/ImageCompress.vue'
import Image from './components/Image.vue'
import Infinity from './components/Infinity.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/infinity",
    name: "infinity",
    component: Infinity,
  },
  {
    path: "/image",
    name: "image",
    component: ImageCompress,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
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





// Create a new store instance.
const store = createStore({
  state() {
    return {
      notifications: [],
    };
  },
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
      });
    },

    REMOVE_NOTIFICATION(state, notificationToRemove){
      state.notifications = state.notifications.filter(notification =>{
        return notification.id != notificationToRemove.id;
      })
    }
  },

  actions: {
    addNotification({ commit }, notification) {
      commit("PUSH_NOTIFICATION", notification);
    },

    removeNotification({ commit }, notification) {
      commit("REMOVE_NOTIFICATION", notification);
    },
  },
});



window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const token = `Bearer ${localStorage.getItem("token")}`;
window.axios.defaults.headers.common["Authorization"] = token;

createApp(App).use(router).use(store).use(VueQueryPlugin).mount("#app");
