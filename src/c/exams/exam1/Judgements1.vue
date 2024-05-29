<script setup lang="ts">
import Judgements from '@/c/exams/template/Judgements.vue';
import JudgeItem from '@/c/exams/template/JudgeItem.vue';
</script>

<template>
  <Judgements
    :answers="[true, false, false, false, true, true, false, true, false, true]"
  >
    <template #rights>
      <JudgeItem>C程序从main函数开始执行</JudgeItem>
      <JudgeItem
        ><span class="code">int a=10;</span>那么<span class="code"
          >a==10</span
        ></JudgeItem
      >
      <JudgeItem
        ><span class="code">1+2*3</span>相当于<span class="code">1+(2*3)</span>
      </JudgeItem>
      <JudgeItem
        ><span class="code">2&gt;1</span>的值为<span class="code"
          >1</span
        ></JudgeItem
      >
      <JudgeItem><span class="code">5/4==1</span></JudgeItem>
    </template>
    <template #wrongs>
      <JudgeItem
        ><span class="code">float b;</span>那么<span class="code"
          >b==0</span
        ></JudgeItem
      >
      <JudgeItem
        ><span class="code">double c[10];</span
        ><span class="code">c[10]是c的一个元素</span></JudgeItem
      >
      <JudgeItem><span class="code">int if=3;</span>能通过编译</JudgeItem>
      <JudgeItem
        ><span class="code">int i=3;</span>那么<span class="code"
          >i<1||i>4 == 1</span
        >
      </JudgeItem>
      <JudgeItem><span class="code">8%5==1</span></JudgeItem>
    </template>
  </Judgements>
</template>

<style scoped></style>
