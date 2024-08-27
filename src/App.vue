<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
</script>

<template>
  <header>
    <img alt="My avatar" class="avatar" src="/bryden.webp" width="150" height="150" />

    <div class="wrapper">
      <MainComponent msg="Bryden Calaway" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/activity">Activity</RouterLink>
        <RouterLink to="/live">Live</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/technologies">Technologies</RouterLink>
      </nav>
    </div>
  </header>

  <transition name="slide-fade" mode="out-in">
    <RouterView />
  </transition>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.avatar {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 10px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 4);
  }

  .avatar {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1px;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    transform 0.5s,
    opacity 0.5s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
