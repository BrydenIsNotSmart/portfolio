<script setup lang="ts">
import ItemComponent from './ItemComponent.vue'
import items from '../items/ProjectItems'
</script>

<template>
  <ul class="projects">
    <ItemComponent v-for="item in items" :key="item.heading">
      <template #icon>
        <img :src="item.icon" class="icon" />
      </template>
      <template #heading>{{ item.heading }}</template>
      <div v-html="item.content"></div>
      <button v-if="item.url" :onclick="`window.open('${item.url}', '_blank')`">Website</button>
      <button v-if="item.github" :onclick="`window.open('${item.github}', '_blank')`">
        GitHub
      </button>
      <button v-if="item.discord" :onclick="`window.open('${item.discord}', '_blank')`">
        Discord
      </button>
    </ItemComponent>
  </ul>
</template>

<style scoped>
.icon {
  height: 2.5rem;
  border-radius: 5px;
}

button {
  margin-top: 7px;
  cursor: pointer;
  color: white;
}

@media (min-width: 1024px) {
  .projects {
    overflow-y: auto;
    max-height: 65vh;
  }
}
</style>
