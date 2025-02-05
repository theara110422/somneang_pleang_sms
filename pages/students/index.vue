<template>
  <div class="bg-gray-100">
    <button
      class="bg-primary text-white px-2 py-1 rounded mb-4"
      @click="addUser"
    >
      Add Student
    </button>
    <div class="w-full bg-white rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-semibold mb-4">Students List</h1>
      <div v-if="students.length === 0">No students added</div>


      <!-- new Table -->
      <!-- <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border border-gray-200">
          <TableHeader :headers="headers" />
          <tbody>
            <TableRow
              v-for="student in students"
              :key="student.id"
              :row="student"
            />
          </tbody>
        </table>
      </div> -->
      <!-- table primevue -->
      <div class="card">
        <DataTable :value="students" tableStyle="min-width: 50rem">
          <Column field="" header="ID">
            <template #body="slotProps">
              {{slotProps.index + 1}}
            </template>
          </Column>
          <Column field="name" header="Student Name"></Column>
          <Column field="phone" header="Phone Number"></Column>
          <Column field="dateRegister" header="Date Register"></Column>
          <Column field="dateRegister" header="Class"></Column>
          <Column field="dateRegister" header="Teacher Name"></Column>
          <Column field="dateRegister" header="Start Date"></Column>
          <Column field="dateRegister" header="End Date"></Column>
          <Column field="dateRegister" header="Tuition Fee"></Column>
          <Column field="dateRegister" header="Empress By"></Column>
          <Column field="dateRegister" header="Action">
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
              <!-- Pagination Controls -->
      <div class="flex justify-center space-x-4 mt-4">
        <button
          @click="changePage(currentPage - 1)"
          :disabled="currentPage <= 1"
          class="bg-gray-300 px-4 py-2 rounded"
        >
          Prev
        </button>
        <div class="flex items-center">
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
        </div>
        <button
          @click="changePage(currentPage + 1)"
          :disabled="currentPage >= totalPages"
          class="bg-gray-300 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

const router = useRouter();
const students = ref([]);
const itemsPerPage = 10; // Number of students per page
const currentPage = ref(1); // Current page number
const headers = [
  "ID",
  "Student Name",
  "Phone Number",
  "Date Register",
  "Teacher Name",
  "Start Date",
  "End Date",
  "Class",
];
// Calculate total number of pages
const totalPages = computed(() => {
  return Math.ceil(students.value.length / itemsPerPage);
});

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

onMounted(() => {
  const storeStudents = JSON.parse(localStorage.getItem("students"));
  if (storeStudents) {
    students.value = storeStudents.sort((a, b) => a.id - b.id);
  }
});
</script>

<style>
.p-datatable-header-cell{
  background-color: red;

  padding: 10px;
  
}
.p-datatable-tbody-cell{
  padding: 10px;
}
</style>
