<script setup lang='tsx'>
import type {Component} from 'vue'
import Slide from '@/layouts/Slide.vue'
import AILayout from '@/layouts/AILayout.vue'
const slides:Component[]=[
  {
    render(){
      return <Slide title={'第11章 字符串处理函数'}>
        <ol>
          <li>字符串的定义</li>
          <li>字符串的初始化</li>
          <li>字符串的引用</li>
          <li>字符串的结束标志</li>
          <li>字符串处理函数</li>
        </ol>
      </Slide>
    }
  }
]
</script>

<template>
  <CLayout :slides='slides'/>
</template>

<style scoped>

</style>
