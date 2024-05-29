<script setup lang="ts">
import JudgeItem from '@/c/exams/template/JudgeItem.vue';
import Judgements from '@/c/exams/template/Judgements.vue';
</script>

<template>
  <Judgements
    :answers="[true, false, false, false, true, true, false, true, false, true]"
  >
    <template #rights>
      <JudgeItem><span class="code">1+1==2</span></JudgeItem>
      <JudgeItem
        ><span class="code">int a=3;</span>那么<span class="code"
          >a==3</span
        ></JudgeItem
      >
      <JudgeItem
        ><span class="code">double b[10];</span
        ><span class="code">b[0]是b的一个元素</span></JudgeItem
      >

      <JudgeItem
        ><span class="code">2000>3000*7.25</span>的值为<span class="code"
          >0</span
        ></JudgeItem
      >
      <JudgeItem><span class="code">4%2==0</span></JudgeItem>
      <JudgeItem><span class="code">int c; 2=c;</span>可以通过编译</JudgeItem>
    </template>
    <template #wrongs>
      <JudgeItem><span class="code">int double=2;</span>可以通过编译</JudgeItem>
      <JudgeItem
        ><span class="code">int i=5;</span>那么<span class="code"
          >!(i<1 || i>9)==0</span
        >
      </JudgeItem>
      <JudgeItem><span class="code">3/4==0.75</span></JudgeItem>
      <JudgeItem
        ><span class="code">4/5/6</span>相当于<span class="code">4/(5/6)</span>
      </JudgeItem>
    </template>
  </Judgements>
</template>

<style scoped></style>
