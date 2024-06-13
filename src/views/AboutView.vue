<template>
  <div :style="backgroundStyle" class="about-container">
    <h1 class="animate__animated animate__fadeInDown">À propos de nous</h1>
    <p class="description animate__animated animate__fadeInUp">
      Bienvenue sur la page à propos de notre restaurant. Nous nous efforçons de vous offrir la meilleure expérience culinaire avec une atmosphère chaleureuse et accueillante.
    </p>
  </div>
</template>

<script>
import backgroundImage from '@/assets/Image/image4.png';

export default {
  name: "AboutView",
  data() {
    return {
      backgroundImage,
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
</style>
