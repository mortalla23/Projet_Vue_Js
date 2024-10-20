<template>
  <div id="home">
    <div v-if="showNotification" class="cart-notification">
      {{ notificationMessage }}
    </div>
    <!-- Icône de chat flottante -->
    <div class="live-chat-icon" @click="toggleChat">
      <i class="bi bi-chat-dots"></i>
    </div>

    <!-- Fenêtre de chat -->
    <div v-if="showChat" class="chat-box">
      <div class="chat-header">
        <h4>Support en direct</h4>
        <button @click="toggleChat">X</button>
      </div>
      <div class="chat-messages">
        <div v-for="(message, index) in chatMessages" :key="index" :class="{'message-sent': message.sent, 'message-received': !message.sent}">
          <p>{{ message.text }}</p>
        </div>
      </div>
      <input type="text" v-model="chatInput" @keyup.enter="sendMessage" placeholder="Écrivez un message..." />
    </div>
    <!-- Hero Section with Background Image -->
    <section :style="heroStyle" class="hero-section">
      <header class="hero-header">
       
        <!-- <div class="delivery-options">
          <button :class="{'active': deliveryMode === 'delivery'}" @click="setDeliveryMode('delivery')">En livraison</button>
          <button :class="{'active': deliveryMode === 'pickup'}" @click="setDeliveryMode('pickup')">À emporter</button>
        </div>

        <div v-if="deliveryMode === 'delivery'" class="address-input">
          <input type="text" v-model="deliveryAddress" placeholder="Saisissez une adresse de livraison" />
          <button @click="searchAddress">Rechercher</button>
        </div>

        <Map
          :center="mapCenter"
          :zoom="14"
          style="width: 100%; height: 300px;"
          @click="updateAddress"
        >
          <Marker :position="mapCenter" />
        </Map> -->

        <h1 class="restaurant-name">Manger et cassez-vous</h1>
        <p class="restaurant-chef">ICI LE CLIENT EST ROI.</p>
        <p class="restaurant-chef"> Faites vous plaisir. </p>
        <p class="restaurant-chef"> Laissez-vous emporter dans un tourbillon de saveurs. </p>
        <button @click="scrollToMenu" class="discover-btn">Je découvre</button>
        <div class="reassurance-badges">
          <div class="badge">
            <img src="@/assets/Image/ingred.png" alt="Ingrédients bio">
            <span>Ingrédients bio</span>
          </div>
          <div class="badge">
            <img src="@/assets/Image/faitmaison.png" alt="Fait maison">
            <span>Fait maison</span>
          </div>
          <div class="badge">
            <img src="@/assets/Image/livr.png" alt="Livraison rapide">
            <span>Livraison rapide</span>
          </div>
        </div>
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
      <!-- Testimonials Section -->
      <section class="testimonials-section">
        <h3 class="section-title">Avis des Clients</h3>
        <div class="testimonials">
          <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="author-info">
              <!-- Ajout de l'image/avatar ici -->
              <img :src="testimonial.avatar" alt="Avatar de l'auteur" class="testimonial-avatar">
              <strong>{{ testimonial.author }}</strong>
            </div>
            <strong>{{ testimonial.comment }}</strong>
          </div>
        </div>
      </section>
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
// import { Map, Marker } from 'vue2-google-maps';
import { mapState } from 'vuex';
import backgroundImage from '@/assets/Image/image4.png'; // Remplace ceci avec l'image de fond que tu as

