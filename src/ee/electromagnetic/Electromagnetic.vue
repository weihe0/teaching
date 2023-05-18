<script setup lang="tsx">
import CLayout from '@/layouts/CLayout.vue'
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import Math from '@/components/Math.vue'

const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="电磁场">
          <ul>
            <li>磁场的物理量</li>
            <li>电磁感应定律</li>
            <li>磁路欧姆定律</li>
            <li>电磁铁</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="磁场的物理量">
          <ul>
            <li>
              磁感应强度
              <Math tex="B=F/IL" />
            </li>
            <li>
              磁通
              <Math tex="\\Theta=BA" />
              ，是截面积与<em>垂直方向</em>的磁感应强度的乘积
            </li>
            <li>
              导磁率
              <Math tex="\\mu" />
              ，导磁率较高的物质称为<em>磁性材料</em>，如铁、钴、镍及其合金
            </li>
            <li>
              磁场强度
              <Math tex="H=B/\\mu" />
              ，消除导磁率对磁路计算的影响
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="电磁感应定律">
          <ul>
            <li>闭合回路的磁通量发生变化，回路中产生感应电流</li>
            <li>
              公式
              <Math tex="E=-d\\Theta/dt" />
              ，负号反映了感应电动势的方向
            </li>
            <li>
              如果是
              <Math tex="n" />
              匝线圈，感应电动势为
              <Math tex="E=-n d\\Theta/dt" />
            </li>
          </ul>
        </Slide>
      )
    }
  },
]
</script>

<template>
  <EELayout :slides="slides" />
</template>

<style scoped></style>
