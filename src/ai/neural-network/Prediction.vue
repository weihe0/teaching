<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
const a = Array(40)
</script>

<template>
  <Slide title="利用显卡同时做多道题">
    <div>
      <img v-for="_ of a" src="/ai/write.png" width="100" alt="做题" />
    </div>
  </Slide>
</template>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
}
img {
  padding: 1em;
}
</style>
