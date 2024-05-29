<script setup lang="ts">
const p = defineProps<{ id: string }>();
</script>

<template>
  <div>
    <div>struct {{ p.id }}{</div>
    <div class="indent">
      <slot />
    </div>
    <div>};</div>
  </div>
</template>

<style scoped>
.indent {
  margin-left: 4ex;
}
</style>
