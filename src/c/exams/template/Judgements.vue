<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue';
import { shuffle } from '@/c/exams/template/shuffle';
import Underline from '@/c/exams/template/Underline.vue';
const s = defineSlots<{
  rights(): ComponentPublicInstance[];
  wrongs(): ComponentPublicInstance[];
}>();
const p = defineProps<{ answers: boolean[] }>();
const shuffled = Array(p.answers.length);
const r = s.rights(),
  w = s.wrongs();
let ri = 0,
  wi = 0;
for (let i = 0; i < p.answers.length; i++) {
  if (p.answers[i]) {
    shuffled[i] = r[ri];
    ri++;
  } else {
    shuffled[i] = w[wi];
    wi++;
  }
}
</script>

<template>
  <ol class="judgement">
    <li v-for="(item, i) in shuffled">
      <component :is="item" /><Underline
        ><template v-if="answers[i]">&check;</template>
        <template v-else>&cross;</template>
      </Underline>
    </li>
  </ol>
</template>

<style scoped>
.judgement {
  padding: 0;
}
</style>
