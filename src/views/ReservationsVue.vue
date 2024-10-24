<template>
    <div :style="backgroundStyle" class="reservation-container">
      <h2 class="animate__animated animate__fadeInDown">Réservations</h2>
      <form class="animate__animated animate__fadeInUp" @submit.prevent="submitReservation">
        <div>
          <label for="name">Nom :</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div>
          <label for="email">Email :</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="phone">Téléphone :</label>
          <input type="tel" id="phone" v-model="phone" required />
        </div>
        <div>
          <label for="date">Date :</label>
          <input type="date" id="date" v-model="date" required />
        </div>
        <div>
          <label for="time">Heure :</label>
          <input type="time" id="time" v-model="time" required />
        </div>
        <div>
          <label for="guests">Nombre de personnes :</label>
          <input type="number" id="guests" v-model="guests" required min="1" />
        </div>
        <button type="submit">Réserver</button>
      </form>
    </div>
  </template>
  <script>
  import backgroundImage from '@/assets/Image/backk.png';
  import { mapActions } from 'vuex';
  
  export default {
    name: 'ReservationsView',
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
        backgroundImage,
      };
    },
    computed: {
      backgroundStyle() {
        return {
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          // backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          width: '100%',
          position: 'absolute',
          minHeight: '100vh',
          top: '0',
          left: '0',
          zIndex: '-1'
        };
      }
    },
    methods: {
      ...mapActions(['addReservation']),
      submitReservation() {
        const reservation = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          date: this.date,
          time: this.time,
          guests: this.guests
        };
        this.addReservation(reservation);
        alert(`Réservation pour ${this.guests} personnes le ${this.date} à ${this.time} a été soumise.`);
      }
    }
  }
  </script>
  <style scoped>
  @import "~animate.css/animate.min.css";
  
  .reservation-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centre horizontalement */
    justify-content: center; /* Centre verticalement */
    text-align: center;
    min-height: calc(100vh - 100px);
    color: #fff; /* Change la couleur du texte pour qu'il soit plus lisible */
    background: rgba(0, 0, 0, 0.5); /* Ajoute un fond semi-transparent pour améliorer la lisibilité */
    padding: 20px;
    position: relative;
    z-index: 1;
  }
  
  form {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  position: relative;
  text-align: left; /* Assurer un alignement à gauche pour les labels */
  z-index: 2;
}

form div {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column; /* Empiler les labels et inputs verticalement */
}

form label {
  font-weight: bold;
  font-size: 16px; /* Augmenter la taille de la police */
  color: #333; /* Couleur sombre pour un bon contraste */
  margin-bottom: 5px;
}

form input {
  width: 100%; /* Assurer que l'input occupe toute la largeur */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box; /* Garantir que le padding n'affecte pas la taille totale */
}

form button {
  background-color: #ff9800;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%; /* Le bouton occupe également toute la largeur */
}

form button:hover {
  background-color: #e68900;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .reservation-container {
    padding: 10px;
  }

  form {
    padding: 15px;
    max-width: 90%;
  }

  form button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  form {
    padding: 10px;
  }

  form label {
    font-size: 14px;
  }

  form input {
    padding: 8px;
  }

  form button {
    font-size: 14px;
  }
}

</style>