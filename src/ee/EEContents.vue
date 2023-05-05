<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import EELayout from '@/layouts/EELayout.vue'

const slides: Component[] = [
  {
    setup() {
      return () => (
        <Slide title="目录">
          <ul>
            <li><router-link to="/ee/complex">复数</router-link></li>
            <li><router-link to="/ee/analytic">解析函数</router-link></li>
            <li><router-link to="/ee/integral">曲线积分</router-link></li>
            <li><router-link to="/ee/series">级数</router-link></li>
            <li><router-link to="/ee/residue">留数</router-link></li>
            <li><router-link to="/ee/laplace">Laplace变换</router-link></li>
            <li><router-link to="/ee/det">行列式</router-link></li>
          </ul>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <EELayout title="C语言目录" :slides="slides" />
</template>

<style scoped>
ul {
    column-count: 2;
    max-height: 5em;
}
</style>
