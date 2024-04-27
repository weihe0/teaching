<script setup lang="ts">
const props = defineProps<{ from: string; to: string }>();
</script>

<template>
  <span class="sum">
    <span class="to">{{ props.to }}</span>
    <span>&Sum;</span>
    <span class="from">{{ props.from }}</span>
  </span>
</template>

<style scoped lang="scss">
.sum {
  display: inline flex;
  flex-direction: column;
  vertical-align: middle;
  .from,
  .to {
    font-size: 0.75em;
  }
}
</style>
