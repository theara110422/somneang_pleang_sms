<template>
    <div class="bg-gray-100 p-24">
      <div class=" flex items-center justify-center bg-gray-100 pb-5">
        <div class="w-full bg-white rounded-lg shadow-md p-6">
        <h1 class="text-lg font-semibold mb-4">Teacher Name</h1>
        <hr class="mb-6" />
        <form >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Name -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Teacher</label>
                    <input
                    type="text"
                    id="name"
                    
                    placeholder="Enter name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <!-- Gender -->
                <div>
                    <label for="gender" class="block text-sm font-medium text-gray-700 mb-1">Class</label>
                    <select
                    id="gender"
                    
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="" disabled>Guitar</option>
                    <option value="Male">Piano</option>
                    <option value="Female">Dance</option>
                    <option value="Other">Ukulele</option>
                    <option value="Other">Drum</option>
                    </select>
                </div>
                <div class="flex justify-end w-40">
                    <button
                        type="submit"
                        class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Search
                    </button>
                </div>

            </div>
        </form>
        </div>
        </div>
      
      <div class="w-full bg-white rounded-lg shadow-md p-6">
        <h1 class="text-2xl font-semibold mb-4">Searching for: <span></span></h1>
        <div class="overflow-x-auto">
          <table class="table-auto w-full border-collapse border border-gray-200">
            <!-- Table Header -->
            <thead>
              <tr class="bg-gray-100">
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  ID
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Name
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Teacher
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Time
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Date
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Present
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Absent
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Permission
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Canceled
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Session
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Status
                </th>

              </tr>
            </thead>
            <!-- Table Body -->
            <tbody>
              <tr
                v-for="user in users"
                :key="user.id"
                class="hover:bg-gray-50 transition duration-150"
              >
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  {{ user.id }}
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  {{ user.name }}
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  {{ user.time }}
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  {{ user.teacher }}
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  {{ user.status }}
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  <!-- <button
                    class="border border-red-500 text-red-500 hover:bg-red-700 hover:text-white px-2 py-1 rounded ml-4"
                    @click="deletedStudent(index)"
                  >
                    Delete
                  </button> -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="users.length === 0">No students found</div>
      </div>
    </div>
  </template>
  <script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const users = [
    {
        id: 2,
        name: "Jane Smith",
        age: 32,
        gender: "Female",
        phone: "987-654-3210",
        registered: "2023-03-15",
        time: '4:00-5:00pm',
        teacher: 'Tola',
        date: 'Mon-Wed'
    }
  ]
  const findTeacher = (find) => {
    if(teachers.name == find){
        
    }

  }





  </script>
  