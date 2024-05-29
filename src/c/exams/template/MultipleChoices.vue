<script setup lang="ts">
const props = defineProps<{ choices: string[] }>();
</script>

<template>
  <li><slot /></li>
  <slot name="content" />
  <ol class="choices">
    <li v-for="c in choices" class="choice">{{ c }}</li>
  </ol>
</template>

<style scoped>
.choices {
  display: flex;
  justify-content: space-between;
  padding-left: 2em;
}
li.choice {
  display: list-item;
  list-style: upper-alpha;
}
</style>
