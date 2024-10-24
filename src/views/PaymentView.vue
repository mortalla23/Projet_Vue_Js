<template>
    <div :style="backgroundStyle" class="payment-container">
        <div class="paiement">
      <h2 class="animate__animated animate__fadeInDown">Paiement</h2>
         </div>
      <div class="order-summary animate__animated animate__fadeInUp">
        <h3>Résumé de la commande</h3>
        <ul>
          <li v-for="item in cartItems" :key="item.label">
            {{ item.label }} - {{ item.quantity }} x {{ item.price }}€ = {{ item.quantity * item.price }}€
          </li>
        </ul>
        <h3>Total: {{ total }}€</h3>
      </div>
      <form class="payment-form animate__animated animate__fadeInUp" @submit.prevent="submitPayment">
        <div>
          <label for="cardNumber">Numéro de carte :</label>
          <input type="text" id="cardNumber" v-model="cardNumber" required />
        </div>
        <div>
          <label for="expiryDate">Date d'expiration :</label>
          <input type="text" id="expiryDate" v-model="expiryDate" placeholder="MM/AA" required />
        </div>
        <div>
          <label for="cvv">CVV :</label>
          <input type="text" id="cvv" v-model="cvv" required />
        </div>
        <button type="submit">Payer</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import backgroundImage from '@/assets/Image/backk.png';
  
  export default {
    name: 'PaymentView',
    data() {
      return {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        backgroundImage,
      };
    },
    computed: {
      ...mapState({
        cartItems: state => state.simpleMenu.filter(item => item.quantity > 0),
        total: state => state.simpleMenu.reduce((acc, item) => acc + (item.quantity * item.price), 0)
      }),
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
      submitPayment() {
        // Logic to handle payment
        alert('Paiement réussi ! Merci pour votre achat.');
      }
    }
  }
  </script>
  
  <style scoped>
  @import "~animate.css/animate.min.css";
  .paiement {
    color: #ece3e3;
  }
  .payment-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centre horizontalement */
    justify-content: center; /* Centre verticalement */
    height: 100vh; /* Prend toute la hauteur de la vue */
    text-align: center;
    color: #242121; /* Change la couleur du texte pour qu'il soit plus lisible */
    padding: 20px;
    position: relative;
    z-index: 1;
  }
  
  .order-summary {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }
  
  .payment-form {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  .payment-form div {
    margin-bottom: 15px;
  }
  
  .payment-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .payment-form input {
    width: 100%;
    padding: 3px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .payment-form button {
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
  
  .payment-form button:hover {
    background-color: #e68900;
  }
  
  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .payment-container {
      padding: 10px;
    }
  
    .order-summary,
    .payment-form {
      padding: 20px;
      max-width: 90%;
    }
  
    .payment-form button {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    .payment-form {
      padding: 15px;
    }
  
    .payment-form label {
      font-size: 14px;
    }
  
    .payment-form input {
      padding: 8px;
    }
  
    .payment-form button {
      font-size: 14px;
    }
  }
  </style>
  