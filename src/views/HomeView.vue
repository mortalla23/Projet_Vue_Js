<template>
  <div :style="backgroundStyle" id="home" class="home">
    <h1 class="animate__animated animate__fadeInDown">{{ restaurantName }}</h1>
    <p class="description animate__animated animate__fadeInUp">
      Bienvenue dans notre restaurant {{ restaurantName }}! 
      Ici le client est roi. Faites vous plaisir.
    </p>

    <section class="menu animate__animated animate__fadeIn">
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
    <aside class="shop animate__animated animate__fadeInRight">
      <h5>Panier d'achat: {{ shop }} articles</h5>
    </aside>  

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
        height: '100vh',
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
<style lang="scss">
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
  overflow: auto; /* Ajoute le défilement si le contenu dépasse la hauteur de la fenêtre */
}

.description, .menu, .shop, .footer {
  background: rgba(0, 0, 0, 0.5); /* Ajoutez un fond semi-transparent pour améliorer la lisibilité */
  padding: 20px;
  border-radius: 10px;
}

.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  font-style: italic;
  text-align: center;
  margin-top: 20px;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  position: absolute;
  right: 30px;
  top: 0;
  padding: 10px;
  border-radius: 5px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .menu-item {
    width: 95%; /* Augmentez la largeur pour qu'elle prenne plus de place sur les petits écrans */
    max-width: none; /* Supprimez la limite maximale de largeur */
    margin: 10px; /* Réduisez l'espacement entre les éléments */
    padding: 15px; /* Réduisez le padding pour mieux utiliser l'espace */
  }

  .shop {
    position: relative;
    right: auto;
    top: auto;
    margin-top: 20px;
    padding: 15px;
    width: calc(100% - 40px); /* Adaptez la largeur au parent avec des marges */
  }
}

@media (max-width: 480px) {
  .description {
    font-size: 1rem; /* Réduisez la taille de police pour les très petits écrans */
  }

  .footer {
    font-size: 0.8rem; /* Réduisez la taille de police du footer */
    padding: 10px;
  }
}
</style>
