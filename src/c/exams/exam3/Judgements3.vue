<script setup lang="ts">
import Judgements from '@/c/exams/template/Judgements.vue';
import JudgeItem from '@/c/exams/template/JudgeItem.vue';
</script>

<template>
  <Judgements
    :answers="[true, false, false, false, true, true, false, true, false, true]"
  >
    <template #rights
      ><JudgeItem><span class="code">2+3==5</span></JudgeItem>
      <JudgeItem
        ><span class="code">int a=2;</span>那么<span class="code"
          >a==2</span
        ></JudgeItem
      >
      <JudgeItem
        ><span class="code">int b=3;</span>那么<span class="code"
          >!(b>2) == 0</span
        >
      </JudgeItem>
      <JudgeItem><span class="code">(1+1&gt;2) == 0</span> </JudgeItem>
      <JudgeItem
        ><span class="code">1/2/3 == (1/2)/3</span></JudgeItem
      ></template
    >
    <template #wrongs>
      <JudgeItem
        ><span class="code">double float=1.0;</span>可以通过编译</JudgeItem
      >
      <JudgeItem
        ><span class="code">double c[5];</span
        ><span class="code">c[6]是c的一个元素</span></JudgeItem
      >
      <JudgeItem>C程序从start函数开始运行</JudgeItem>
      <JudgeItem
        ><span class="code">int i=5;</span>那么<span class="code"
          >i>=1&&i<=9 == 0</span
        >
      </JudgeItem>
      <JudgeItem><span class="code">4%2 != 0</span></JudgeItem>
    </template>
  </Judgements>
</template>

<style scoped></style>
