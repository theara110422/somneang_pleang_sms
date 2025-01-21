<template>
  <div class="bg-gray-100 p-24">
    <button
      class="bg-primary text-white px-2 py-1 rounded mb-4"
      @click="addUser"
    >
      Add Student
    </button>
    <div class="w-full bg-white rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-semibold mb-4">Students List</h1>
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
                Age
              </th>
              <th
                class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
              >
                Gender
              </th>
              <th
                class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
              >
                Phone
              </th>
              <th
                class="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-600"
              >
                Registered
              </th>
              <th
                class="px-4 py-2 border border-gray-200 text-center text-sm font-medium text-gray-600"
              >
                Action
              </th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody>
            <tr
              v-for="user in students"
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
                {{ user.age }}
              </td>
              <td
                class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
              >
                {{ user.gender }}
              </td>
              <td
                class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
              >
                {{ user.phone }}
              </td>
              <td
                class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
              >
                {{ user.dateRegister }}
              </td>
              <td
                class="px-4 py-2 border border-gray-200 text-sm text-gray-700"
              >
                <button
                  class="border border-red-500 text-red-500 hover:bg-red-700 hover:text-white px-2 py-1 rounded ml-4"
                  @click="deletedStudent(index)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="students.length === 0">No students add</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const users = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    gender: "Male",
    phone: "123-456-7890",
    registered: "2023-01-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    gender: "Female",
    phone: "987-654-3210",
    registered: "2023-03-15",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 45,
    gender: "Male",
    phone: "456-789-1234",
    registered: "2023-07-20",
  },
];
// const handleStudent = (data) => {
//   console.log('Handle student',data);
// };
const students = ref([]);
const deletedStudent = (index) => {
  if (confirm("Are you sure you want to delete this student?")) {
    students.value.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students.value));
    console.log("Deleted student", index);
  }
};
const addUser = () => {
    router.push('/students/new');
}
onMounted(() => {
  const storeStudents = JSON.parse(localStorage.getItem("students"));
  if (storeStudents) {
    // students.value = storeStudents;
    students.value = storeStudents.sort((a, b) => a.id - b.id);
  }
});
</script>
