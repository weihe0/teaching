<script setup lang="ts">
import './global.scss';
import { type ComponentPublicInstance, reactive } from 'vue';
const slots = defineSlots<{ default(): ComponentPublicInstance[] }>();
const slides = slots.default();
const state = reactive({ i: 0, name: '姓名' });
function next() {
  if (state.i < slides.length - 1) {
    state.i++;
  }
}

function prev() {
  if (state.i > 0) {
    state.i--;
  }
}
</script>

<template>
  <div class="carousel">
    <component :is="slides[state.i]" />
    <aside>
      <button type="button" title="上一页" class="graph" @click="prev">
        <svg viewBox="0 0 100 50">
          <path d="M 0 50 l 50 -50 l 50 50" />
        </svg>
      </button>
      <button type="button" title="下一页" class="graph" @click="next">
        <svg viewBox="0 0 100 50">
          <path d="M 0 0 l 50 50 l 50 -50" />
        </svg>
      </button>
    </aside>
  </div>
</template>

<style scoped></style>
