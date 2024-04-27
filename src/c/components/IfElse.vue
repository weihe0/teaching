<script setup lang="ts">
import './style.scss';
const props = defineProps<{ condition: string }>();
</script>

<template>
  <div>if ({{ props.condition }})</div>
  <slot name="ifStatement" />
  <div>else</div>
  <slot name="elseStatement" />
</template>

<style scoped></style>
