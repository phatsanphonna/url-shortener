<template>
  <div class="layout">
    <Navbar class="disable-select" />
    <main class="main">
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Navbar from './Navbar.component.vue';
import Footer from './Footer.component.vue';
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;

  min-height: 100vh;
  padding: 20px;

  background-color: var(--primary-background-color);
  color: var(--primary-text-color);
}

.layout .main {
  @apply container mx-auto;
  @apply flex flex-col justify-center items-center;
}
</style>