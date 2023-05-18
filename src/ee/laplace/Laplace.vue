<script setup lang="tsx">
import Fourier from './Fourier.vue'
import FourierDisadvantage from './FourierDisadvantage.vue'
import LaplaceTransform from './LaplaceTransform.vue'
import EELayout from '@/layouts/EELayout.vue'
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import ConvAnime from '@/ee/laplace/ConvAnime.vue'
import Math from '@/components/Math.vue'
import DiffEquation from '@/ee/laplace/DiffEquation.vue'
import ConvLaplace from '@/ee/laplace/ConvLaplace.vue'

let responses: number[] = []
for (let i = 0; i < 10; i++) {
  responses.push(i * 0.5)
}
const slides: Component[] = [
  Fourier,
  FourierDisadvantage,
  LaplaceTransform,
  {
    render() {
      return (
        <Slide title="卷积示例">
          <ul>
            <li>主要用于控制信号作用于对象上时，计算对象的累积变化</li>
            <li>《极限竞速：地平线》：手柄信号(卷积)汽车响应→汽车移动</li>
            <li>《我的世界》：移动指令（卷积）史蒂夫单位移动曲线→史蒂夫移动</li>
            <li>《坎巴拉太空计划》：引擎做功（卷积）火箭特性→位置曲线</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="控制具有滞后性">
          <ConvAnime controls={[-1]} responses={responses} />
          <p>
            控制信号瞬间下达，响应<em>持续一段时间</em>
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="单位响应">
          <ConvAnime controls={[1]} responses={responses} />
          <p>在零时刻下达单位控制信号，对象产生的响应函数</p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="控制具有线性">
          <ConvAnime controls={[2]} responses={responses} />
          <p>控制信号叠加或倍增后，响应也叠加或倍增</p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="控制具有时不变性">
          <ConvAnime controls={[0, 0, 0, 0, 0, 1]} responses={responses} />
          <p>
            如果控制信号延迟
            <Math tex={String.raw`\tau`} />
            时间， 响应也延迟
            <Math tex={String.raw`\tau`} />
            时间
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="控制与卷积">
          <ConvAnime controls={[1, 1, 1, 0, -1]} responses={responses} />
          <p>
            一段连续的控制信号作用于控制对象上，响应就是控制信号与单位响应的<em>卷积</em>
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="卷积的参考资料">
          <a href="https://www.bilibili.com/video/BV1Sb4y1v7tb?p=6" target="_blank">
            卷积与单位脉冲响应
          </a>
        </Slide>
      )
    }
  },
  ConvLaplace,
  DiffEquation
]
</script>

<template>
  <EELayout :slides="slides" />
</template>

<style scoped></style>
