<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import EELayout from '@/layouts/EELayout.vue'
import { RouterLink } from 'vue-router'

const slides: Component[] = [
  {
    setup() {
      return () => (
        <Slide title="目录">
          <ol class='two-columns'>
            <li>
              <RouterLink to="/ee/complex">复数</RouterLink>
            </li>
            <li>
              <RouterLink to="/ee/analytic">解析函数</RouterLink>
            </li>
            <li>
              <RouterLink to="/ee/integral">曲线积分</RouterLink>
            </li>
            <li>
              <RouterLink to="/ee/series">级数</RouterLink>
            </li>
            <li>
              <RouterLink to="/ee/residue">留数</RouterLink>
            </li>
            <li>
              <RouterLink to="/ee/laplace">Laplace变换</RouterLink>
            </li>
            <li>
              <RouterLink to="/ee/det">行列式</RouterLink>
            </li>
          </ol>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <EELayout title="C语言目录" :slides="slides" />
</template>

<style scoped></style>
