<script setup lang="ts">
import ItemComponent from './ItemComponent.vue'
import items from '../items/TechnologyItems'
</script>

<template>
  <ul class="technologies">
    <ItemComponent v-for="item in items" :key="item.heading">
      <template #icon>
        <font-awesome-icon
          v-if="item.icon.type === 'font-awesome'"
          :icon="item.icon.icon"
          :style="{ color: item.icon.color }"
          class="icon"
        />
        <img v-else-if="item.icon.type === 'img'" :src="item.icon.src" class="icon" />
      </template>
      <template #heading>{{ item.heading }}</template>
      <div v-html="item.content"></div>
    </ItemComponent>
  </ul>
</template>

<style scoped>
.icon {
  height: 2.5rem;
}

@media (min-width: 1024px) {
  ul.technologies {
    overflow-y: auto;
    max-height: 65vh;
    padding-right: 5px;
  }
}
</style>
