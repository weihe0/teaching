<script setup lang='tsx'>
import type {Component} from 'vue'
import Slide from '@/layouts/Slide.vue'
import AILayout from '@/layouts/AILayout.vue'
const slides:Component[]=[
  {
    render(){
      return <Slide title='项目一 总论'>
        <ul>
          <li>人工智能的基本概念</li>
          <li>人工智能的发展历史</li>
          <li>人工智能的基本研究内容</li>
          <li>人工智能的主要研究领域</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='人工智能的基本概念'>
        <blockquote>人工智能是研究、开发用于模拟、延伸和扩展<em>人的智能</em>的理论、方法、技术及应用</blockquote>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='人工智能的发展历史'>
        <ol>
          <li>人工智能孕育阶段</li>
          <li><em>1956年</em>在达特茅斯学院召开首次人工智能学术会议，是人工智能诞生的标志</li>
          <li>人工智能的兴盛阶段</li>
        </ol>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='智能的特征'>
        <ul>
          <li>感知能力</li>
          <li>记忆和思维能力</li>
          <li>学习能力</li>
          <li>行为能力</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='人工智能的基本研究内容'>
        <ul>
          <li>智能感知</li>
          <li>机器感知</li>
          <li>机器思维</li>
          <li>机器学习</li>
          <li>机器行为</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='人工智能的主要研究领域'>
        <ul>
          <li>机器学习</li>
          <li>自然语言处理</li>
          <li>机器视觉</li>
          <li>人工神经网络</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='案例：人脑与电脑的世纪决战'>
        <ul>
          <li>1996年，深蓝对战卡斯帕罗夫</li>
          <li>1997年，深蓝再度对战卡斯帕罗夫</li>
          <li>2016年，阿尔法围棋战胜李世石</li>
          <li>2017年，阿尔法围棋战胜柯洁</li>
        </ul>
      </Slide>
    }
  }
]
</script>

<template>
  <AILayout :slides='slides'/>
</template>

<style scoped>

</style>
