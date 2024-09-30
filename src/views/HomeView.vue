<template>
  <div id="home">
    <!-- Hero Section with Background Image -->
    <section :style="heroStyle" class="hero-section">
      <header class="hero-header">
        <h1 class="restaurant-name">Manger et cassez-vous</h1>
        <p class="restaurant-chef">ICI LE CLIENT EST ROI.</p>
        <p class="restaurant-chef"> Faites vous plaisir. </p>
        
        <button @click="scrollToMenu" class="discover-btn">Je découvre</button>
      </header>
      <div class="header-icons">
        <!-- Utilisation des icônes Bootstrap -->
        <a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
        <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
        <a href="#" target="_blank"><i class="bi bi-award"></i> <!-- Icône Michelin peut être représentée par "award" --> </a>
      </div>
      <!-- <div class="action-buttons">
        <button class="newsletter-btn">Newsletter</button>
        <button class="reserve-btn">Réserver</button>
      </div> -->
    </section>

    <!-- Menu Section -->
    <main class="content">
      <section id="menu-section" class="menu-section">
        <h3 class="section-title">Notre Menu</h3>
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
    <footer class="footer-section">
      <div class="footer-content">
        <p>&copy; 2024 {{ restaurantName }}. Tous droits réservés.</p>
        <div class="footer-icons">
          <a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
          <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
          <a href="#" target="_blank"><i class="bi bi-twitter"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue';
import { mapState } from 'vuex';
import backgroundImage from '@/assets/Image/image4.png'; // Remplace ceci avec l'image de fond que tu as

export default {
  name: 'HomeView',
  components: {
    MenuItem,
  },
  computed: {
    ...mapState({
      restaurantName: "restaurantName",
      shop: "shop",
      simpleMenu: "simpleMenu",
    }),
    heroStyle() {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
        position: 'relative',
      };
    },
  },
  methods: {
    addToShop(amount) {
      this.$store.dispatch('addToShop', amount);
    },
    scrollToMenu() {
      const menuSection = document.getElementById("menu-section");
      menuSection.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: white;
  padding: 20px;
}

.hero-header {
  padding-top: 100px;
}

.restaurant-name {
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
}

.restaurant-chef {
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 20px;
}


.discover-btn {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 50px;
  margin-top: 50px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;
}
.discover-btn:hover {
  background-color: #333;
}
.header-icons {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.header-icons a {
  margin: 0 10px;
  font-size: 1.5rem;
  color: white;
}

.action-buttons {
  position: absolute;
  top: 20px;
  right: 20px;
}


.content {
  padding-top: 20px;
}

.menu-section {
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ffcc00; /* Couleur jaune pour le titre */
  text-align: center; /* Centrer le texte horizontalement */
}


.menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.shop {
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: white;
  width: 300px;
  margin: 20px auto; /* Centrer la section horizontalement */
  text-align: center; /* Centrer le contenu à l'intérieur */
}
/* Footer Styling */
.footer-section {
  background-color: #333;
  padding: 20px 0;
  text-align: center;
  color: white;
  margin-top: 40px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-icons a {
  margin: 0 10px;
  font-size: 1.5rem;
  color: white;
}

.footer-icons a:hover {
  color: #ffcc00; /* Couleur de survol */
}

.footer-content p {
  margin-bottom: 10px;
}
</style>
