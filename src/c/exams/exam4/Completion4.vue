<script setup lang="ts">
import Function from '@/c/components/Function.vue';
import Structure from '@/c/components/Structure.vue';
import Underline from '@/c/exams/template/Underline.vue';
import PageBreak from '@/c/exams/template/PageBreak.vue';
</script>

<template>
  <ol>
    <li>
      <span class="code">printf("%s", "DEF");</span>的运行结果是<Underline
        >DEF</Underline
      >
    </li>
    <li>
      <span class="code">5/2*5==<Underline>10</Underline></span>
    </li>
    <li>
      <span class="code">4-3%2==<Underline>3</Underline></span>
    </li>
    <li>
      整数类型按照范围从大到小排序：<span class="code"
        ><Underline>long</Underline> &ge; int &ge; short &ge; char</span
      >
    </li>
    <li>
      <span class="code"
        >int m=2; !(m&lt;1) || !(m&gt;3)==<Underline>1</Underline></span
      >
    </li>
    <li>
      <span class="code"
        >int points[][2]=&lbrace;{ 1,3 },{2,4}&rbrace; points[0][1]==</span
      ><Underline>3</Underline>
    </li>
    <li>
      <span class="code">char *str="c language"; *str==</span
      ><Underline>'c'</Underline>
    </li>

    <li>char *s="BCD"; s[2]==<Underline>'D'</Underline></li>
    <li>
      <span class="code">int P[5][4];</span>那么
      <span class="code">P</span>包含<Underline>20</Underline>个int
    </li>
    <li>下列程序的运行结果为<Underline>4</Underline></li>
    <div class="code">
      <div>void third(int *p){ printf("%d",p[3]); }</div>
      <div>int main(){</div>
      <div class="indent">
        <div>int a[5]={1,2,3,4,5};</div>
        <div>third(a);</div>
        <div>return 0;</div>
      </div>
      }
    </div>
    <li>下列程序的运行结果是<Underline>3</Underline></li>
    <div class="code">
      <div>s=0;</div>
      <div>while (s<3){</div>
      <div class="indent">s+=1;</div>
      <div>}</div>
      <div>printf("%d", s);</div>
    </div>
    <li>下列程序的运行结果是<Underline>odd</Underline></li>
    <div class="code">
      <div>int t=3;</div>
      <div>if (t%2!=0)</div>
      <div class="indent">puts("odd");</div>
      <div>else</div>
      <div class="indent">puts("even");</div>
    </div>
    <li>下列程序的执行结果为<Underline>6</Underline></li>
    <div class="code">
      <Function function-name="inc" parameters="int *x" return-type="void">
        *x = *x+3;
      </Function>
      <Function function-name="main" parameters="" return-type="int">
        <div>int y = 3;</div>
        <div>inc(&y);</div>
        <div>printf("%d", y);</div>
      </Function>
      <PageBreak />
    </div>

    <li>填入正确的单词与符号，使程序运行后<span class="code">s.mark==90</span></li>
    <div class="code">
      <Structure id="student">
        <div>int id;</div>
        <div>int mark;</div>
      </Structure>
      <div>struct student s={5, 80};</div>
      <div>struct student *t=<Underline>&s</Underline>;</div>
      <div>t->mark=90;</div>
    </div>
    <li>填入正确的单词与符号，使程序运行后<span>h==6.8</span></li>
    <div class="code">
      <div>double h=5.5;</div>
      <div>double <Underline>*p</Underline>=&amp;h;</div>
      <div>*p=6.8;</div>
    </div>
  </ol>
</template>

<style scoped></style>
