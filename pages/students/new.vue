<template>
  <div class=" flex items-center justify-center bg-gray-100 p-24">
    <div class="w-full bg-white rounded-lg shadow-md p-6">
      <!-- {{ teachers }} -->
      <form @submit.prevent="handleSubmit">
        <h1 class="text-lg font-semibold mb-4">Customer Information</h1>
        <hr class="mb-6" />
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
          <!-- Register date -->
          <div>
              <label for="register date" class="block text-sm font-medium text-gray-700 mb-1">Register Date</label>
            <input
              type="date"
              id="date-register"
              v-model="formData.dateRegister"
              class=" w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
        </div>
        <h1 class="text-lg font-semibold mb-4 mt-4">Class Information</h1>
        <hr class="mb-6" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- {{ allClass }} -->
          <!-- {{ formData.class }} -->
          <!-- Class -->
          <div>
            <label for="TypeOfclass" class="block text-sm font-medium text-gray-700 mb-1">Class</label>
            <select
              id="class"
              v-model="formData.class"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select class</option>
              <option v-for="option in allClass" :key="option.id" :value="option.id">{{ option.name }} {{ option.level }}</option>
              <!-- <option value="Guitar">Guitar</option>
              <option value="Pinao">Pinao</option>
              <option value="Other">Other</option> -->
            </select>
          </div>
          <!-- class day -->
          <div>
            <label for="classDay" class="block text-sm font-medium text-gray-700 mb-1">Class Day</label>
            <input
              type="text"
              id="name"
              v-model="formData.classDay"
              placeholder="Class Day"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <!-- time -->
          <div>
            <label for="time" class="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input
              type="text"
              id="time"
              v-model="formData.time"
              placeholder="Time"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <!-- Teacher Name -->
           <!-- {{ formData.teacher }} -->
          <div>
            <label for="Teacher" class="block text-sm font-medium text-gray-700 mb-1">Teacher</label>
            <select
              id="class"
              v-model="formData.teacher"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select Teacher</option>
              <option v-for="option in teachers" :key="option.id" :value="option.id">{{ option.name }}</option>
              <!-- <option value="Guitar">Mo MO</option>
              <option value="Pinao">Ri Ri</option>
              <option value="Other">Other</option> -->
            </select>
          </div>
          <!-- start date -->
          <div class="">
              <label for="startDate" class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                id="start-date"
                v-model="formData.startDate"
                class=" w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
         
          </div>
          <!-- end date -->
          <div>
              <label for="endDate" class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              id="end-date"
              v-model="formData.endDate"
              class=" w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
          <!-- Class Period -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Class Period</label>
            <input
              type="text"
              id="name"
              v-model="formData.classPeriod"
              placeholder="Enter name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <!-- Tuition Fee -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Tuition Fee</label>
            <input
              type="number"
              id="name"
              v-model="formData.tuitionFee"
              placeholder="USD"
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
import axios from 'axios';

const router = useRouter();
const teachers = ref([]);
const allClass = ref([]);
const classDay = ref([{}])

const formData = reactive({
  name : '',
  age : '',
  gender : '',
  phone : '',
  class:'',
  classDay:'',
  time: '',
  teacher: '',
  startDate: '',
  endDate:'',
  classPeriod:'',
  tuitionFee:'',
  class:'',
  classDay:'',
  time: '',
  teacher: '',
  startDate: '',
  endDate:'',
  classPeriod:'',
  tuitionFee:'',
  dateRegister : '',
  empressBy : '',
  time: '',
  teacher: '',
  date: '',
  session: '',
});


const handleSubmit = async () => {
    try{
      const newStudent = {
        first_name : formData.name,
        age : formData.age,
        gender : formData.gender,
        phone_number : formData.phone,
      }
      // response for student
      const responseStudent = await axios.post('http://localhost:3006/api/student', newStudent);
      const student_id = responseStudent.data.id;
      // console.log(`This is Student ID : ${studentId}`);

      // response for enrollment
      const newEnrollment = {
        studentId : student_id,
        teacherId : formData.teacher,
        classId : formData.class,
        classDay : formData.classDay,
        dateRegister : formData.dateRegister,
        startDate : formData.startDate,
        endDate : formData.endDate,
        time : formData.time
      }

      await axios.post('http://localhost:3006/api/enrollment',newEnrollment);
      router.push('/students')
      console.log(`This is enrollment list: ${JSON.stringify(newEnrollment)}`)
      // alert('Enrollment success created');
    }catch(err){
        console.log(err);
    }
};
const handleAllTeacher = async ()=>{
    const responseTeacher = await axios.get('http://localhost:3006/api/teacher');
    teachers.value = responseTeacher.data;
    console.log(`This is Teacher : ${responseTeacher.data}`);
}
const handleAllClass = async ()=>{
  const responseAllClass = await axios.get('http://localhost:3006/api/class');
  allClass.value = responseAllClass.data;
  console.log(`This is Class : ${responseAllClass.data}`);
}
// const deletedStudent = (index) => {
//   if(confirm("Are you sure! You want to delete this student?")) {
//     students.value.splice(index, 1);
//     localStorage.setItem("students", JSON.stringify(students.value));
//     console.log("Deleted student", index);
//   }

// }

onMounted(() => {
  handleAllTeacher();
  handleAllClass();
});
</script>

