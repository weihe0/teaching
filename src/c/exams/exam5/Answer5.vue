<script setup lang="ts">
import { provide } from 'vue';
import ExamAnswer5 from '@/c/exams/exam5/ExamAnswer5.vue';
provide('answer', true);
</script>

<template>
  <ExamAnswer5 />
</template>

<style scoped></style>
