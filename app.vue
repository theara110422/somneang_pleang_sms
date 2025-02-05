<template>
  <div class="flex min-h-screen">
    <SomneangpleangNavbar v-bind:class="{'hidden': route.name === 'login'}"/>
    <main class="flex-1 p-6 bg-[#f4f4f9]">
      <NuxtPage />
    </main>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

console.log('Current route:', route.name);
</script>


