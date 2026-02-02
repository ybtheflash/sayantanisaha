<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const galleryImagesModules = import.meta.glob('/public/_sayantani_saha_/*.{jpg,jpeg,png,webp,heic}', { eager: true, as: 'url' })
const whiteBorderedImagesModules = import.meta.glob('/public/white_bordered/*.{jpg,jpeg,png,webp,heic}', { eager: true, as: 'url' })

const extractUrls = (modules: Record<string, string>) => {
  return Object.values(modules)
}

const galleryImages = ref<string[]>(extractUrls(galleryImagesModules))
const whiteBorderedImages = ref<string[]>(extractUrls(whiteBorderedImagesModules))

// Duplicate for seamless loop
const allImages = ref([...galleryImages.value, ...galleryImages.value])

const scrollContainer = ref<HTMLElement | null>(null)
let animationId: number | null = null
let isPaused = false

const startAutoScroll = () => {
  const scrollSpeed = 0.6;
  const animate = () => {
    if (scrollContainer.value && !isPaused) {
      if (scrollContainer.value.scrollLeft >= (scrollContainer.value.scrollWidth / 2)) {
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
    <!-- Masonry Scrolling Section -->
    <section 
      class="scroll-container" 
      ref="scrollContainer"
      @touchstart="pauseScroll"
      @touchend="resumeScroll"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
    >
      <div class="masonry-scroll">
        <div v-for="(img, index) in allImages" :key="'m-'+index" class="masonry-item">
          <img :src="img" loading="lazy" />
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
  overflow: hidden;
}

.scroll-container {
  width: 100%;
  height: 650px; /* Fixed viewport height */
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.masonry-scroll {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  gap: 6px;
  padding: 6px;
  width: max-content;
  align-content: flex-start;
}

.masonry-item {
  flex: 0 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.masonry-item img {
  height: 200px; /* Base height, width auto for natural aspect ratio */
  width: auto;
  display: block;
  object-fit: cover;
}

/* Vary heights for masonry effect */
.masonry-item:nth-child(3n) img {
  height: 220px;
}

.masonry-item:nth-child(5n) img {
  height: 180px;
}

.masonry-item:nth-child(7n) img {
  height: 240px;
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
  .scroll-container {
    height: 500px;
  }
  .masonry-item img {
    height: 150px;
  }
  .masonry-item:nth-child(3n) img {
    height: 170px;
  }
  .masonry-item:nth-child(5n) img {
    height: 130px;
  }
  .name-split h2 {
    font-size: 4rem;
  }
}
</style>
