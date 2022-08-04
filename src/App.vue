<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="app container">
    <div class="title">
      <h2>Vue + Pinia🍍 + JWT</h2>
    </div>
    <header>
      <div class="logo">
        <img alt="Vue logo" src="@/assets/logo.svg" />
      </div>

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Login</RouterLink>
          <RouterLink to="/register">Register</RouterLink>
          <RouterLink to="/home">Home</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
}

.app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

nav {
  display: flex;
  flex-direction: column;
}



.logo {
  display: block;
  margin: 0 2rem 0 0;
  width: 200px;
}


nav a.router-link-exact-active {
  color: #41a241;
  border-left: 1px solid #41a241;
}

nav a.router-link-exact-active:hover {
  color: #042439;
  transition: var(--transition);
}

nav a {
  display: inline-block;
  color: black;
  padding: 0 1rem;
  margin-bottom: 10px;
}

@media (max-width: 640px) {

  .app {
    flex-direction: column;
    justify-content: space-around;
  }

  .logo {
    width: 150px;
  }
}
</style>
