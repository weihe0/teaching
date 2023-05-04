<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
import Math from '@/components/Math.vue'
</script>

<template>
  <Slide title="曲线积分的定义">
    <Math
      :tex="
        String.raw`\begin{split}
      \int_Cf(z)\mathrm{d}z&=\lim_{n\to\infty}\sum_{k=1}^n f(\zeta_k)(z_k-z_{k-1})\\
    &=\lim_{n\to\infty}\sum_{k=1}^n f(\zeta_k)\Delta z_k\end{split}`
      "
      :block="true"
    />
  </Slide>
</template>

<style scoped></style>
