import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurantName: "Mangez et cassez-vous",
    shop: 0,
    simpleMenu: [
      {
        label: 'Burger',
        image: {
          source: require('@/assets/Image/image5.jpg'),
          alt: "Burger"
        },
        inStock: true,
        quantity: 1,
        price: 4
      },
      {
        label: 'Frites',
        image: {
          source: require('@/assets/Image/frites.jpg'),
          alt: "Des frites"
        },
        inStock: true,
        quantity: 1,
        price: 2.50
      },
      {
        label: 'Menu du jour',
        image: {
          source: require('@/assets/Image/image2.jpg'),
          alt: "Menu au complet"
        },
        inStock: true,
        quantity: 1,
        price: 7.50
      },
    ],
    reservations: []
  },
  getters: {
    copyright: (state) => {
      const currentYear = new Date().getFullYear()
      return `Copyright ${state.restaurantName} Paris ${currentYear}`
    },
    totalItemsInCart: (state) => {
      return state.shop;
    },
    getMenuItems: (state) => {
      return state.simpleMenu;
    },
    getReservations: (state) => {
      return state.reservations;
    }
  },
  mutations: {
    addToShop(state, amount) {
      state.shop += amount;
    },
    addReservation(state, reservation) {
      state.reservations.push(reservation);
    }
  },
  actions: {
    addToShop({ commit }, amount) {
      commit('addToShop', amount);
    },
    addReservation({ commit }, reservation) {
      commit('addReservation', reservation);
    }
  },
  modules: {
  }
})
