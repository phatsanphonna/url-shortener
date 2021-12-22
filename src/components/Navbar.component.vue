<template>
  <div class="root">
    <header class="header">
      <p class="title">ย่อลิ้งก์แบบรวดเร็ว</p>
      <p class="github">
        <a href="https://github.com/ssuniie" target="_blank">GitHub</a>
      </p>
    </header>
  </div>
</template>

<style scoped>
.root {
}

.root .header {
  height: 2rem;

  @apply container mx-auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  @apply text-blue-700 font-bold;
}

.github {
  @apply hover:underline;
}
</style>