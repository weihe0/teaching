<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
</script>
<template>
  <Slide title="极点">
    <span v-katex>m</span>级极点：<br />
    <span v-katex
      >f(z)=c_{-m}(z-z_0)^{-m}+\cdots+c_{-1}(z-z_0)^{-1}+c_0+c_1(z-z-0)+c_2(z-z_0)^2+\cdots </span
    ><br />
    负幂次项最高项为<span v-katex>(z-z_0)^{-m}</span>
  </Slide>
</template>

<style scoped></style>
