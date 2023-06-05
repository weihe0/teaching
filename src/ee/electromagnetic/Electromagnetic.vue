<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import Math from '@/components/Math.vue'
import EELayout from '@/layouts/EELayout.vue'
import MagneticOhm from '@/ee/electromagnetic/MagneticOhm.vue'

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
            <li>变压器</li>
            <li>旋转电机</li>
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
  MagneticOhm,
  {
    render() {
      return (
        <Slide title="电磁铁">
          <ul>
            <li>直流电磁铁的磁通不变，无铁损，铁芯用整块软钢制成</li>
            <li>交流电磁铁有铁耗，铁芯由钢片叠成</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="交流铁芯线圈的损耗">
          <ul>
            <li>
              磁滞损耗：感应的磁感应强度
              <Math tex="H" />
              滞后于外磁场的强度变化
              <Math tex="B" />
            </li>
            <li>涡流损耗：铁芯中的磁场变化时，铁芯感应出围绕铁芯中心线的漩涡状电流</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="磁性材料的特征">
          <ul>
            <li>在外磁场的作用下被强烈磁化</li>
            <li>撤走外磁场后仍然保持磁化</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="磁性材料的磁滞曲线">
          <img src="/ee/hb.jpg" width="540" alt="磁滞曲线" />
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="变压器">
          <ul>
            <li>短路试验</li>
            <ul>
              <li>低压侧短路，高压侧加电压，试验电流为高压侧额定电流</li>
              <li>记录此时高压侧的电压和电流，进而可以算得短路损耗和阻抗电压。</li>
              <li>短路试验所测得的损耗大致是绕组的电阻损耗</li>
            </ul>
            <li>空载试验</li>
            <ul>
              <li>是从变压器的任一侧绕组施加正弦波额定频率的额定电压，其它绕组开路</li>
              <li>测量变压器的空载损耗和空载电流</li>
            </ul>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="三相电路">
          <img src="/ee/triple.jpg" alt="三相电路" />
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="三相电路的优缺点">
          <ul>
            <li>三相输电效率较高、用铜节省</li>
            <li>用同样材料所制造的三相电机，其容量比单相电机大50%</li>
            <li>三相旋转电机的瞬时功率恒定，其瞬时转矩也恒定，运转平稳</li>
            <li>三相输电线较单相输电线，可节省有色金属25%，而且电能损耗较单相输电时少</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="三相电机的原理">
          <img src="/ee/triple-motor.gif" alt="三相电机" />
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
