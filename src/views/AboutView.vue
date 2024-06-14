<template>
  <div :style="backgroundStyle" class="about-container">
    <h1 class="animate__animated animate__fadeInDown">À propos de nous</h1>
    <p class="description animate__animated animate__fadeInUp">
      Bienvenue sur la page à propos de notre restaurant. Nous nous efforçons de vous offrir la meilleure expérience culinaire avec une atmosphère chaleureuse et accueillante.
    </p>

    <!-- Bouton flottant pour ajouter un commentaire -->
    <button class="float-button" @click="openCommentModal">
      <img src="@/assets/Image/R.png" alt="Comment Icon" />
    </button>

    <!-- Modal pour les commentaires -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeCommentModal">&times;</span>
        <h2>Ajouter un commentaire</h2>
        <form @submit.prevent="submitComment">
          <div>
            <textarea id="comment" v-model="comment" required></textarea>
          </div>
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from '@/assets/Image/image4.png';

export default {
  name: "AboutView",
  data() {
    return {
      backgroundImage,
      showModal: false,
      comment: '',
    };
  },
  computed: {
    backgroundStyle() {
      return {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.backgroundImage})`,
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
    openCommentModal() {
      this.showModal = true;
    },
    closeCommentModal() {
      this.showModal = false;
    },
    submitComment() {
      alert('Commentaire soumis : ' + this.comment);
      this.comment = '';
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
@import "~animate.css/animate.min.css";

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre horizontalement */
  justify-content: center; /* Centre verticalement */
  height: 100vh; /* Prend toute la hauteur de la vue */
  text-align: center;
  color: #fff; /* Change la couleur du texte pour qu'il soit plus lisible */
  background: rgba(0, 0, 0, 0.5); /* Ajoute un fond semi-transparent pour améliorer la lisibilité */
  padding: 20px;
  position: relative;
  z-index: 1;
}

.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 20px auto;
}

.float-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.float-button img {
  width: 24px;
  height: 24px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.modal-content {
  background: #333; /* Change le fond de la modal pour améliorer la visibilité */
  color: #fff; /* Change la couleur du texte pour améliorer la visibilité */
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 500px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 10px;
}

form textarea {
  width: 100%;
  padding: 1.25px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button {
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #0097a7;
}
</style>
