<script setup lang="ts">
import Slider from '@/layouts/Slider.vue'
import type { Component } from 'vue'
const props = defineProps<{ slides: Component[] }>()
</script>

<template>
  <Slider :slides="props.slides" :lottery="false">
    <ul>
      <li>目录</li>
      <li><RouterLink to="/ee/em">电磁场</RouterLink></li>
      <li><RouterLink to="/ee/complex">复数</RouterLink></li>
      <li><RouterLink to="/ee/analytic">解析函数</RouterLink></li>
      <li><RouterLink to="/ee/integral">曲线积分</RouterLink></li>
      <li><RouterLink to="/ee/series">级数</RouterLink></li>
      <li><RouterLink to="/ee/residue">留数</RouterLink></li>
      <li><RouterLink to="/ee/laplace">Laplace变换</RouterLink></li>
      <li><RouterLink to="/ee/det">行列式</RouterLink></li>
    </ul>
  </Slider>
</template>

<style scoped></style>
