<script setup lang="ts">
import twitch from '@/assets/img/twitch.webp'
import kick from '@/assets/img/kick.webp'
import rumble from '@/assets/img/rumble.webp'
</script>

<template>
  <div class="live">
    <h1><b>Live Platforms</b></h1>
    <h2>
      I like to livestream development work and gaming every now and again. Livestreaming can help
      me focus on my work and not get distracted.
    </h2>
    <div>
      <button
        title="Rumble"
        :onclick="`window.open('https://rumble.com/c/BrydenIsNotSmart', '_blank')`"
      >
        <img :src="rumble" class="icon" style="height: 30px; width: 100px; padding-top: 2px" />
      </button>
      <button title="Kick" :onclick="`window.open('https://kick.com/BrydenIsNoSmart', '_blank')`">
        <img :src="kick" class="icon" style="height: 30px; width: 75px; padding-top: 2px" />
      </button>
      <button
        title="Twitch"
        :onclick="`window.open('https://twitch.tv/BrydenIsNotSmart', '_blank')`"
      >
        <img :src="twitch" class="icon" style="height: 30px; width: 55px; padding-top: 2px" />
      </button>
    </div>
  </div>
</template>
