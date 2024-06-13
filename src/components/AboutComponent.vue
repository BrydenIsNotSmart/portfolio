<script setup lang="ts">
import { computed } from 'vue'

const dob = new Date(2009, 0, 14)

const calculateAge = (dob: Date) => {
  const diff = Date.now() - dob.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const age = computed(() => calculateAge(dob))
</script>

<template>
  <div class="about">
    <h1><b>About Me</b></h1>
    <h2>
      I go by BrydenIsNotSmart online and I'm currently {{ age }} years old. I like to code in my
      free time, my main project is currently
      <a href="https://strafe.chat" target="_blank" rel="noopener">Strafe Chat</a>. I also like to
      play games like Valorant, PAYDAY 3, RDR2, GTA5 and more.
    </h2>
    <div>
      <button title="X" :onclick="`window.open('https://x.com/brydencalaway', '_blank')`">
        <font-awesome-icon :icon="['fab', 'x-twitter']" style="height: 25px" />
      </button>
      <button
        title="GitHub"
        :onclick="`window.open('https://github.com/brydenisnotsmart', '_blank')`"
      >
        <font-awesome-icon :icon="['fab', 'github']" style="height: 25px" />
      </button>
      <button
        title="Steam"
        :onclick="`window.open('https://steamcommunity.com/id/BrydenIsNotSmart/', '_blank')`"
      >
        <font-awesome-icon :icon="['fab', 'steam']" style="height: 25px" />
      </button>
      <button
        title="Spotify"
        :onclick="`window.open('https://open.spotify.com/user/be9w9l70928f7rn0gpvgthhqb/', '_blank')`"
      >
        <font-awesome-icon :icon="['fab', 'spotify']" style="height: 25px" />
      </button>
      <button title="Donate" :onclick="`window.open('https://ko-fi.com/bryden', '_blank')`">
        <font-awesome-icon :icon="['fas', 'circle-dollar-to-slot']" style="height: 25px" />
      </button>
    </div>
  </div>
</template>
