<template>
  <footer
    class="sticky bottom-0 min-h-12 bg-blue-100 w-full flex flex-wrap gap-4 items-center md:justify-end justify-start pr-6">
    <div class="flex items-center gap-3 " v-for="status in studentStatus">
      <span class="h-8 w-8 text-xl rounded-full flex items-center justify-center shadow-lg"
        :style="{ backgroundColor: status.color, color: status.textColor }">{{ status.avatar }}</span>
      <span class="text-sky-800">{{ status.label }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { studentStatus } from '@/constants'
</script>