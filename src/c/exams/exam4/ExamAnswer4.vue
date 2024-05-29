<script setup lang="ts">
import Judgements4 from '@/c/exams/exam4/Judgements4.vue';
import Choices4 from '@/c/exams/exam4/Choices4.vue';
import Completion4 from '@/c/exams/exam4/Completion4.vue';
import Programming4 from '@/c/exams/exam4/Programming4.vue';
import ExamTemplate from '@/c/exams/template/ExamTemplate.vue';
</script>

<template>
  <ExamTemplate>
    <template #judgements>
      <Judgements4 />
    </template>
    <template #choices>
      <Choices4 />
    </template>
    <template #completion>
      <Completion4 />
    </template>
    <template #programming>
      <Programming4 />
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
