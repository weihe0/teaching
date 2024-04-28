<script setup lang="ts">
const props = defineProps<{ topic: string }>();
</script>

<template>
  <section class="slide">
    <h2 class="topic">{{ props.topic }}</h2>
    <slot />
  </section>
</template>

<style scoped lang="scss">
.slide {
  aspect-ratio: 16/9;
  width: 100%;
  place-self: center;
  background: radial-gradient(white, papayawhip);
  display: flex;
  flex-direction: column;
  align-items: center;
  .topic {
    text-align: center;
    margin: 0.5em;
  }
}
</style>
