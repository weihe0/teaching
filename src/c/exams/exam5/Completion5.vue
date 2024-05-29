<script setup lang="ts">
import Function from '@/c/components/Function.vue';
import Structure from '@/c/components/Structure.vue';
import Underline from '@/c/exams/template/Underline.vue';
import PageBreak from '@/c/exams/template/PageBreak.vue';
import Block from '@/c/components/Block.vue'
</script>

<template>
  <ol>
    <li>
            <span class="code">printf("%c", '0');</span
            >的运行结果是<Underline>0</Underline>
    </li>
    <li><span class="code">5/2*4==<Underline>8</Underline></span></li>
    <li><span class="code">10/3-10%3==<Underline>2</Underline></span></li>
    <li>
      <span class="code">int j=1; j+=2;</span>运行后<span class="code"
    >j==<Underline>3</Underline></span
    >
    </li>
    <li>
      <span class="code">int m=5; !(m<1 || m>9)==<Underline>1</Underline></span>
    </li>
    <li>
      <span class="code">int a[]={5,4,3,2,1}; a[2]==<Underline>3</Underline></span>
    </li>
    <li>
      <span class="code">char *str="BCD"; *str==<Underline>'B'</Underline></span>
    </li>
    <li>
            <span class="code"
            >int tetris=&lbrace;{-1,0},{0,0},{1,0},{2,0}&rbrace;;
              tetris[0][1]==<Underline>0</Underline></span>
    </li>
    <li>
      <span class="code">char d[5][4];</span>那么<span class="code"
    >d</span
    >包含<Underline>20</Underline>个char
    </li>
    <li>下列程序的运行结果为<Underline>a=6</Underline></li>
    <div class="code">
      <div>int second(int *p){</div>
      <div class="indent">return p[2];</div>
      <div>}</div>
      <div>int main(){</div>
      <div class="indent">
        <div>int a[4]={2,4,6,8};</div>
        <div>printf("a=%d", second(a));</div>
        <div>return 0;</div>
      </div>
      <div>}</div>
    </div>
    <li>
      已知one_half函数定义如下，那么<span class="code"
    >one_half(7)==<Underline>10</Underline></span>
    </li>
    <div class="code">
      <div>int one_half(int a)</div>
      <Block>return a+a/2;</Block>
    </div>

    <li>下列程序的运行结果为<Underline>12</Underline></li>
    <div class="code">
      <Function
        function-name="inc"
        parameters="int *x"
        return-type="void"
      >
        *x = *x+10;
      </Function>
      <Function function-name="main" parameters="" return-type="int">
        <div>int y = 2;</div>
        <div>inc(&y);</div>
        <div>printf("%d", y);</div>
      </Function>
    </div>
    <li>下列程序的运行结果为<Underline>20</Underline></li>
    <div class="code">
      <Structure id="student">
        <div>int id;</div>
        <div>int mark;</div>
      </Structure>
      <div>struct student s={ 20, 80 };</div>
      <div>printf("%d", s.id);</div>
    </div>

    <PageBreak />
    <li>下列程序的运行结果为<Underline>(2,3)</Underline></li>
    <div class="code">
      <div>struct coordinate{</div>
      <div class="indent">int x;</div>
      <div class="indent">int y;</div>
      <div>};</div>
      <div>struct coordinate p={2,1};</div>
      <div>struct coordinate *q=&amp;p;</div>
      <div>q->y=3;</div>
      <div>printf("(%d,%d)", p.x, p.y);</div>
    </div>
    <li>填入正确的单词，使程序运行后g==10.2f</li>
    <div class="code">
      <div>float g=9.7f;</div>
      <div><Underline>float</Underline> *p=&amp;g;</div>
      <div>*p+=0.5f;</div>
    </div>
  </ol>
</template>

<style scoped></style>
