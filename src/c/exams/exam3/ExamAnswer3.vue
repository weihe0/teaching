<script setup lang="ts">
import Judgements3 from '@/c/exams/exam3/Judgements3.vue';
import Choices3 from '@/c/exams/exam3/Choices3.vue';
import Completion3 from '@/c/exams/exam3/Completion3.vue';
import Programming3 from '@/c/exams/exam3/Programming3.vue';
import ExamTemplate from '@/c/exams/template/ExamTemplate.vue';
</script>

<template>
  <ExamTemplate>
    <template #judgements>
      <Judgements3 />
    </template>
    <template #choices>
      <Choices3 />
    </template>
    <template #completion>
      <Completion3 />
    </template>
    <template #programming>
      <Programming3 />
    </template>
  </ExamTemplate>
</template>

<style scoped>
@page {
  size: a4;
  margin: 0.5in;
}
em {
  font-family: initial;
  font-weight: bold;
}
@media print {
  .background {
    display: unset;
  }
  .side {
    display: grid;
  }
}
</style>
