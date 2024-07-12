import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import CarDashboard from './components/CarDashboard.vue';
import HomePage from './components/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/dashboard', component: CarDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
