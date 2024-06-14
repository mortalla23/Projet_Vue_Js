import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import ReservationsVue from '@/views/ReservationsVue.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path:'/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path:'/reservation',
    name: 'Reservation',
    component: ReservationsVue
  }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  
];

const router = new VueRouter({
  mode:'history',
  routes
});

export default router;
