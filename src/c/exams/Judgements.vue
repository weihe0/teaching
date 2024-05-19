<script setup lang="ts">
import { shuffle } from '@/c/exams/shuffle';
import Parentheses from '@/c/exams/Parentheses.vue';
import type { ComponentPublicInstance } from 'vue';

const s = defineSlots<{ default(): ComponentPublicInstance[] }>();
const shuffled = [...s.default()];
shuffle(shuffled);
</script>

<template>
  <ol class="judgement">
    <li v-for="item in shuffled"><component :is="item" /></li>
  </ol>
</template>

<style scoped>
.judgement {
  padding: 0;
}
</style>
