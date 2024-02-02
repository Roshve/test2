<template>
  <main class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-10">
    <Card v-for="student in students" :student="student" @click="updatedStatusStudent" />
  </main>
</template>
<script setup lang="ts">
import studentsJson from '@/mocks/db.json';
import type { Student, Status } from "@/types/students";

const students = ref<Student[]>(studentsJson);

const updatedStatusStudent = (status: Status, id: number) => {
  students.value = students.value.map((student) => {
    if (student.id === id) {
      student.status = status;
    }
    return student;
  });
};
</script>