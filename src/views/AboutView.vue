<template>
  <div :style="backgroundStyle" class="about-container">
    <div class="content-container">
      <!-- Partie texte -->
      <div class="text-section animate__animated animate__fadeInDown">
        <h1>
          Lancé en 2013 par un ancien commerçant de produits artisanaux passionné de street food, Mangez et cassez-vous est né de la volonté de fusionner ces deux passions en un concept unique.
        </h1>
        <p class="description animate__animated animate__fadeInUp">
          Mangez et cassez-vous, c'est des burgers 100% frais et locaux, dégoulinants de saveurs, à prix abordable, dans un univers qui met en avant les cultures alternatives. Au-delà du produit, Mangez et cassez-vous, c'est un lifestyle, un état d’esprit qui rassemble toute une communauté partageant les mêmes valeurs et les mêmes passions.
        </p>
      </div>

      <!-- Partie photo des cofondateurs -->
      <div class="founders-section animate__animated animate__fadeInUp">
        <div class="founder">
          <img src="@/assets/Image/img.jpeg" alt="Mor Talla" class="founder-image">
          <h3 class="founder-name">Mor Talla</h3>
          <p class="founder-role">Fondateur</p>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>
import backgroundImage from '@/assets/Image/backk.png';

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
        position: 'relative',
        top: '0',
        left: '0',
        zIndex: '-1',
        color: '#fff',
      };
    }
  }
}
</script>

<style scoped>
@import "~animate.css/animate.min.css";

/* Conteneur global */
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  color: #fff;
}

.content-container {
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
}

/* Partie texte */
.text-section {
  flex: 2; /* Cette section prend 2/3 de l'espace */
  padding-right: 50px;
}

.text-section h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.text-section .description {
  font-size: 1.3rem;
  line-height: 1.5;
}

/* Partie fondateurs */
.founders-section {
  flex: 1; /* Cette section prend 1/3 de l'espace */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.founder {
  text-align: center;
  margin-bottom: 20px;
}

.founder-image {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.founder-name {
  font-size: 1.5rem;
  color: #ff3b3f;
  margin-top: 15px;
}

.founder-role {
  font-size: 1.2rem;
  margin-top: 5px;
}
</style>
