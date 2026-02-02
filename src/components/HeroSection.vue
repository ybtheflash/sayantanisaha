<script setup lang="ts">
// Using a high-quality image from the gallery as the DP
const dpImage = '/dp.jpg'
</script>

<template>
  <section class="hero-section">
    <div class="content-wrapper">
      <div class="text-container">
        <h1 class="title">Tani</h1>
        <div class="heart-icon-wrapper">
           <!-- SVG Heart converted to white as requested -->
           <svg class="heart-svg" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
           </svg>
        </div>
      </div>
      
      <div class="dp-container">
        <div class="dp-circle">
          <img :src="dpImage" alt="Sayantani Saha" class="dp-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg);
  padding: 2rem;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
}

.text-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.title {
  font-family: var(--font-cursive);
  font-size: 8rem;
  color: white;
  line-height: 1;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}

.heart-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-svg {
  width: 5rem;
  height: 5rem;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
  animation: gentle-beat 2s infinite ease-in-out;
}

.dp-container {
  flex-shrink: 0;
}

.dp-circle {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.dp-circle:hover {
  transform: scale(1.02);
}

.dp-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes gentle-beat {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column-reverse; /* DP on top, Name below */
    gap: 2rem;
    text-align: center;
  }

  .text-container {
    flex-direction: row;
    justify-content: center;
  }

  .title {
    font-size: 5rem;
  }

  .heart-svg {
    width: 3rem;
    height: 3rem;
  }

  .dp-circle {
    width: 250px;
    height: 250px;
  }
}
</style>
