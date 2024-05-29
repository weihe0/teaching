<script setup lang="ts">
import { inject } from 'vue';

const answer = inject<boolean>('answer');
</script>

<template>
  <span :class="{ blank: true }"
    ><span :class="{ hide: !answer }"><slot /></span>
  </span>
</template>

<style scoped>
.blank {
  display: inline-grid;
  width: 4em;
  border-bottom: solid black thin;
  margin: 0 1ex;
  vertical-align: bottom;
  place-items: center;
}
.hide {
  display: none;
}
</style>
