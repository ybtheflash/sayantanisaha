<script setup lang="ts">
import { ref } from 'vue'

const galleryImagesModules = import.meta.glob('/public/_sayantani_saha_/*.{jpg,jpeg,png,webp,heic}', { eager: true, as: 'url' })
const whiteBorderedImagesModules = import.meta.glob('/public/white_bordered/*.{jpg,jpeg,png,webp,heic}', { eager: true, as: 'url' })

const extractUrls = (modules: Record<string, string>) => {
  return Object.values(modules)
}

const galleryImages = ref<string[]>(extractUrls(galleryImagesModules))
const whiteBorderedImages = ref<string[]>(extractUrls(whiteBorderedImagesModules))

// Combine or keep separate? User said "many pix" scrolling.
// Let's scroll the main gallery. For smooth infinite scroll we often duplicate the list.
const scrollImages = ref([...galleryImages.value, ...galleryImages.value]) 
</script>

<template>
  <div class="gallery-wrapper">
    <!-- Horizontal Scrolling Section -->
    <section class="scroll-container">
      <div class="scroll-track">
        <div 
          v-for="(img, index) in scrollImages" 
          :key="'scroll-'+index" 
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

    <!-- White Bordered Gallery (Keep as grid or unique layout? User asked for 'all' to scroll, maybe keep this special) -->
    <!-- Applying scroll effect here too for consistency if requested, but grid looks nice for 1:1. -->
    <!-- User said "show all pics like a gallery... then keep a space... then keep her name" -->
    <!-- I will keep the white bordered ones as a grid or secondary scroll? -->
    <!-- "scroll down and write... baddie... below show all pics" -->
    <!-- I'll keep the white-bordered special grid as a feature, assuming "all pics" referred to the bulk folder -->
    
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
  overflow: hidden; /* Hide scrollbar for the page, track handles internal overflow */
}

/* Horizontal Auto-Scroll Logic */
.scroll-container {
  width: 100%;
  overflow-x: auto; /* Allow touch swipe */
  padding: 2rem 0;
  -webkit-overflow-scrolling: touch;
  /* Hide scrollbar */
  scrollbar-width: none; 
}
.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-track {
  display: flex;
  gap: 1rem;
  width: max-content; /* Ensure it fits all content */
  animation: scrollLeft 60s linear infinite; /* Adjust speed as needed */
  padding-left: 2rem;
}

/* Pause on hover/touch to let user swipe manually */
.scroll-track:hover, .scroll-track:active {
  animation-play-state: paused;
}

.scroll-item {
  flex: 0 0 auto;
  width: 300px; /* Fixed width for consistency */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.scroll-img {
  width: 100%;
  height: 400px; /* Fixed height for uniform strip */
  object-fit: cover;
  display: block;
}

@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* Move half way because list is doubled */
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

/* White Bordered Grid */
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
  
  /* On mobile, maybe slow down animation or rely more on swipe */
}
</style>
