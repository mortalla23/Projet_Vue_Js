import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

// // Utilisation correcte du plugin pour Vue 2
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyCNg-6ZIlVbUGeLphg4su6hEiMbL4kvko8', // Remplace par ta clé API Google Maps
//     libraries: 'places', // Pour l'auto-complétion des adresses
//   },
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
