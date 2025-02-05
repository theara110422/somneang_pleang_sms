<template>
    <!-- <div v-if="loading" class="w-1/2 m-auto">
        <img src="@/assets/images/logo.png" alt="">
    </div> -->
    <div>
      <h2 class="text-red-500">Hello world</h2>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
router.push("/login");
// const loading = ref("");
// onMounted(() => {
//   loading.value = "loading";
//   setTimeout(() => {
//     loading.value = "";
//   }, 3000);
// });
</script>