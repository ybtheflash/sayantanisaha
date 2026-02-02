<script setup lang="ts">
import { ref } from 'vue'

const words = [
  "okayssss", "hiiiii", "tui amae bhengachis?", ":)", "whyyyyy", 
  "omkayyyy", "no sorry no thank you", "yes", "🌹", "🌻", 
  "nooooo", "dherrr", "Ohnooo", "Haaaannnn", "anyways", 
  "Tataaaa", "?", "Oooo"
]

// Generate random styles for each word - spread across the box, SLOWER animation
const wordItems = ref(words.map((text, index) => ({
  id: index,
  text,
  style: {
    top: `${10 + Math.random() * 80}%`,
    left: `${5 + Math.random() * 90}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${4 + Math.random() * 4}s`, /* Slower: 4s to 8s */
    transform: `rotate(${Math.random() * 20 - 10}deg)`,
    fontSize: `${1 + Math.random() * 0.5}rem`
  }
})))

</script>

<template>
  <section class="floating-words-wrapper">
     <div class="dark-box">
       <div 
        v-for="item in wordItems" 
        :key="item.id" 
        class="floating-word"
        :style="item.style"
      >
        {{ item.text }}
      </div>
     </div>
  </section>
</template>

<style scoped>
.floating-words-wrapper {
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}

.dark-box {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 350px;
  background: rgba(20, 5, 30, 0.9);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}

.floating-word {
  position: absolute;
  font-family: var(--font-body); /* Normal font, not cursive */
  font-weight: 400;
  color: #fff;
  opacity: 0;
  white-space: nowrap;
  animation: slowFade infinite ease-in-out;
  text-shadow: 0 2px 10px rgba(255,255,255,0.4);
}

@keyframes slowFade {
  0% { opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