export default {
  name: 'HomeView',
  components: {
    MenuItem,
    // Map,
    // Marker,
  },
  data() {
    return {
      showChat: false, // Pour afficher/masquer le chat
      chatInput: '', // Message tapé par l'utilisateur
      chatMessages: [], // Liste des messages
      showNotification: false, // Pour afficher ou non la notification
      notificationMessage: '', // Message de la notification
      notificationTimeout: null, // Pour gérer le délai d'affichage de la notification
      testimonials: [
        { comment: 'Le meilleur restaurant de la ville !', author: 'Marie Dupont',avatar: require('@/assets/Image/fImage.png')},
        { comment: 'Super expérience, plats délicieux.', author: 'Mor Talla' ,avatar: require('@/assets/Image/photo.jpg')},
        { comment: 'Un service impeccable, je reviendrai !', author: 'Alice Bernard' ,avatar: require('@/assets//Image/vieux.png')},
      ]
      // deliveryMode: 'delivery',
      // deliveryAddress: '',
      //mapCenter: { lat: 48.8566, lng: 2.3522 }, // Paris par défaut
    };
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
      // Afficher la notification
      this.notificationMessage = `${amount} article(s) ajouté(s) au panier !`;
      this.showNotification = true;

      // Cacher la notification après 3 secondes
      if (this.notificationTimeout) {
        clearTimeout(this.notificationTimeout); // Réinitialiser le timer si un autre ajout est fait
      }
      this.notificationTimeout = setTimeout(() => {
        this.showNotification = false;
      }, 3000); // La notification disparaît après 3 secondes
    },
    scrollToMenu() {
      const menuSection = document.getElementById("menu-section");
      menuSection.scrollIntoView({ behavior: "smooth" });
    },
    setDeliveryMode(mode) {
      this.deliveryMode = mode;
    },
    searchAddress() {
      // Logique pour rechercher une adresse
    },
    updateAddress(event) {
      this.mapCenter = event.latLng;
    },
    toggleChat() {
      this.showChat = !this.showChat;
    },
    sendMessage() {
      if (this.chatInput.trim()) {
        // Ajouter le message envoyé par l'utilisateur
        this.chatMessages.push({ text: this.chatInput, sent: true });

        // Simuler une réponse automatique après 1 seconde
        setTimeout(() => {
          this.chatMessages.push({ text: "Merci pour votre message. Un agent vous répondra bientôt.", sent: false });
        }, 1000);

        this.chatInput = ''; // Réinitialiser le champ de saisie
      }
    },
  },
};
</script>

<style scoped>
/* Icône de chat flottante */
.live-chat-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffcc00;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Fenêtre de chat */
.chat-box {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 275px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.chat-header {
  background-color: #333;
  color: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-messages {
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
  background-color: #f9f9f9;
}

.chat-box input {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.message-sent {
  text-align: right;
  background-color: #d4edda;
  padding: 8px;
  margin: 5px;
  border-radius: 10px;
}

.message-received {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  margin: 5px;
  border-radius: 10px;
}



/* Style pour la notification */
.cart-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.8); /* Couleur verte pour indiquer le succès */
  color: #ffcc00;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: fadeInOut 3s ease-in-out;
}

/* Animation pour la notification */
@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}



.reassurance-badges {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 8%;
}

.badge {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  margin: 0 10px;
  transition: transform 0.3s ease;
}

.badge:hover {
  transform: translateY(-5px);
}

.badge img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.badge span {
  font-size: 0.9rem;
  color: #333;
}


.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ffcc00;
  text-align: center;
}
/* Testimonials Section */
.testimonials-section {
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.8);
  max-width: 1200px; /* Limiter la largeur */
  margin: 0 auto; /* Centrer la section */
}

.testimonials {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.testimonial {
  max-width: 300px;
  margin: 20px;
  text-align: center;
  flex: 1 1 300px; 
  color: white;
}

.testimonial p {
  font-style: italic;
  margin-bottom: 10px;
  color: #ffcc00;
}

.testimonial strong {
  font-weight: bold;
}
.author-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.testimonial-avatar {
  width: 40px; /* Taille de l'image d'avatar */
  height: 40px;
  border-radius: 50%; /* Pour un avatar circulaire */
  margin-right: 10px; /* Espace entre l'avatar et le nom */
}



.delivery-section {
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: -60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrer les éléments horizontalement */
  z-index: 1;
}

.delivery-options {
  display: flex;
  justify-content: center; /* Centrer les boutons horizontalement */
  gap: 10px; /* Espacement entre les boutons */
  margin-bottom: 20px;
}

.delivery-options button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  background-color: #ddd;
  transition: background-color 0.3s ease;
}

.delivery-options button.active {
  background-color: #333;
  color: white;
}

.address-input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
}

.search-bar {
  width: 800px; /* Réduction de la largeur de la barre de recherche */
  padding: 10px;
  margin-right: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
}

.search-button {
  padding: 10px 50px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  border-radius: 20px;
}

.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 20px;
  background-size: cover;
  background-position: center center;
  height: 100vh;
}



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
  animation: fadeInDown 1s ease-in forwards;
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
/* Animation Keyframes */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
