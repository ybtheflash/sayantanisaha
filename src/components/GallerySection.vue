<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const galleryImagesModules = import.meta.glob('/public/_sayantani_saha_/*.{jpg,jpeg,png,webp,heic}', { eager: true, as: 'url' })
const whiteBorderedImagesModules = import.meta.glob('/public/white_bordered/*.{jpg,jpeg,png,webp,heic}', { eager: true, as: 'url' })

const extractUrls = (modules: Record<string, string>) => {
  return Object.values(modules)
}

const galleryImages = ref<string[]>(extractUrls(galleryImagesModules))
const whiteBorderedImages = ref<string[]>(extractUrls(whiteBorderedImagesModules))

const scrollContainer = ref<HTMLElement | null>(null)
let animationId: number | null = null
let isPaused = false

const startAutoScroll = () => {
  const scrollSpeed = 1; // Pixels per frame (adjust for speed)
  
  const animate = () => {
    if (scrollContainer.value && !isPaused) {
      if (scrollContainer.value.scrollLeft >= (scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth)) {
        // Reset to start for infinite feel (rough loop, better with duplicated content but simple is safer for native scroll)
        // For truly seamless, we can duplicate content, but let's try simple rewind or just partial duplicate
        scrollContainer.value.scrollLeft = 0; 
      } else {
        scrollContainer.value.scrollLeft += scrollSpeed;
      }
    }
    animationId = requestAnimationFrame(animate)
  }
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
})

const pauseScroll = () => { isPaused = true }
const resumeScroll = () => { isPaused = false }

</script>

<template>
  <div class="gallery-wrapper">
    <!-- Horizontal Scrolling Section -->
    <!-- Added event listeners to pause on interaction -->
    <section 
      class="scroll-container" 
      ref="scrollContainer"
      @touchstart="pauseScroll"
      @touchend="resumeScroll"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
    >
      <div class="scroll-track">
        <!-- Duplicate main list once to help with longer scrolling before reset -->
        <div 
          v-for="(img, index) in galleryImages" 
          :key="'scroll-1-'+index" 
          class="scroll-item"
        >
          <img :src="img" loading="lazy" class="scroll-img" />
        </div>
        <div 
          v-for="(img, index) in galleryImages" 
          :key="'scroll-2-'+index" 
          class="scroll-item"
        >
          <img :src="img" loading="lazy" class="scroll-img" />
        </div>
      </div>
    </section>

    <!-- Name Splitter -->
    <div class="name-split">
      <h2>This is Sayantani Saha</h2>
    </div>

    <!-- White Bordered Gallery -->
    <section class="gallery-section white-bordered-gallery" v-if="whiteBorderedImages.length > 0">
      <div class="instagram-grid">
         <div 
          v-for="(img, index) in whiteBorderedImages" 
          :key="'wb-'+index" 
          class="insta-item"
        >
          <div class="white-border-frame">
             <img :src="img" loading="lazy" class="insta-img" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gallery-wrapper {
  width: 100%;
  padding-bottom: 4rem;
}

.scroll-container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  padding: 2rem 0;
  -webkit-overflow-scrolling: touch; /* Momentum scroll */
  scrollbar-width: none; 
  cursor: grab;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-track {
  display: inline-flex;
  gap: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.scroll-item {
  flex: 0 0 auto;
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: inline-block;
}

.scroll-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.name-split {
  padding: 6rem 2rem;
  text-align: center;
}

.name-split h2 {
  font-family: var(--font-cursive);
  font-size: 6rem;
  color: var(--color-text);
}

.instagram-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.insta-item {
  aspect-ratio: 1;
}

.white-border-frame {
  background: white;
  padding: 15px;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.insta-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

@media (max-width: 768px) {
  .scroll-item {
    width: 250px;
  }
  .scroll-img {
    height: 350px;
  }
  .name-split h2 {
    font-size: 4rem;
  }
}
</style>
