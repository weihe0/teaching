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
  display: grid;
  grid-template-rows: min-content min-content;
  .topic {
    text-align: center;
    margin: 0.5em;
  }
  > :nth-child(2) {
    justify-self: center;
    max-width: 90%;
  }
  > :nth-child(n + 3) {
    display: none;
  }
}
</style>
