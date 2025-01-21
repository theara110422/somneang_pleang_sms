<template>
    <div class="bg-white w-full shadow-md p-10 rounded-md flex justify-between items-center hover:bg-gray-100 hover:border-gray-300 border cursor-pointer">
        <img :src="img" alt="">
        <h1 class="text-2xl font-bold">{{ title }}</h1>
        <!-- <p>{{ description }}</p> -->
    </div>
</template>
<script setup>
defineProps({
    title: String,
    img : String,
    description: String
})
</script>