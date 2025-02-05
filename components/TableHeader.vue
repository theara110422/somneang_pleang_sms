<template>
    <thead>
      <tr class="bg-gray-100">
        <th v-for="header in headers" :key="header" class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600">{{ header }}</th>
      </tr>
    </thead>
  </template>
  
  <script setup>
  const props = defineProps({
    headers: {
      type: Array,
      required: true
    }
  });
  </script>
  