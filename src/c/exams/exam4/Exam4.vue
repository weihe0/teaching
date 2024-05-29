<script setup lang="ts">
import { provide } from 'vue';
import ExamAnswer4 from '@/c/exams/exam4/ExamAnswer4.vue';
provide('answer', false);
</script>

<template>
  <ExamAnswer4 />
</template>

<style scoped></style>
