<script setup lang="ts">
import ExamAnswer1 from '@/c/exams/exam1/ExamAnswer1.vue';
import { provide } from 'vue';
provide('answer', true);
</script>

<template>
  <ExamAnswer1 />
</template>

<style scoped></style>
