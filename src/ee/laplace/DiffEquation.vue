<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
import Math from '@/components/Math.vue'
</script>

<template>
  <Slide title="用Laplace变换求解微分方程">
    <ol>
      <li>求解微分方程<Math tex="y'''+3y''+3y'+y=6e^{-x},y(0)=y'(0)=y''(0)=0" /></li>
      <li>
        方程两侧进行Laplace变换
        <Math :tex="String.raw`s^3Y(s)+3s^2Y(s)+3sY(s)+Y(s)=\frac{6}{s+1}`" />
      </li>
      <li>解得<Math :tex="String.raw`Y(s)=3!/(s+1)^4`" /></li>
      <li>再对<Math tex="Y(s)" />进行Laplace逆变换</li>
      <li>解得<Math tex="y=x^3e^{-x}" /></li>
    </ol>
  </Slide>
</template>

<style scoped></style>
