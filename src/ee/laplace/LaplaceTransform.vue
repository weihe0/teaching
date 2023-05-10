<template>
  <Slide title="Laplace变换">
    <ol>
      <li>信号乘以衰减函数，得到<Math :tex='String.raw`f(t)e^{-\alpha t},\alpha>0`'/> </li>
      <li>
        对<Math :tex='String.raw`f(t)e^{-\alpha t}`'/>做Fourie变换，得到<em>二元函数</em>函数
        <Math :tex='String.raw`G(\alpha,\omega)`'/>
      </li>
      <li>令复数<Math :tex='String.raw`s=\ln\alpha+i\omega`'/>，二元函数转化为复变函数
        <Math :tex='String.raw`F(s)=G(\alpha,\omega)`' /></li>
      <li>因为
        <Math :tex='String.raw`\ln\alpha\in\mathbb{R},\omega\in\mathbb{R}`'/>，所以
        <Math :tex='String.raw`F(s):\mathbb{C}\to\mathbb{R}`'/></li>
    </ol>
  </Slide>
</template>

<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
import Math from '@/components/Math.vue'
</script>

<style scoped></style>
