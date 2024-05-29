<script setup lang="ts">
import Judgements5 from '@/c/exams/exam5/Judgements5.vue';
import Choices5 from '@/c/exams/exam5/Choices5.vue';
import Completion5 from '@/c/exams/exam5/Completion5.vue';
import Programming5 from '@/c/exams/exam5/Programming5.vue';
import ExamTemplate from '@/c/exams/template/ExamTemplate.vue';
</script>

<template>
  <ExamTemplate>
    <template #judgements>
      <Judgements5 />
    </template>
    <template #choices>
      <Choices5 />
    </template>
    <template #completion>
      <Completion5 />
    </template>
    <template #programming>
      <Programming5 />
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
