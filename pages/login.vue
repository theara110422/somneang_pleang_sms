<template>
    <div class="flex justify-center items-center min-h-screen">
      <div class="flex w-[40%]">
        <!-- Left Section: Logo -->
        <div class="w-[70%] bg-gray-200 p-10 flex flex-col items-center justify-center rounded-l-lg">
          <img src="@/assets/images/logo.png" alt="Logo" class="w-full" />
        </div>
  
        <!-- Right Section: Login Form -->
        <div class="w-full p-12 border rounded-r-lg">
          <h2 class="text-center text-2xl font-semibold text-gray-800">Admin</h2>
          <form @submit.prevent="handleLogin">
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                <input type="email" v-model="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                <input type="password" v-model="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <button type="submit" class="w-full py-2 px-4 bg-primary text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</button>
        </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();       
  
  const handleLogin = () => {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    if(email.value === "admin@test.com" && password.value === "password123"){
      console.log("Login Success");
      router.push("/dashboard");dashboard
    }else{
      alert("Invalid email or password");
      email.value = "";
      password.value = "";
    }
  
    // Add your login logic here (e.g., API call)
  };
  </script>
  