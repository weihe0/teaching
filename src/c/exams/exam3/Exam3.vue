<script setup lang="ts">
import { provide } from 'vue';
import ExamAnswer3 from '@/c/exams/exam3/ExamAnswer3.vue';
provide('answer', false);
</script>

<template>
  <ExamAnswer3 />
</template>

<style scoped></style>
