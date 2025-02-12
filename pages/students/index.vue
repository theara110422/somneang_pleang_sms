<template>
  <div class="bg-gray-100">
    <button
      class="bg-primary text-white px-2 py-1 rounded mb-4"
      @click="addUser"
    >
      Add Student
    </button>
    <div class="w-full bg-white rounded-lg shadow-md p-6">
      <!-- {{ enrollments }} -->
      <h1 class="text-2xl font-semibold mb-4">Students List</h1>
      <div class="card">
        <DataTable :value="enrollments" tableStyle="min-width: 50rem">
          <Column field="" header="ID">
            <template #body="slotProps">
              {{ slotProps.index + 1 }}
              <!-- {{ slotProps.data.student.user.first_name }} -->
            </template>
          </Column>
          <Column field="name" header="Student Name">
            <template #body="slotProps">
              {{ slotProps.data.student.user.first_name }}
              {{ slotProps.data.student.user.last_name }}
            </template>
          </Column>
          <Column field="phone" header="Phone Number">
            <template #body="slotProps">{{
              slotProps.data.student.user?.phone_number
            }}</template>
          </Column>
          <Column field="dateRegister" header="Date Register">
            <template #body="slotProps">{{ slotProps.data.dateRegister }}</template>
          </Column>
          <Column field="" header="Class">
            <template #body="slotProps">{{ slotProps.data.class.name }} {{ slotProps.data.class.level }}</template>
          </Column>
          <Column field="" header="Teacher Name">
            <template #body="slotProps">{{ slotProps.data.teacher.name }}</template>
          </Column>
          <Column field="" header="Start Date">
            <template #body="slotProps">{{ slotProps.data.startDate }}</template></Column>
          <Column field="" header="End Date">
            <template #body="slotProps">{{ slotProps.data.endDate }}</template></Column>
          <Column field="" header="Tuition Fee"></Column>
          <!-- <Column field="" header="Empress By"></Column> -->
          <Column field="" header="Action">
            <template #body>
              <div>
                <button
                  class="border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white px-2 py-1 rounded"
                  @click="deletedStudent(index)"
                >
                  Edit
                </button>
                <button
                  class="border border-red-500 text-red-500 hover:bg-red-700 hover:text-white px-2 py-1 rounded"
                  @click="deletedStudent(index)"
                >
                  Delete
                </button>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional


const router = useRouter();
const students = ref([]);
const enrollments = ref([]);
const itemsPerPage = 10; // Number of students per page
const currentPage = ref(1); // Current page number


const fetchDataApi = async () => {
  try {
    const data = await useFetch(`http://localhost:3006/api/enrollment`);
    // students.value = data.data.value;
    console.log(`This is Data : ${data}`)
    enrollments.value = data.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Paginated students for the current page
const paginatedStudents = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return students.value.slice(startIndex, endIndex);
});

const deletedStudent = (index) => {
  if (confirm("Are you sure you want to delete this student?")) {
    students.value.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students.value));
  }
};
const addUser = () => {
  router.push("/students/new");
};

// Change current page
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
};

// Calculate total number of pages
const totalPages = computed(() => {
  return Math.ceil(students.value.length / itemsPerPage);
});

onMounted(() => {
  fetchDataApi();
});
</script>

<style>
.p-datatable-header-cell {
  background-color: red;

  padding: 10px;
}
.p-datatable-tbody-cell {
  padding: 10px;
}
</style>
