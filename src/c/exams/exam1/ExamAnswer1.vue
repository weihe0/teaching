<script setup lang="ts">
import Judgements1 from '@/c/exams/exam1/Judgements1.vue';
import Choices1 from '@/c/exams/exam1/Choices1.vue';
import Completion1 from '@/c/exams/exam1/Completion1.vue';
import Programming1 from '@/c/exams/exam1/Programming1.vue';
import ExamTemplate from '@/c/exams/template/ExamTemplate.vue';
</script>

<template>
  <ExamTemplate>
    <template #judgements>
      <Judgements1 />
    </template>
    <template #choices>
      <Choices1 />
    </template>
    <template #completion>
      <Completion1 />
    </template>
    <template #programming>
      <Programming1 />
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
