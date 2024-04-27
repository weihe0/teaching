<script setup lang="ts">
import ClangCarousel from '@/ClangCarousel.vue';
import Slide from '@/Slide.vue';
import FunctionDefinition from '@/c/function/FunctionDefinition.vue';
import FunctionCall from '@/c/function/FunctionCall.vue';
import FunctionCallScope from '@/c/function/FunctionCallScope.vue';
import FunctionCallRecursion from '@/c/function/FunctionCallRecursion.vue';
</script>

<template>
  <ClangCarousel>
    <Slide topic="函数">
      <ul>
        <li>函数的定义</li>
        <li>函数的调用</li>
        <li>变量的作用域</li>
        <li>函数原型声明</li>
        <li>头文件</li>
      </ul>
    </Slide>
    <FunctionDefinition />
    <FunctionCall />
    <FunctionCallScope />
    <FunctionCallRecursion />
    <Slide topic="函数的调用">
      <ul>
        <li>每次调用产生的参数与变量不同。</li>
        <li>即便是相同的函数，每次调用产生的参数与变量也不同。</li>
      </ul>
    </Slide>
    <Slide topic="练习题">
      <ul>
        <li>编写一个函数，参数为a与b，返回a与b的最小值</li>
        <li>注意函数定义的格式</li>
        <li>在合适的位置使用return语句</li>
        <li>被调用的函数要放在<strong>前面</strong></li>
      </ul>
    </Slide>
  </ClangCarousel>
</template>

<style scoped></style>
