<template>
  <div class="flex gap-2">
    <button class="flex h-12 w-12 rounded-2xl border justify-center items-center text-2xl" :style="colorStaturActive(status)"
      v-for="status in statusList" @click.stop.prevent="$emit('onChangeStatus', status.status, id)">
      {{ status.avatar }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { studentStatus } from '@/constants'

const statusList = computed(() => {
  return studentStatus.filter(item => item.status !== "justified absence" && item.status !== "justified late")
})

const colorStaturActive = (status: any) => {
  const active = status.status === props.statusActive
  return {
    backgroundColor: active ? status.color : 'white',
    borderColor: status.color,
    color: active ? status.textColor : status.color,
  }
}

const props = defineProps<{
  statusActive: string;
  id: number;
}>();
</script>