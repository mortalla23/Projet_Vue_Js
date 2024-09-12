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
    <AppFooter />
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
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        position: 'absolute',
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
  text-align: center;
  color: #fff;
  margin-top: 60px;
  padding: 20px;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

header {
  flex-shrink: 0;
}

main.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligner le contenu en haut */
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px; /* Ajuste l'espacement supérieur pour éviter le chevauchement */
}

.description, .menu, .shop {
  background: rgba(0, 0, 0, 0.5);
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
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 20px;
  width: 100%;
  font-size: 14px;
  margin-top: auto; /* Pour que le footer reste en bas du contenu */
  position: relative; /* Supprimer le "fixed" */
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
  width: 60%;
  max-width: 405px; /* Réduit la largeur maximale pour un meilleur ajustement */
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

.menu-item .quantity {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.menu-item .quantity input[type="number"] {
  width: 50px; /* Taille du champ ajustée pour les quantités */
  margin-left: 10px;
  text-align: center;
}

.menu-item .quantity label {
  margin-right: 10px;
  font-weight: bold;
}

.shop {
  position: relative;
  padding: 10px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}

.shop button {
  background-color: #ff9800;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.shop button:hover {
  background-color: #e68900;
}

.add-to-cart-button {
  background-color: #28a745; /* Vert pour le bouton ajouter au panier */
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.add-to-cart-button:hover {
  background-color: #218838; /* Un vert plus foncé au survol */
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  #home {
    padding: 5px 10px; /* Réduire le padding sur mobile */
  }

  main.content {
    margin-top: 10px; /* Réduire la marge supérieure */
  }
  .menu-item {
    max-width: 100%; /* Les items prennent la largeur totale sur petits écrans */
  }

  .shop {
    position: static;
    margin: 20px 0;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .menu-item {
    padding: 10px;
  }

  .menu-item .quantity input {
    width: 40px;
  }

  .shop button {
    width: 100%;
    font-size: 14px;
  }
}


</style>