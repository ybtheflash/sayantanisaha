<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(true)

const props = defineProps<{
  duration?: number
}>()

const emit = defineEmits(['finish'])

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
    setTimeout(() => {
      emit('finish')
    }, 1000) // Allow fade out transition
  }, props.duration || 2000)
})
</script>

<template>
  <div v-if="isVisible" class="heart-loader">
    <div class="heart-container">
      <img src="/heart_loader.webp" alt="Loading..." class="heart-icon" />
    </div>
  </div>
</template>

<style scoped>
.heart-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 1s ease-out;
}

.heart-loader.v-leave-active {
  opacity: 0;
}

.heart-icon {
  width: 400px; /* Much larger */
  height: auto;
  animation: heartbeat 1.5s infinite ease-in-out;
}

@keyframes heartbeat {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}
</style>
