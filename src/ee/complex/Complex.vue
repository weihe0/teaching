<script setup lang="tsx">
import EELayout from '@/layouts/EELayout.vue'
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import Math from '@/components/Math.vue'
const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="复数与复变函数">
          <ul>
            <li>复数的定义</li>
            <li>复数的运算</li>
            <li>复数的形式</li>
            <li>复平面</li>
            <li>复变函数</li>
            <li>复变函数的极限和连续性</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="虚数单位">
          <ul>
            <li>复数来自代数方程的解</li>
            <li>
              例如
              <Math tex={String.raw`x^2+2=0`} />
              没有<em>实数解</em>
            </li>
            <li>
              如果允许<em>对负数开平方</em>，那么该方程的解为
              <Math tex={String.raw`x=\pm\sqrt{-2}`} />
            </li>
            <li>
              定义<dfn>虚数单位</dfn>
              <Math tex={String.raw`i^2=-1`} />， 那么解为
              <Math tex={String.raw`x=\pm\sqrt{2}i`} />
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="复数的定义">
          <ul>
            <li>
              复数是形如
              <Math tex={String.raw`a+bi`} />
              的数，其中
              <Math tex={String.raw`a,b`} />为<em>实数</em>，
              <Math tex="i" />为<em>虚数单位</em>
            </li>
            <li>
              例如
              <Math tex="1+2i" />
              是复数，它是
              <Math tex="x^2-2x+5=0" />
              的根
            </li>
            <li>
              如果复数
              <Math tex="a+bi" />
              中有
              <Math tex="a\\neq 0,b=0" />
              ，那它是<em>实数</em>，如果
              <Math tex="a=0,b\\neq 0" />
              ，那它是<em>纯虚数</em>
            </li>
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
