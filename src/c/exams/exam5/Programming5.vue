<script setup lang="ts">
import Function from '@/c/components/Function.vue'
import Underline from '@/c/exams/template/Underline.vue'
</script>

<template><ol>
  <li>
    编写函数prime，传入整数n。如果n是素数，返回1，否则返回0。n是素数的条件是n&ge;2，
    而且n不能被大于1小于n的整数整除。
  </li>
  <div class="code">
    <Function
      function-name="prime"
      parameters="int n"
      return-type="int"
    >
      <div>
        if(n<Underline>< 2</Underline>) return 0; //如果不满足n&ge;2，直接返回0
      </div>
      <div>int i;</div>
      <div>
        for(<Underline>i=2</Underline>; i<Underline>&lt;</Underline>n; i++){
        //逐个检查满足1&lt;i&lt;n的整数i
      </div>
      <div class="indent">
        <div>
          if(n%i<Underline>==0</Underline>) return 0;
          //如果发现n能被某个i整除，直接返回0
        </div>
      </div>
      <div>return <Underline>1</Underline>; //通过检查，返回1</div>
    </Function>
  </div>
  <li>
    编写一个函数，传入字符指针str，str指向字符串的首个字符，计算字符串的长度（'\0'不计入长度）。
  </li>
  <div class="code">
    <Function
      function-name="length"
      parameters="char *str"
      return-type="int"
    >
      <div>int i;</div>
      <div>
        int len=<Underline>0</Underline>;
        //len记录字符串长度。检查字符串前，长度为0
      </div>
      <div>
        for(<Underline>i=0</Underline>; str[i]<Underline>!='\0'</Underline>; i++){
        //逐个检查字符串的字符，直到遇到空字符
      </div>
      <div class="indent">
        <Underline>len++</Underline>; //每检查一个字符，长度都要加1
      </div>
      <div>return <Underline>len</Underline>; //返回字符串的长度</div>
    </Function>
  </div>
</ol></template>

<style scoped></style>
