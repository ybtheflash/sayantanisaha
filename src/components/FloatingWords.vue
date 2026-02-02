<script setup lang="ts">
import { ref } from 'vue'

const words = [
  "okayssss", "hiiiii", "tui amae bhengachis?", ":)", "whyyyyy", 
  "omkayyyy", "no sorry no thank you", "yes", "🌹", "🌻", 
  "nooooo", "dherrr", "Ohnooo", "Haaaannnn", "anyways", 
  "Tataaaa", "?", "Oooo"
]

// Generate random styles for each word
const wordItems = ref(words.map((text, index) => ({
  id: index,
  text,
  style: {
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
    transform: `rotate(${Math.random() * 40 - 20}deg)`,
    fontSize: `${1 + Math.random() * 1.5}rem`
  }
})))

</script>

<template>
  <section class="floating-words-container">
    <div 
      v-for="item in wordItems" 
      :key="item.id" 
      class="floating-word"
      :style="item.style"
    >
      {{ item.text }}
    </div>
  </section>
</template>

<style scoped>
.floating-words-container {
  position: relative;
  width: 100%;
  height: 80vh; /* Takes up a good chunk of screen */
  overflow: hidden;
  /* Soft blurry background zone suggestion */
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
}

.floating-word {
  position: absolute;
  font-family: var(--font-cursive); /* Or body font, user didn't specify but "random words" fits handwriting */
  color: white; /* or slight off-white */
  opacity: 0;
  white-space: nowrap;
  animation: floatFade infinite ease-in-out;
  text-shadow: 0 0 5px rgba(255,255,255,0.5);
  filter: blur(0.5px);
}

@keyframes floatFade {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
    filter: blur(4px);
  }
  20% {
    opacity: 0.8;
    filter: blur(0px);
  }
  50% {
    transform: translateY(-10px) scale(1.1);
  }
  80% {
    opacity: 0.8;
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px) scale(1);
    filter: blur(4px);
  }
}
</style>
