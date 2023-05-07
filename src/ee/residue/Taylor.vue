<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
</script>
<template>
  <Slide title="泰勒级数">
    <ul>
      <li v-katex>\cos z=1-\frac{z^2}{2!}+\frac{z^4}{4!}-\frac{z^6}{6!}+\frac{z^8}{8!}-\cdots</li>
      <li v-katex>\sin z=z-\frac{z^3}{3!}+\frac{z^5}{5!}-\frac{z^7}{7!}+\frac{z^9}{9!}-\cdots</li>
      <li v-katex>e^z=1+z+\frac{z^2}{2!}+\frac{z^3}{3!}+\frac{z^4}{4!}+\cdots</li>
      <li v-katex>\cdots</li>
      <li>收敛半径内必须<em>解析</em></li>
    </ul>
  </Slide>
</template>

<style scoped>
li {
  margin: 0.5em 0;
}
</style>
