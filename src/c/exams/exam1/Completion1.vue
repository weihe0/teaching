<script setup lang="ts">
import IfElse from '@/c/components/IfElse.vue';
import Block from '@/c/components/Block.vue';
import Function from '@/c/components/Function.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Underline from '@/c/exams/template/Underline.vue';
import PageBreak from '@/c/exams/template/PageBreak.vue';
</script>

<template>
  <ol>
    <li>
      <span class="code">printf("%c", 'A');</span>的运行结果是<Underline
        >A</Underline
      >
    </li>
    <li><span class="code">8/5*1.5==</span><Underline>1.5</Underline></li>
    <li><span class="code">3*3%5==</span><Underline>4</Underline></li>
    <li>
      <span class="code">int i=0; i++;</span>执行后<span class="code">i==</span
      ><Underline>1</Underline>
    </li>
    <li>
      <span class="code"
        >int n=2; !(n&lt;1 || n&gt;3)==<Underline>1</Underline></span
      >
    </li>
    <li>
      <span class="code">int a[]={2, 3, 4}; a[2]==</span
      ><Underline>4</Underline>
    </li>
    <li>
      <span class="code">char str[]="BCD"; str[1]==</span
      ><Underline>'C'</Underline>
    </li>
    <li>
      <span class="code">char names[5][6];</span>那么<span class="code"
        >names</span
      >包含<Underline>30</Underline>个char
    </li>
    <li>下列程序的执行结果为<Underline>6</Underline></li>
    <div class="code">
      <div>int d[]= {9, 6, 3, 0};</div>
      <div>int *pd=d;</div>
      <div>printf("%d", pd[1]);</div>
    </div>
    <li>
      已知square函数定义如下，那么<span class="code"
        >square(3)==<Underline>9</Underline></span
      >
    </li>
    <div class="code">
      <div>int square(int a)</div>
      <Block>return a*a;</Block>
    </div>
    <li>
      已知abs函数的定义如下，那么<span class="code">abs(-2)==</span
      ><Underline>2</Underline>
    </li>
    <div class="code">
      <Function function-name="abs" parameters="int m" return-type="int">
        <IfElse condition="m > 0">
          <template #ifStatement
            ><SingleStatement>return m;</SingleStatement></template
          >
          <template #elseStatement
            ><SingleStatement>return -m;</SingleStatement></template
          >
        </IfElse>
      </Function>
    </div>
    <li>下列程序的执行结果为<Underline>3</Underline></li>
    <div class="code">
      <Function function-name="increase" parameters="int x" return-type="void">
        x = x+1;
      </Function>
      <Function function-name="main" parameters="" return-type="int">
        <div>int y = 3;</div>
        <div>increase(y);</div>
        <div>printf("%d", y);</div>
      </Function>
    </div>
    <li>下列程序的执行结果为<Underline>10</Underline></li>
    <div class="code">
      <div>struct person</div>
      <div>{</div>
      <div class="indent">
        <div>int id;</div>
        <div>double temperature;</div>
      </div>
      <div>};</div>
      <div>struct person zhangsan={ 10, 37.1 };</div>
      <div>printf("%d", zhangsan.id);</div>
    </div>
    <PageBreak />
    <li>
      <span class="code">struct person *wangwu;</span>那么<span class="code"
        >wangwu->id</span
      >
      相当于<span class="code">(<Underline>*wangwu</Underline>).id</span>
    </li>
    <li>填入正确的表达式，使pf指向f</li>
    <div class="code">
      <div>float f=1.5f;</div>
      <div>float *pf=<Underline>&amp;f</Underline>;</div>
    </div>
  </ol>
</template>

<style scoped></style>
