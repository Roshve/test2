<template>
  <main class="container flex justfy-center items-center mt-10">
    <img class="h-56 w-56 object-cover rounded-full mr-5" :src="student?.image" alt="">
    <div class="flex flex-col gap-6">
      <h1 class="text-2xl">{{ student?.name }} {{ student?.lastName }}</h1>
      <span>puntaje: {{ student?.score }}</span>
      <span>{{ student?.status }}</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, suscipit, est enim saepe consequuntur facilis
        ipsam numquam minus, modi cupiditate veritatis expedita ex sapiente laudantium. Veritatis nihil saepe eum placeat.
      </p>
    </div>
  </main>
</template>
<script setup lang="ts">
import studentsJson from '@/mocks/db.json';
import type { Student } from "@/types/students";
const { id } = useRoute().params;

const student = studentsJson.find((student) => student.id === Number(id)) as Student | undefined;

onBeforeMount(() => {
  alert(`ID: ${student?.id}\nNombre: ${student?.name}\nEstado: ${student?.status}`)
}) 
</script>