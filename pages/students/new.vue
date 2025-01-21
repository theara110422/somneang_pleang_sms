<template>
  <div class=" flex items-center justify-center bg-gray-100 p-24">
    <div class="w-full bg-white rounded-lg shadow-md p-6">
      <h1 class="text-lg font-semibold mb-4">Customer Information</h1>
      <hr class="mb-6" />
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Enter name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Age -->
          <div>
            <label for="age" class="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              id="age"
              v-model="formData.age"
              placeholder="Enter age"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Gender -->
          <div>
            <label for="gender" class="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              id="gender"
              v-model="formData.gender"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <!-- Phone Number -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              id="phone"
              v-model="formData.phone"
              placeholder="Enter phone number"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Date Register -->
          <div>
            <label for="date-register" class="block text-sm font-medium text-gray-700 mb-1">Date Register</label>
            <input
              type="date"
              id="date-register"
              v-model="formData.dateRegister"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Empress By -->
          <div>
            <label for="empress-by" class="block text-sm font-medium text-gray-700 mb-1">Empress By</label>
            <input
              type="text"
              id="empress-by"
              v-model="formData.empressBy"
              placeholder="Enter empress by"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div class="flex justify-end w-40">
          <button
            type="submit"
            class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const formData = reactive({
  id : Math.floor(Math.random() * 1000),
  name : '',
  age : '',
  gender : '',
  phone : '',
  dateRegister : '',
  empressBy : ''
})

const handleSubmit = () => {
  if(!formData.name.trim()) return alert('Please enter name');

  const storeStudent = JSON.parse(localStorage.getItem('students')) || [];
  storeStudent.push(formData);
  localStorage.setItem('students', JSON.stringify(storeStudent));
  router.push('/students');
};
</script>
