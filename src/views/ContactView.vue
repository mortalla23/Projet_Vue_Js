<template>
  <div :style="backgroundStyle" class="contact-container">
    <h2>Contactez nous</h2>
    <p>Adresse : {{ postale }}</p>
    <p>Téléphone : <button @click="callPhone" class="call-button">{{ phoneNumber }}</button></p>
    <p>Email : {{ mail }}</p>
    <p>Horaires :</p>
    <ul>
      <li>L-V: 06:00 à 16:00</li>
      <li>Samedi: 07:00 à 14:00</li>
      <li>Dimanche: 07:00 à 12:00</li>
    </ul>
  </div>
</template>

<script>
import backgroundImage from '@/assets/Image/image4.png';

export default {
  name: "ContactView",
  data() {
    return {
      mail: "mor.talla@actility.com",
      phoneNumber: "0609113541",
      postale: "Paris 75300",
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
  },
  methods: {
    callPhone() {
      window.location.href = `tel:${this.phoneNumber}`;
    }
  }
}
</script>

<style scoped>
.contact-container {
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

ul {
  list-style-type: none; /* Supprime les puces */
  padding: 0;
}

ul li {
  margin: 5px 0; /* Espacement entre les éléments de la liste */
}

.call-button {
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
}

.call-button:hover {
  background-color: #e68900;
}
</style>
