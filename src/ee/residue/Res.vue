<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
</script>
<template>
  <Slide title="留数">
    <p>
      如果<span v-katex>f(z)</span>在<span v-katex>z_0</span>的圆环域内解析，<span v-katex>C</span
      >为该邻域内的任何一条正向简单闭曲线，那么
    </p>
    <br />
    <p>
      <span v-katex>\frac{1}{2\pi i}\oint_c f(z)dz</span>为<span v-katex>z_0</span>处的<em>留数</em>
    </p>
  </Slide>
</template>

<style scoped></style>
