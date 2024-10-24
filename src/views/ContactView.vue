<template>
  <div :style="backgroundStyle" class="contact-container">
    <h2>Contactez nous</h2>
    <div class="contact-info">
      <div class="contact-item">
        <i class="fas fa-map-marker-alt icon"></i>
        <p><span class="label">Notre addresse principal</span> <span class="value">{{ postale }}</span></p>
      </div>

      <!-- Téléphone cliquable avec tel: -->
        <div class="contact-item">
          <i class="fas fa-phone icon"></i>
          <p><strong><span class="label">Numéro de téléphone</span></strong></p>

          <a :href="`tel:${phoneNumber}`" class="call-button">{{ phoneNumber }}</a>
        </div>

      <div class="contact-item">
        <i class="fas fa-envelope icon"></i>
        <p><span class="label">E-mail</span> <span class="value">{{ mail }}</span></p>
      </div>
    </div>

    <div class="contact-hours">
      <h3>Horaires :</h3>
      <div class="hours-list">
        <div class="hour-item">
          <span class="day">Lundi-Vendredi :</span>
          <span class="time">06:00 à 16:00</span>
        </div>
        <div class="hour-item">
          <span class="day">Samedi :</span>
          <span class="time">07:00 à 14:00</span>
        </div>
        <div class="hour-item">
          <span class="day">Dimanche :</span>
          <span class="time">07:00 à 12:00</span>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import backgroundImage from '@/assets/Image/backk.png';

export default {
  name: "ContactView",
  data() {
    return {
      mail: "mor.talla@groupe-esigelec.org",
      phoneNumber: "0749023540",
      postale: "19 avenue de la mare aux Daims",
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

@keyframes slide-up {
  0% {
    transform: translateY(100px); /* Part de 100px en dessous de sa position */
    opacity: 0; /* L'élément est invisible au début */
  }
  100% {
    transform: translateY(0); /* Arrive à sa position d'origine */
    opacity: 1; /* L'élément devient visible */
  }
}
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  text-align: center;
  color: #fff;
  padding: 20px;
  position: relative;
  z-index: 1;
  overflow-y: auto; 
}

.contact-info {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px; /* Limiter la largeur pour garder une belle apparence */
  margin: 0 auto; /* Centrer les éléments */
}
.contact-item {
  width: 280px; /* Légèrement plus large pour éviter l'effet "étroit" */
  padding: 20px;
  margin: 10px;
  background: linear-gradient(45deg, #a67c52, #d3b296);

  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  min-height: 150px; /* Fixer une hauteur minimum pour harmoniser les cartes */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrer verticalement le contenu */
  color: #f0f0f0; /* Couleur du texte adaptée au fond sombre */
  animation: slide-up 0.8s ease-in-out; /* Appliquer l'animation */

}

.contact-item:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Fond plus clair au survol */
  transform: scale(1.05); /* Légère animation au survol */
}
.contact-item img.icon {
  width: 40px;
  height: 40px;
  margin-bottom: 15px; /* Ajouter plus d'espace entre l'icône et le texte */
}
.call-button {
  display: block; /* Pour que le numéro soit sur une nouvelle ligne */
  margin-top: 5px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease;
}


.call-button:hover {
  color: #2c3e50;
}
.contact-item img.icon {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.contact-item p {
  font-size: 16px;
  margin: 0;
}

.label {
  display: block;
  font-weight: bold;
  color: #ffce00;
  text-transform: uppercase;
}

.value {
  margin-left: 10px;
  color: #ffffff;
  font-style: italic;
}

.contact-hours {
  margin-top: 20px;
  padding: 20px;
  background: linear-gradient(45deg, #a67c52, #d3b296);
 /* Fond en harmonie avec la section de réservation */
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  color: #f0f0f0;
  text-align: center;
  animation: slide-up 0.8s ease-in-out; /* Appliquer l'animation */
}

.contact-hours h3 {
  font-size: 24px;
  margin-bottom: 15px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hours-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hour-item {
  font-size: 18px;
  margin: 10px 0;
  font-family: 'Open Sans', sans-serif;
  color: #f5f5f5;
}

.hour-item .day {
  font-weight: bold;
  text-transform: uppercase;
  color: #ffce00;
}

.hour-item .time {
  margin-left: 10px;
  font-style: italic;
  color: #ffffff;
}

.hour-item:before {
  content: "🕒";
  margin-right: 10px;
  color: #ffce00;
}

.contact-hours:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.02);
  transition: all 0.3s ease-in-out;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 5px 0;
}
/* MEDIA QUERIES POUR PETITS ECRANS */
@media (max-width: 768px) {
  .contact-container {
    height: auto; /* Laisse le conteneur s'ajuster à la taille du contenu */
    padding-bottom: 20px; /* Ajoute du padding en bas pour l'espace supplémentaire */
    overflow-y: auto; /* Permet de défiler si le contenu dépasse */
  }

  .contact-info {
    flex-direction: column; /* Met les éléments en colonne */
    align-items: center; /* Centre les éléments */
  }

  .contact-item {
    width: 100%; /* Les cartes prennent toute la largeur */
    max-width: 350px; /* Limite de la largeur pour ne pas être trop étiré */
    margin: 15px 0; /* Ajoute un peu plus de marge */
  }

  .call-button {
    font-size: 16px; /* Réduire légèrement la taille de la police */
  }

  .contact-hours {
    padding: 15px;
  }

  .hours-list {
    width: 100%;
  }

  .hour-item {
    font-size: 16px; /* Réduire la taille de la police */
  }

  .contact-hours h3 {
    font-size: 20px; /* Réduire la taille de la police du titre */
  }
}
</style>
