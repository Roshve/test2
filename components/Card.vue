<template>
  <NuxtLink :to="{ name: 'detail-id', params: { id: student.id } }"
    class="hover:shadow-lg w-60 border border-slate-300 p-4 rounded-xl">
    <div class="flex items-center gap-2 mb-2">
      <div class="relative">
        <span
          class="absolute top-1 right-0 w-6 h-3 flex items-center justify-center rounded-full text-white bg-red-500 text-xs">{{
            score }}</span>
        <img :src="student.image" width="50" class="h-14 w-14 object-cover rounded-full border border-slate-300"
          alt="test" />
      </div>
      <span>{{ fullName }}</span>
    </div>
    <Status :status-active="student.status" :id="student.id" @onChangeStatus="onClick" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Student } from "@/types/students";

const emit = defineEmits(['click'])

const onClick = (status: string, id: number) => {
  emit('click', status, id)
}
const fullName = computed(() => {
  return `${props.student.name} ${props.student.lastName}`
})

const score = computed(() => {
  return props.student.score.toFixed(1)
})

const props = defineProps<{
  student: Student;
}>();
</script>

<style></style>