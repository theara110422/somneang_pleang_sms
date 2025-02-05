<template>
    <tr class="hover:bg-gray-50 transition duration-150">
      <td v-for="(value, index) in row" :key="index" class="px-4 py-2 border border-gray-200 text-sm text-gray-700">{{ value }}</td>
    </tr>
  </template>
  
  <script setup>
  const props = defineProps({
    row: {
      type: Object,
      required: true
    }
  });
  </script>
  