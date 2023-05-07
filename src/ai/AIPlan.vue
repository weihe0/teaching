<script setup lang="ts">
import Paper from '@/layouts/Paper.vue'
import Plan from '@/layouts/Plan.vue'
</script>

<template>
  <Paper>
    <Plan
      keynote="人工智能的定义"
      difficulty="什么是智力活动，什么不是智力活动"
      :week="1"
      :count="1"
      :weekday="3"
      topic="总论"
      :class-number="1"
    >
    </Plan>
  </Paper>
</template>

<style scoped></style>
