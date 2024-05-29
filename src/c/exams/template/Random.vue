<script setup lang="ts">
import { rng, shuffle } from '@/c/exams/template/shuffle';

let judges = [true, true, true, true, true, false, false, false, false, false];
shuffle(judges);
let letters = 'ABCD';
let choiceAnswers = Array(15);
for (let i = 0; i < 15; i++) {
  let randomIndex = rng.next().value! % 4;
  choiceAnswers[i] = letters[randomIndex];
}
</script>

<template>
  <h2>判断题</h2>
  <p>{{ judges.join(', ') }}</p>
  <h2>单选题</h2>
  <p>{{ choiceAnswers.join(' ') }}</p>
</template>

<style scoped></style>
