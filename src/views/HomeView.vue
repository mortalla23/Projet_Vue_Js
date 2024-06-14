<template>
  <div :style="backgroundStyle" id="home" class="home">
    <header>
      <h1 class="animate__animated animate__fadeInDown">{{ restaurantName }}</h1>
      <p class="description animate__animated animate__fadeInUp">
        Bienvenue dans notre restaurant {{ restaurantName }}! 
        Ici le client est roi. Faites vous plaisir.
      </p>
    </header>
    <main class="content animate__animated animate__fadeIn">
      <section class="menu">
        <h3>Menu</h3>
        <div class="menu-items">
          <MenuItem
            v-for="item in simpleMenu"
            :key="item.label"
            @add-items-to-cart="addToShop"
            :quantity="item.quantity"
            :label="item.label"
            :image="item.image"
            :inStock="item.inStock"
            :price="item.price"
          />
        </div>
      </section>
      <aside class="shop">
        <h5>Panier d'achat: {{ shop }} articles</h5>
        <router-link to="/payment">
          <button>Procéder au paiement</button>
        </router-link>
      </aside>
    </main>
    <footer class="footer animate__animated animate__fadeInUp">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>


<script>
import MenuItem from '../components/MenuItem.vue';
import { mapGetters, mapState } from 'vuex';
import backgroundImage from '@/assets/Image/image4.png';

export default {
  name: 'HomeView',
  components: {
    MenuItem
  },
  computed: {
    ...mapState({
      restaurantName: "restaurantName",
      shop: "shop",
      simpleMenu: "simpleMenu"
    }),
    ...mapGetters({
      copyright: "copyright"
    }),
    backgroundStyle() {
      return {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '-1'
      };
    }
  },
  methods: {
    addToShop(amount) {
      this.$store.dispatch('addToShop', amount);
    },
  },
}
</script>

<style scoped>
@import "~animate.css/animate.min.css";

#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff; /* Changez la couleur du texte pour qu'il soit plus lisible */
  margin-top: 60px;
  padding: 20px;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Permet le défilement vertical */
}

header {
  flex-shrink: 0;
}

main.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.description, .menu, .shop {
  background: rgba(0, 0, 0, 0.5); /* Ajoutez un fond semi-transparent pour améliorer la lisibilité */
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  font-style: italic;
  text-align: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5); /* Ajoutez un fond semi-transparent pour améliorer la lisibilité */
  width: 100%;
  flex-shrink: 0; /* Assure que le footer ne rétrécit pas */
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.menu-item {
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 90%; /* Réduisez la largeur ici pour qu'elle soit proportionnelle au parent */
  max-width: 600px; /* Limite maximale de la largeur */
  text-align: left;
}

.menu-item:hover {
  transform: translateY(-10px);
}

.menu-item img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.shop {
  position: relative;
  padding: 10px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7); /* Assurez une bonne lisibilité */
  color: #fff;
}

.shop button {
  background-color: #ff9800;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.shop button:hover {
  background-color: #e68900;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .shop {
    position: static;
    margin: 20px 0;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .shop {
    padding: 15px;
  }

  .shop button {
    width: 100%;
    font-size: 14px;
  }
}


</style>