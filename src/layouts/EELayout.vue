<script setup lang="ts">
import Slider from '@/layouts/Slider.vue'
import type { Component } from 'vue'
const props = defineProps<{ slides: Component[] }>()
</script>

<template>
  <Slider :slides="props.slides" :lottery="false">
    <ul>
      <li>目录</li>
      <li><router-link to="/ee/complex">复数</router-link></li>
      <li><router-link to="/ee/analytic">解析函数</router-link></li>
      <li><router-link to="/ee/integral">曲线积分</router-link></li>
      <li><router-link to="/ee/series">级数</router-link></li>
      <li><router-link to="/ee/residue">留数</router-link></li>
      <li><router-link to="/ee/laplace">Laplace变换</router-link></li>
      <li><router-link to="/ee/det">行列式</router-link></li>
    </ul>
  </Slider>
</template>

<style scoped></style>
