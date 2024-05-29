<script setup lang="ts">
import { provide } from 'vue';
import ExamAnswer2 from '@/c/exams/exam2/ExamAnswer2.vue';
provide('answer', false);
</script>

<template>
  <ExamAnswer2 />
</template>

<style scoped></style>
