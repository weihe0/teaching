<script setup lang="ts">
import { shuffle } from '@/c/exams/shuffle';

const p = defineProps<{ choices: string[] }>();
let shuffled = [...p.choices];
shuffle(shuffled);
</script>

<template>
  <div class="choices">
    <div v-for="c in shuffled" class="choice">{{ c }}</div>
  </div>
</template>

<style scoped>
.multiple-choices > :first-child {
  display: list-item;
}
.choices {
  counter-reset: c;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.choice::before {
  counter-increment: c;
  content: '(' counter(c, upper-alpha) ') ';
}
</style>
