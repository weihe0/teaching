<script setup lang="ts">
import IfElse from '@/c/components/IfElse.vue';
import Block from '@/c/components/Block.vue';
import Function from '@/c/components/Function.vue';
import Structure from '@/c/components/Structure.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Underline from '@/c/exams/template/Underline.vue';
import PageBreak from '@/c/exams/template/PageBreak.vue';
</script>

<template>
  <ol>
    <li>
      <span class="code">printf("%s", "ABC");</span>的运行结果是<Underline
        >ABC</Underline
      >
    </li>
    <li><span class="code">3/2*1.5==</span><Underline>1.5</Underline></li>
    <li><span class="code">4-5%2==</span><Underline>3</Underline></li>
    <li>
      <span class="code">int j=1; j++;</span>运行后<span class="code">j==</span
      ><Underline>2</Underline>
    </li>
    <li>
      <span class="code"
        >int m=2; !(m&lt;1) && !(m&gt;3)==<Underline>1</Underline></span
      >
    </li>
    <li>
      <span class="code"
        >int a[][2]=&lbrace;{ 1,3 },{2,4}&rbrace; a[1][1]==</span
      ><Underline>4</Underline>
    </li>
    <li>
      <span class="code">char str[]="QWERT"; str[1]==</span
      ><Underline>'W'</Underline>
    </li>
    <li>
      <span class="code">char names[3][4];</span>那么<span class="code"
        >names</span
      >包含<Underline>12</Underline>个char
    </li>
    <li>下列程序的运行结果为<Underline>7</Underline></li>
    <div class="code">
      <div>int d[]= {1,3,5,7};</div>
      <div>int *pd=d;</div>
      <div>printf("%d", pd[3]);</div>
    </div>
    <li>
      已知half函数定义如下，那么<span class="code"
        >half(5)==<Underline>2</Underline></span
      >
    </li>
    <div class="code">
      <div>int half(int a)</div>
      <Block>return a/2;</Block>
    </div>
    <li>
      已知abs函数的定义如下，那么<span class="code">abs(-3)==</span
      ><Underline>3</Underline>
    </li>
    <div class="code">
      <Function function-name="abs" parameters="int m" return-type="int">
        <IfElse condition="m < 0">
          <template #ifStatement
            ><SingleStatement>return -m;</SingleStatement></template
          >
          <template #elseStatement
            ><SingleStatement>return m;</SingleStatement></template
          >
        </IfElse>
      </Function>
    </div>
    <li>下列程序的运行结果为<Underline>5</Underline></li>
    <div class="code">
      <Function function-name="inc" parameters="int *x" return-type="void">
        *x = *x+1;
      </Function>
      <Function function-name="main" parameters="" return-type="int">
        <div>int y = 4;</div>
        <div>inc(&y);</div>
        <div>printf("%d", y);</div>
      </Function>
    </div>
    <li>下列程序的运行结果为<Underline>87</Underline></li>
    <div class="code">
      <Structure id="student">
        <div>int id;</div>
        <div>int mark;</div>
      </Structure>
      <div>struct student lisi={ 10, 87 };</div>
      <div>printf("%d", lisi.mark);</div>
    </div>

    <PageBreak />

    <li>下列程序的运行结果为<Underline>96</Underline></li>
    <div class="code">
      <div>struct student s={5, 90};</div>
      <div>struct student *t=&amp;s;</div>
      <div>t->mark=96;</div>
      <div>printf("%d", s.mark);</div>
    </div>
    <li>填入正确的表达式，使ph指向h</li>
    <div class="code">
      <div>double h=5.5;</div>
      <div>double *ph=<Underline>&amp;h</Underline>;</div>
    </div>
  </ol>
</template>

<style scoped></style>
