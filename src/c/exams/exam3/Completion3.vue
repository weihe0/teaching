<script setup lang="ts">
import Function from '@/c/components/Function.vue';
import Structure from '@/c/components/Structure.vue';
import Underline from '@/c/exams/template/Underline.vue';
import PageBreak from '@/c/exams/template/PageBreak.vue';
</script>

<template>
  <ol>
    <li>
      <span class="code">printf("%d", 1+2);</span>的运行结果是<Underline
        >3</Underline
      >
    </li>
    <li><span class="code">5/2*2==</span><Underline>4</Underline></li>
    <li><span class="code">10%3+1==</span><Underline>2</Underline></li>
    <li>
      表达式 <span class="code">'A'=='B'</span>的值为<Underline>0</Underline>
    </li>
    <li>strlen("ABCDE")==<Underline>5</Underline></li>
    <li>
      <span class="code">long a[]={6L, 4L, 5L};</span
      >那么a包含<Underline>3</Underline>个long
    </li>

    <li>
      <span class="code"
        >char str[]="YEAR"; str[3]==<Underline>'R'</Underline>;</span
      >
    </li>
    <li>
      <span class="code">char titles[3][4];</span>那么<span class="code"
        >titles</span
      >包含<Underline>12</Underline>个char
    </li>
    <li>
      <span class="code"
        >int matrix[2][2]=&lbrace;{ 2,4 },{3,6}&rbrace;; matrix[0][1]==</span
      ><Underline>4</Underline>;
    </li>
    <li>
      <span class="code">triple</span>的定义如下，那么<span class="code"
        >triple(2)==<Underline>6</Underline>;</span
      >
    </li>
    <div class="code">
      <div>int triple(int n){</div>
      <div class="indent">return 3*n;</div>
      <div>}</div>
    </div>

    <li>下列程序的运行结果为<Underline>7</Underline></li>
    <div class="code">
      <div>int d[]= {8,9,7,5};</div>
      <div>int *pd=d;</div>
      <div>printf("%d", pd[2]);</div>
    </div>

    <li>下列程序的运行结果为<Underline>2</Underline></li>
    <div class="code">
      <Function function-name="plus" parameters="int x" return-type="void">
        <div>x=x+2;</div>
      </Function>

      <Function function-name="main" parameters="" return-type="int">
        <div>int n=2;</div>
        <div>plus(n);</div>
        <div>printf("%d", n);</div>
        <div>return 0;</div>
      </Function>
    </div>

    <li>
      已知suffix函数的定义如下，那么调用<span class="code">suffix(3)</span
      >后屏幕显示<Underline>3rd</Underline>
    </li>
    <div class="code">
      <Function function-name="suffix" parameters="int n" return-type="void">
        <div>switch(n) {</div>
        <div class="indent">
          <div>case 1: printf("1st"); break;</div>
          <div>case 2: printf("2nd"); break;</div>
          <div>case 3: printf("3rd"); break;</div>
          <div>default: printf("%dth", n);</div>
        </div>
        <div>}</div>
      </Function>
    </div>

    <PageBreak />

    <li>下列程序的运行结果为<Underline>10</Underline></li>
    <div class="code">
      <Structure id="point">
        <div>int x;</div>
        <div>int y;</div>
      </Structure>
      <div>struct point p={ 4, 6 };</div>
      <div>printf("%d", p.x+p.y);</div>
    </div>

    <li>填入正确的表达式，使p指向g</li>
    <div class="code">
      <div>float g=9.8f;</div>
      <div>float *p=<Underline>&amp;g</Underline>;</div>
    </div>
  </ol>
</template>

<style scoped></style>
