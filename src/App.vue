<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/reservation">Reservation</router-link> |
      <router-link to="/contact">Contact</router-link>
    
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: center; /* Centrer les liens */
  gap: 15px; /* Espacement entre les liens */
}

.navbar a {
  text-decoration: none;
  color: #2c3e50;
}

.navbar a.router-link-exact-active {
  font-weight: bold;
  color: #42b983;
}
</style>
