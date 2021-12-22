<template>
  <div class="home">
    <Layout class="layout">
      <Header />
      <form @submit.prevent="makeShortenUrl">
        <input type="url" v-model="url" class="url" placeholder="https://youtu.be/dQw4w9WgXcQ" />
        <button type="submit" class="btn-shorten">ย่อลิ้งค์</button>
      </form>

      <div class="shorten-url" v-if="shortenUrl">
        <h3>ลิ้งค์ถูกย่อแล้ว</h3>
        <a :href='shortenUrlRedirect' target="_blank">
          <p>{{ shortenUrl }}</p>
        </a>
      </div>
    </Layout>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { insertShortenUrl } from '@/backend/database';

import Layout from '@/components/Layout.component.vue';
import Header from '@/components/Header.component.vue';

const shortenUrl = ref()
const shortenUrlRedirect = ref()
const url = ref()

const randomString = () => (Math.random() + 1).toString(36).substring(6);

const makeShortenUrl = async () => {
  if (!url.value) return

  const shorten_string = randomString()

  const { error } = await insertShortenUrl({ shorten_string, url: url.value })
  if (error) console.error(error)

  shortenUrl.value = `https://quick-url-shortener.vercel.app/${shorten_string}`
  shortenUrlRedirect.value = `${process.env.BASE_URL}${shorten_string}`
  url.value = ''
}
</script>

<style scoped>
form {
  min-width: 100%;
  @apply flex flex-col lg:flex-row justify-center items-center;
  @apply mx-auto;
}

form > * {
  @apply m-2;
  @apply rounded-md;
}
.url {
  width: clamp(80%, 65%, 60%);
  height: 3rem;
  padding: 1em;
  @apply border-2 border-black;
}

.btn-shorten {
  height: 3rem;
  width: 5rem;

  @apply bg-blue-600 hover:bg-blue-400 transition-all;
  @apply text-white;
  @apply w-4/5 lg:w-20;
}

.shorten-url {
  width: clamp(80%, 65%, 60%);
  height: clamp(8rem, 10rem, 15rem);

  @apply mt-4;
  @apply flex flex-col justify-center items-center;
  @apply bg-green-600 rounded-md;
}

.shorten-url > * {
  @apply my-2;
}

.shorten-url h3 {
  @apply text-2xl text-white underline font-bold;
}

.shorten-url a {
  @apply text-sm md:text-base text-white hover:underline text-center;
}
</style>
