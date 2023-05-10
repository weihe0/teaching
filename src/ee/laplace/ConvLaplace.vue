<script setup lang='ts'>

import Slide from '@/layouts/Slide.vue'
import Math from '@/components/Math.vue'
</script>

<template>
<Slide title='用Laplace变换求解卷积'>
  <ol>
    <li>求卷积<Math tex='h(t)=f(t)*g(t)'/> </li>
    <li>计算Laplace变换<Math tex='F(s)=L[f(t)],G(s)=L[g(t)]'/></li>
    <li>计算函数的乘积<Math tex='H(s)=F(s)G(s)'/></li>
    <li>计算Laplace逆变换<Math tex='h(t)=L^{-1}[H(s)]'/></li>
    <li>总结：<Math tex='L[f(t)*g(t)]=L[f(t)]L[g(t)]'/></li>
  </ol>
</Slide>
</template>

<style scoped>

</style>
