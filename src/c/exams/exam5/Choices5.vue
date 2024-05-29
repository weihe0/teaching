<script setup lang="ts">
import Block from '@/c/components/Block.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Underline from '@/c/exams/template/Underline.vue';
import MultipleChoices from '@/c/exams/template/MultipleChoices.vue';
import PageBreak from '@/c/exams/template/PageBreak.vue';
import Function from '@/c/components/Function.vue';
</script>

<template>
  <ol>
    <!-- ABDAB CCACB ACADC !-->
    <MultipleChoices :choices="['%f', '%a', '%z', '%j']">
      <span class="code">printf("<Underline>A</Underline>", 2020+4.0);</span>
    </MultipleChoices>

    <MultipleChoices :choices="['==', '=', '=>', '<=']">
      <span class="code">int i<Underline>B</Underline>0;</span>
    </MultipleChoices>

    <MultipleChoices :choices="['a', '^a', '*a', '&a']">
      <span class="code">int a; scanf("%d", <Underline>D</Underline>);</span>
    </MultipleChoices>

    <MultipleChoices :choices="['to', 'do', 'for', 'if']">
      <span class="code">double <Underline>A</Underline>=0.0;</span>
    </MultipleChoices>

    <PageBreak />

    <MultipleChoices :choices="['2.5e', '2.5f', '2.5g', '2.5h']">
      <span class="code">float b=<Underline>B</Underline></span>;
    </MultipleChoices>

    <!-- ABDAB CCACB ACADC !-->
    <MultipleChoices :choices="['char', 'float', 'long', 'short']">
      <Underline>C</Underline><span class="code">big_number=2147483647;</span
    >选择最合适的选项
    </MultipleChoices>

    <MultipleChoices :choices="['long double', 'double', 'char', 'float']">
      <span class="code"><Underline>C</Underline> ch='1';</span>选择最合适的选项
    </MultipleChoices>

    <MultipleChoices
      :choices="['float', 'int', 'double', 'long']"
    >
      <span class="code"><Underline>A</Underline> d=3.0f;</span>选择最合适的选项
    </MultipleChoices>

    <MultipleChoices :choices="['0.5', '1.0', '1.5', '2.0']">
      <span class="code">(double)3/2==<Underline>C</Underline></span>
    </MultipleChoices>

    <MultipleChoices
      :choices="[
              '-5<=n<=0',
              'n>=-5 && n<=0',
              'n>=-5 ** n<=0',
              'n>=-5 %% n<=0',
            ]"
    ><span class="code">int n=-2;</span>那么<Underline>B</Underline>==1</MultipleChoices>

    <!-- ABDAB CCACB ACADC !-->

    <MultipleChoices :choices="['main ', 'start ', 'main start ', 'start main ']">
      <template #default>
        下列程序的运行结果是<Underline>A</Underline>
      </template>
      <template #content>
        <div class="code">
          <div>int start(){</div>
          <div class="indent">printf("start "); return 0;</div>
          <div>}</div>
          <div>int main(){</div>
          <div class="indent">printf("main "); return 0;</div>
          <div>}</div>
        </div>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['low', 'middle', 'high', 'extra']">
      <template #default>
        下列程序的运行结果是<Underline>C</Underline>
      </template>
      <template #content>
        <div class="code">
          <div>int s=20000;</div>
          <div>if (s<5000){</div>
          <div class="indent">puts("low");</div>
          <div>}else if(s<20000){</div>
          <div class="indent">puts("middle");</div>
          <div>}else{</div>
          <div class="indent">puts("high");</div>
          <div>}</div>
        </div>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['aaaa', 'aaa', 'aa', 'a']">
      <template #default>下列程序的运行结果是<Underline>A</Underline></template>
      <template #content>
        <div class="code">
          <div>int i;</div>
          <div>for(i=0;i<4;i++)</div>
          <div class="indent">putchar('a');</div>
        </div>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['zero', 'one', 'two', 'not learned']">
      <template #default>下列程序的运行结果是<Underline>D</Underline></template>
      <template #content>
        <div class="code">
          <div>int m=4;</div>
          <div>switch (m){</div>
          <div class="indent">
            <div>case 0: puts("zero"); break;</div>
            <div>case 1: puts("one"); break;</div>
            <div>case 2: puts("two"); break;</div>
            <div>default: puts("not learned");</div>
          </div>
          <div>}</div>
        </div>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['(1,1)', '[1,1]', '{1,1}', '<1,1>']">
      <span class="code">int point[2]=<Underline>C</Underline>;</span>
    </MultipleChoices>
  </ol>
</template>

<style scoped></style>
