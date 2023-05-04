<script setup lang="tsx">
import EELayout from '@/layouts/EELayout.vue'
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import IntegralDef from '@/ee/integral/IntegralDef.vue'
const slides: Component[] = [
  IntegralDef,
  {
    setup() {
      return () => (
        <Slide title="计算积分计算积分计算积分计算积分计算积分计算积分计算积分">
          <ul>
            <li>啊啊啊</li>
          </ul>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <EELayout :slides="slides" />
</template>

<style scoped></style>
