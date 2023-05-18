<script setup lang="tsx">
import AILayout from '@/layouts/AILayout.vue'
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="项目三 无人机">
          <ul>
            <li>无人机的定义</li>
            <li>无人机的发展简史</li>
            <li>无人机的优点</li>
            <li>无人机对人工智能的需求</li>
            <li>无人机在军事领域的应用</li>
            <li>无人机在民事领域的应用</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="无人机的定义">
          <ul>
            <li>没有飞行员的飞机</li>
            <li>飞机的操作员在无人机以外</li>
            <li>无人机的四大系统</li>
            <ul>
              <li>飞行系统</li>
              <li>任务载荷系统</li>
              <li>地面控制系统</li>
              <li>数据链系统</li>
            </ul>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="无人机的发展简史">
          <ul>
            <li>两次世界大战：将无人机当做靶机使用</li>
            <li>越南战争：使用无人机侦查</li>
            <li>1982年，以色列航空工业公司首次以无人机担任其他角色的军事任务</li>
            <li>1996年，美国国家航空航天局研制出X-36试验型无人战斗机</li>
            <li>2005年，大疆公司成立，后来成长为民用无人机的第一大公司</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="无人机的优点">
          <ul>
            <li>体积小、重量轻</li>
            <li>抗过载高，机动性强</li>
            <li>可执行危险任务</li>
            <li>起飞、着陆容易</li>
            <li>使用、维护方便</li>
            <li>对环境的影响小</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="无人机对人工智能的需求">
          <ul>
            <li>单机飞行智能</li>
            <li>多机协同智能</li>
            <li>任务自主智能</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="无人机在军事领域的应用">
          <ul>
            <li>以无人机作为对空武器的靶机</li>
            <li>深入战场前沿进行空中侦察</li>
            <li>携带武器攻击目标</li>
            <li>携带干扰设备进行电磁干扰</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="无人机在民事领域的应用">
          <ul>
            <li>
              <em>空中摄影</em>
            </li>
            <li>安全巡逻</li>
            <li>空中喷洒药水</li>
            <li>电力巡检</li>
            <li>收集气象数据</li>
          </ul>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <AILayout :slides="slides" />
</template>

<style scoped></style>
