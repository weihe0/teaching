<script setup lang="ts">
import Block from '@/c/components/Block.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Underline from '@/c/exams/template/Underline.vue';
import MultipleChoices from '@/c/exams/template/MultipleChoices.vue';
import PageBreak from '@/c/exams/template/PageBreak.vue';
</script>

<template>
  <!-- ABDAB CCACB ACADC !-->
  <ol>
    <MultipleChoices :choices="['%d', '%b', '%r', '%y']">
      <template #default
        ><span class="code"
          >printf("<Underline>A</Underline>", 2024);</span
        ></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['^n', '&n', '@n', '$n']">
      <template #default
        ><span class="code"
          >int n; scanf("%d", <Underline>B</Underline>);</span
        ></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['internet', 'integer', 'integral', 'int']">
      <template #default
        ><Underline>D</Underline><span class="code">i = 0;</span></template
      >
    </MultipleChoices>

    <PageBreak />

    <MultipleChoices :choices="['on', 'for', 'while', 'if']">
      <template #default
        ><span class="code"
          >float <Underline>A</Underline>=0.0f;</span
        ></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['1#5', '1.5', '1@5', '1_5']">
      <template #default
        ><span class="code">double b=</span><Underline>B</Underline>;</template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['large', 'big', 'long', 'huge']">
      <Underline>C</Underline
      ><span class="code">very_large_number=2147483647;</span>
    </MultipleChoices>

    <MultipleChoices
      :choices="['2.5floating', '2.5float', '2.5f', '2.5floater']"
    >
      <template #default
        ><span class="code">float c=</span><Underline>C</Underline>;</template
      >
    </MultipleChoices>

    <MultipleChoices
      :choices="['n>=2 && n<=8', '2=<n=<8', '2<=n<=8', 'n>=2 || n<=8']"
    >
      <template #default>如何判断n在2到8之间？</template>
      <template #content>
        <div class="code">
          <div>if (<Underline>A</Underline>)</div>
          <SingleStatement>printf("2&lt;=n&lt;=8");</SingleStatement>
        </div>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['m=1', 'm==1', 'm!=1', 'm=2']">
      <template #default>下列程序的运行结果是<Underline>C</Underline></template>
      <template #content>
        <div class="code">
          <div>int m=2;</div>
          <div>switch (m)</div>
          <Block>
            <div>case 1: puts("m=1"); break;</div>
            <div>default: puts("m!=1"); break;</div>
          </Block>
        </div>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['i<100', 'i<=100', 'i=<100', 'i==100']">
      <template #default>下划线填哪个，能输出1到100的整数？</template>
      <template #content
        ><div class="code">
          <div>int i;</div>
          <div>for (i=1;<Underline>B</Underline>;i++)</div>
          <SingleStatement>printf("%d ", i);</SingleStatement>
        </div></template
      >
    </MultipleChoices>

    <!-- ABDAB CCACB ACADC !-->
    <MultipleChoices :choices="['[5]', '(5)', '{5}', '<5>']">
      <template #default
        ><span class="code"
          >int array<Underline>A</Underline>={1,2,3,4,5};</span
        ></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['1', '2', '3', '4']">
      <template #default
        ><span class="code"
          >int d={4,3,2,1}; 那么<span class="code">d[1]==</span
          ><Underline>C</Underline></span
        ></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['5', '4', '3', '2']">
      <template #default>
        <span class="code">int e[2][3]={ {1,2,3}, {4,5,6} };</span>
        那么<span class="code">e[1][1]==</span><Underline>A</Underline>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['int', 'n', 'n:int', 'int n']">
      <template #default>下划线填哪个？</template>
      <template #content>
        <div>void twice(<Underline>D</Underline>)</div>
        <Block>
          <div>printf("%d", 2*n);</div>
        </Block>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['3.14, 2', 'else', '1.57', '90\\3']">
      <template #default>
        有函数原型声明<span class="code">double sin(double x);</span
        >调用sin时，<span class="code">sin(<Underline>C</Underline>)</span>
        可以填哪个？
      </template>
    </MultipleChoices>
    <PageBreak />
  </ol>
</template>

<style scoped></style>
