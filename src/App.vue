<script setup lang="ts">
import { ref } from 'vue'
import HeartLoader from '@/components/HeartLoader.vue'
import HeroSection from '@/components/HeroSection.vue'
import TextSection from '@/components/TextSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import FloatingWords from '@/components/FloatingWords.vue'
import TheFooter from '@/components/TheFooter.vue'

const isLoading = ref(true)

const onLoaderFinish = () => {
  isLoading.value = false
}
</script>

<template>
  <div class="app-container">
    <transition name="fade">
      <HeartLoader v-if="isLoading" :duration="2500" @finish="onLoaderFinish" />
    </transition>

    <main v-if="!isLoading" class="main-content">
      <HeroSection />
      
      <TextSection 
        text="This is the woman I love. I dream of." 
      />
      
      <TextSection 
        text="Absolute 10 / 10 baddie" 
      />
      
      <GallerySection />
      
      <FloatingWords />
      
      <TheFooter />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-content {
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}
</style>
