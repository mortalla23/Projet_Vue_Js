<template>
  <footer class="footer">
    <p>&copy; 2024 {{ companyName }}. Tous droits réservés.</p>
    <div class="footer-links">
      <!-- Utilisation de router-link pour les routes internes -->
      <router-link to="/privacy-policy">Politique de confidentialité</router-link>
      <router-link to="/terms-of-service">Conditions d'utilisation</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      companyName: "Votre Nom de Restaurant"
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  font-size: 14px;
}

.footer-links {
  margin-top: 10px;
}

.footer-links .router-link {
  color: #ff9800;
  margin: 0 10px;
  text-decoration: none;
  font-size: 14px;
}

.footer-links .router-link:hover {
  text-decoration: underline;
}
</style>
