<script setup lang="ts">
// No script needed
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="love-note">With Love &lt;3 (ATOTAAAAAA) by Her One and Only, Yubaraj.</p>
      <p class="sub-note">ts pmo icl or not in 2026?</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(to top, rgba(0,0,0,0.05), transparent);
}

.love-note {
  font-family: var(--font-body); /* Normal font */
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: white;
}

.sub-note {
  font-family: var(--font-body);
  font-size: 1rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .love-note {
    font-size: 2rem;
  }
}
</style>
