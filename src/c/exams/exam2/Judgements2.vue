<script setup lang="ts">
import JudgeItem from '@/c/exams/template/JudgeItem.vue';
import Judgements from '@/c/exams/template/Judgements.vue';
</script>

<template>
  <Judgements
    :answers="[true, false, false, false, true, true, false, true, false, true]"
  >
    <template #rights>
      <JudgeItem><span class="code">1+2==3</span></JudgeItem>
      <JudgeItem
        ><span class="code">int a=5;</span>那么<span class="code"
          >a==5</span
        ></JudgeItem
      >
      <JudgeItem
        ><span class="code">3/4/5</span>相当于<span class="code">(3/4)/5</span>
      </JudgeItem>
      <JudgeItem
        ><span class="code">1+1&gt;2</span>的值为<span class="code"
          >0</span
        ></JudgeItem
      >
      <JudgeItem><span class="code">1/2==0</span></JudgeItem>
    </template>
    <template #wrongs>
      <JudgeItem
        ><span class="code">float int=2.5f;</span>可以通过编译</JudgeItem
      >
      <JudgeItem
        ><span class="code">double c[10];</span
        ><span class="code">c[10]是c的一个元素</span></JudgeItem
      >
      <JudgeItem
        ><span class="code">int d;</span>那么<span class="code"
          >d==0</span
        ></JudgeItem
      >
      <JudgeItem
        ><span class="code">int i=5;</span>那么<span class="code"
          >i>=1&&i<=9 == 0</span
        >
      </JudgeItem>
      <JudgeItem><span class="code">3%4==1</span></JudgeItem>
    </template>
  </Judgements>
</template>

<style scoped></style>
