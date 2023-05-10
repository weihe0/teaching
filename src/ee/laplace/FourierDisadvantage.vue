<template>
  <Slide title="傅里叶变换的介绍">
    <ul>
      <li>只适用于<em>周期函数</em></li>
      <li><Math :tex='String.raw`F(\omega)=\int_0^{\infty}f(t)e^{-iwt}dt`'/></li>
      <li>例如函数<Math tex='f(t)=e^t'/>无法进行傅里叶变换</li>
    </ul>
  </Slide>
</template>

<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
import Math from '@/components/Math.vue'
</script>

<style scoped></style>
