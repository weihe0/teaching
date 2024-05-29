<script setup lang="ts">
import Judgements2 from '@/c/exams/exam2/Judgements2.vue';
import Choices2 from '@/c/exams/exam2/Choices2.vue';
import Completion2 from '@/c/exams/exam2/Completion2.vue';
import Programming2 from '@/c/exams/exam2/Programming2.vue';
import ExamTemplate from '@/c/exams/template/ExamTemplate.vue';
</script>

<template>
  <ExamTemplate>
    <template #judgements>
      <Judgements2 />
    </template>
    <template #choices>
      <Choices2 />
    </template>
    <template #completion>
      <Completion2 />
    </template>
    <template #programming>
      <Programming2 />
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
