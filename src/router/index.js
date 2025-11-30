// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/home', name: 'Home', component: HomePage },
  // fallback to landing
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
