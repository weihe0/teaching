<script setup lang="ts">
import Paper from '@/layouts/Paper.vue'
import Plan from '@/layouts/Plan.vue'
</script>

<template>
  <Paper>
    <Plan
      keynote="复数的定义"
      difficulty="理解复数"
      :week="1"
      :count="1"
      :weekday="4"
      topic="复数"
      :class-number="7"
    >
    </Plan>
  </Paper>
</template>

<style scoped></style>
