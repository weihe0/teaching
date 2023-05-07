<script setup lang="tsx">
import ForLoop from './ForLoop.vue'
import WhileLoop from './WhileLoop.vue'
import DoWhileLoop from './DoWhileLoop.vue'
import CLayout from '@/layouts/CLayout.vue'
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
let slides: Component[] = [
  {
    render() {
      return (
        <Slide title="第9章 循环语句">
          <ul>
            <li>while循环</li>
            <li>do while循环</li>
            <li>for循环</li>
          </ul>
        </Slide>
      )
    }
  },
  WhileLoop,
  DoWhileLoop,
  ForLoop
]
</script>

<template>
  <CLayout :slides="slides" />
</template>

<style scoped></style>
