<script setup>
const users = [
  { id: 1, name: 'John Doe', age: 28, gender: 'Male', phone: '123-456-7890', registered: '2023-01-01' },
  { id: 2, name: 'Jane Smith', age: 32, gender: 'Female', phone: '987-654-3210', registered: '2023-03-15' },
  { id: 3, name: 'Bob Johnson', age: 45, gender: 'Male', phone: '456-789-1234', registered: '2023-07-20' },
];
</script>

<template>
  <div class=" flex items-center justify-center bg-gray-100 p-28">
    <div class="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-semibold mb-4">User Table</h1>
      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border border-gray-200">
          <!-- Table Header -->
          <thead>
            <tr class="bg-gray-100">
              <th class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600">ID</th>
              <th class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600">Name</th>
              <th class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600">Age</th>
              <th class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600">Gender</th>
              <th class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600">Phone</th>
              <th class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600">Registered</th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody>
            <tr
              v-for="user in users"
              :key="user.id"
              class="hover:bg-gray-50 transition duration-150"
            >
              <td class="px-4 py-2 border border-gray-200 text-sm text-gray-700">{{ user.id }}</td>
              <td class="px-4 py-2 border border-gray-200 text-sm text-gray-700">{{ user.name }}</td>
              <td class="px-4 py-2 border border-gray-200 text-sm text-gray-700">{{ user.age }}</td>
              <td class="px-4 py-2 border border-gray-200 text-sm text-gray-700">{{ user.gender }}</td>
              <td class="px-4 py-2 border border-gray-200 text-sm text-gray-700">{{ user.phone }}</td>
              <td class="px-4 py-2 border border-gray-200 text-sm text-gray-700">{{ user.registered }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
