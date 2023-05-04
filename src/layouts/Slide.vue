<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>

<template>
  <section class="slide">
    <div class="title">
      <h1>{{ props.title }}</h1>
    </div>
    <div class="body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.slide {
  margin-top: 1em;
  width: 100%;
  aspect-ratio: 21/9;
  display: grid;
  grid-template-rows: min-content auto;
  grid-gap: 1em;
}
.title {
  display: grid;
  border-bottom: solid black 2px;
}
.title > h1 {
  justify-self: center;
  text-align-last: center;
  margin: 0.4em;
}
.body {
  justify-self: center;
}
:deep(.body ul) {
  margin: 1em 1em;
}
</style>
