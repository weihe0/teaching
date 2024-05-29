<script setup lang="ts">
import JudgeItem from '@/c/exams/template/JudgeItem.vue';
import Judgements from '@/c/exams/template/Judgements.vue';
</script>

<template>
  <Judgements
    :answers="[true, false, false, false, true, true, false, true, false, true]"
  >
    <template #rights>
      <JudgeItem>'A'!='B'</JudgeItem>
      <JudgeItem
      ><span class="code">int a=2;</span>那么<span class="code"
      >a==2</span
      ></JudgeItem
      >
      <JudgeItem
      ><span class="code">a+b/2>0</span>相当于<span class="code"
      >(a+(b/2))>0</span
      >
      </JudgeItem>
      <JudgeItem
      ><span class="code">6>4</span>的值为<span class="code"
      >1</span
      ></JudgeItem
      >
      <JudgeItem><span class="code">5/2==2</span></JudgeItem>
    </template>
    <template #wrongs>
      <JudgeItem><span class="code">1+2=3;</span>可以通过编译</JudgeItem>
      <JudgeItem
      ><span class="code">double c[5]={1,2,3,4,5};</span>那么<span
        class="code"
      >c[1]==1</span
      ></JudgeItem
      >
      <JudgeItem
      ><span class="code">unsigned u=-1;</span>那么<span class="code"
      >u<0</span
      ></JudgeItem
      >
      <JudgeItem
      ><span class="code">int a,b;</span>那么<span class="code">ab</span
      >相当于<span class="code">a*b</span>
      </JudgeItem>
      <JudgeItem><span class="code">2/5==0.4</span></JudgeItem>
    </template>
  </Judgements>
</template>

<style scoped></style>
