<template>
    <!-- <div class="text-red-500"><h1>Dashboard Page</h1></div> -->
    <div class=" p-24">
        <div class="grid grid-cols-3 gap-8">
            <div @click="onPageChange('students/new')" class="cursor-pointer-page">
                <DashboardSomneangpleangBox  :title="'Register'" :description="'Register User'" :img="adduserIcon"/>
            </div>
            <div  class="cursor-pointer-page">
                <DashboardSomneangpleangBox  :title="'Attendance'" :description="'Register User'" :img="attendanceIcon"/>
            </div>
            <div  class="cursor-pointer-page">
                <DashboardSomneangpleangBox  :title="'Students'" :description="'Register User'" :img="studentsIcon"/>
            </div>
            <div  class="cursor-pointer-page">
                <DashboardSomneangpleangBox  :title="'Teachers'" :description="'Register User'" :img="teacherIcon"/>
            </div>
            <div  class="cursor-pointer-page">
                <DashboardSomneangpleangBox  :title="'Class'" :description="'Register User'" :img="classIcon"/>
            </div>
            <div  class="cursor-pointer-page">
                <DashboardSomneangpleangBox  :title="'Calendar'" :description="'Register User'" :img="calendarIcon"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import adduserIcon from '@/assets/images/icons/addUser1.png'
import attendanceIcon from '@/assets/images/icons/attendance.png'
import studentsIcon from '@/assets/images/icons/students1.png'
import teacherIcon from '@/assets/images/icons/teacher1.png'
import classIcon from '@/assets/images/icons/class1.png'
import calendarIcon from '@/assets/images/icons/calendar.png'
import { useRouter } from 'vue-router';
const router = useRouter()
const onPageChange = (page) => {
    console.log('Page Change')
    router.push(`/${page}`)
}
</script>

<style scoped>
</style>