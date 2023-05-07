<template>
  <Slide title="Laplace变换">
    <ol>
      <li>函数乘以衰减值\(f(t)e^{-\alpha t}\)</li>
      <li>
        对衰减的函数做傅里叶变换\[F(\alpha,\omega)=\int_0^{\infty}f(t)e^{-\alpha t}e^{-i\omega
        t}dt\]
      </li>
      <li>
        令\(s=\alpha+i\omega\)，化简公式\[F(s)=\int_0^{\infty}f(t)e^{-(\alpha+i\omega)t}dt=
        \int_0^{\infty}f(t)e^{-st}dt\]
      </li>
    </ol>
  </Slide>
</template>

<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
</script>

<style scoped></style>
