<template>
  <div id="app">
    <nav class="navbar">
      <ul class="nav-links">
        <li><router-link to="/" exact>Accueil</router-link></li>
        <li><router-link to="/about">A propos</router-link></li>
        <li><router-link to="/reservation">Reservation</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <div class="content">
      <router-view/>
    </div>
    <!-- <AppFooter /> -->
  </div>
</template>

<script>
// import AppFooter from './components/AppFooter.vue';

export default {
  // components: {
  //   AppFooter
  // },
  name: 'App',
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100%; /* Remplacer 100vh par 100% */
}

.content {
  flex-grow: 1; /* Assure que le contenu prend tout l'espace disponible avant le footer */
  padding-bottom: 20px; /* Ajoute un peu d'espace en bas du contenu */
  overflow: auto; /* Permet le défilement si nécessaire */
}

/* Footer placé normalement */
.footer {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 20px;
  width: 100%;
  font-size: 14px;
  margin-top: auto; /* Assure que le footer est à la fin du contenu */
  position: relative; /* Assure que le footer reste en bas de la page sans chevaucher le contenu */
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: #ff9800;
  margin: 0 10px;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85); /* Fond sombre pour plus de contraste */
  padding: 15px 30px;
  box-shadow: none;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

/* Liens de navigation */
.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 8px 15px;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  color: #ffffff; /* Couleur blanche pour un meilleur contraste */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Ajout d'une ombre pour améliorer la lisibilité */
}

.nav-links a:hover {
  background-color: #ff9800;
}

.nav-links a.router-link-exact-active {
  font-weight: bold;
  color: #ff9800;
  background-color: rgba(66, 185, 131, 0.2); /* Arrière-plan plus visible */
  border-radius: 5px;
}

/* Styles pour petits écrans */
@media (max-width: 768px) {
  .navbar {
    padding-bottom: 20px;
    justify-content: flex-start;
  }

  .nav-links {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links a {
    font-size: 14px;
    padding: 6px 10px;
  }
}

/* Styles pour très petits écrans */
@media (max-width: 480px) {
  .navbar {
    padding-bottom: 20px;
    justify-content: flex-start;
  }

  .nav-links {
    flex-direction: column;
    gap: 10px;
  }

  .nav-links a {
    font-size: 13px;
    padding: 5px 8px;
  }
}

body {
  padding-top: 70px;
}
</style>
