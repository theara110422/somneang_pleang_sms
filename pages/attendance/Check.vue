<template>
    <div class="bg-gray-100 p-24">
      <div class=" flex items-center justify-center bg-gray-100 pb-5">
        <div class="w-full bg-white rounded-lg shadow-md p-6">
        <h1 class="text-lg font-semibold mb-4">Check Attendance</h1>
        <hr class="mb-6" />
        <form >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Name -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Teacher</label>
                    <input
                    type="​text"
                    id="name"
                    
                    placeholder="Enter name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <!-- Gender -->
                <div>
                    <label for="gender" class="block text-sm font-medium text-gray-700 mb-1">Class</label>
                    <input
                      type="date"
                      id="date-register"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
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
                  Student
                </th>
                <th
                  class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
                >
                  Action
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
                  {{ user.teacher }}
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  <select name="" id="time"
                    class="w-100 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">8:00-9:00am</option>
                    <option value="">9:00-10:00am</option>
                    <option value="">10:00-11:00am</option>
                    <option value="">11:00-12:00am</option>
                    <option value="">1:00-2:00pm</option>
                    <option value="">2:00-3:00pm</option>
                    <option value="">3:00-4:00pm</option>
                    <option value="">4:00-5:00pm</option>
                    <option value="">5:00-6:00pm</option>
                    <option value="">6:00-7:00pm</option>
                    <option value="">7:00-8:00pm</option>
                  </select>
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  <input
                    type="date"
                    id="date-register"
                    class="w-100 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  <select
                    id="gender"
                    class="w-100 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Absent</option>
                    <option value="Male">Present</option>
                    <option value="Female">Permission</option>
                    <option value="Other">Canceled</option>
                  </select>
                </td>
                <td
                  class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
                >
                  Viewed
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-end w-40">
            <button
                type="submit"
                class="mt-6 m-1 w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Cancel
            </button>
            <button
                type="submit"
                class="mt-6 m-1 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Save
            </button>
        </div>
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
  