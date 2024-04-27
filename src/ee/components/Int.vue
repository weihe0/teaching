<script setup lang="ts">
const props = defineProps<{ curve: string }>();
</script>

<template>
  <span class="int"
    >&int;<sub>{{ props.curve }}</sub></span
  >
</template>

<style scoped lang="scss">
.int {
  font-size: 1.5em;
  font-family: math;
  vertical-align: middle;
  > sub,
  > sup {
    font-size: 0.5em;
  }
}
</style>
