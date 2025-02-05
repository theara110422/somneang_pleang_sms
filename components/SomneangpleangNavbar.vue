<template>
  <nav class="bg-[#fffff] w-56">
    <div class="w-36 m-auto">
      <img class="w-full" src="@/assets/images/logo.png" alt="" />
    </div>
    <ul class="text-left text-text-color space-y-6">
      <li
        class="flex justify-center items-center space-x-6 p-2"
        :class="{ 'active-navbar': route.name === 'dashboard' }"
      >
        <img src="@/assets/images/icons/dashboard_icon.png" alt="" />
        <nuxtLink class="w-20" href="/dashboard">Dashobard</nuxtLink>
      </li>
      <li
        class="flex justify-center items-center space-x-6 p-2"
        :class="{ 'active-navbar': route.name === 'students' }"
      >
        <img src="@/assets/images/icons/user_icon.png" alt="" />
        <nuxtLink class="w-20" href="/students">Students</nuxtLink>
      </li>
      <li
        class="flex justify-center items-center space-x-6 p-2"
        :class="{ 'active-navbar': route.name === 'attendance' }"
      >
        <img src="@/assets/images/icons/attendance.png" alt="" />
        <nuxtLink class="w-20" href="/attendance">Attendance</nuxtLink>
      </li>
      <li class="flex justify-center items-center space-x-6">
        <img class="w-8" src="@/assets/images/icons/logout.png" alt="">
        
        <nuxtLink class="w-20" href="/login">Logout</nuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log("Current route:", route.name);
</script>
<style>
.active-navbar {
  background-color: #f4f4f9;
  color: #000;
}
</style>
