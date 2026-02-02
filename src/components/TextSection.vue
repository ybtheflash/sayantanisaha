<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  text: string
  subText?: string
}>()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
    } else {
      isVisible.value = false // Optional: Fade out when execution
    }
  }, {
    threshold: 0.3
  })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section ref="sectionRef" class="text-section" :class="{ visible: isVisible }">
    <div class="text-content">
      <h2 class="main-text">{{ text }}</h2>
      <p v-if="subText" class="sub-text">{{ subText }}</p>
    </div>
  </section>
</template>

<style scoped>
.text-section {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.2s ease-out, transform 1.2s ease-out;
}

.text-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.text-content {
  text-align: center;
  max-width: 800px;
}

.main-text {
  font-family: var(--font-cursive);
  font-size: 4rem;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.sub-text {
  font-family: var(--font-body);
  font-size: 1.5rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .main-text {
    font-size: 3rem;
  }
  .sub-text {
    font-size: 1.2rem;
  }
}
</style>
