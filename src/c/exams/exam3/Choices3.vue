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
    <MultipleChoices :choices="['%s', '%c', '%d', '%f']">
      <template #default
        ><span class="code"
          >printf("<Underline>A</Underline>", "2024");</span
        ></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['@n', '&n', '^n', '#n']">
      <template #default>
        <span class="code">int n; scanf("%d", <Underline>B</Underline>);</span>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['index', 'inn', 'into', 'int']">
      <template #default>
        <span class="code"><Underline>D</Underline> a=0;</span>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['origin', 'for', 'while', 'if']">
      <template #default>
        <span class="code">double <Underline>A</Underline>=0.0;</span>
      </template>
    </MultipleChoices>

    <PageBreak />
    <MultipleChoices :choices="['2.5U', '2.5', '2.5D', '2.5L']">
      <template #default
        ><span class="code">double b=</span><Underline>B</Underline>;</template
      >
    </MultipleChoices>

    <!-- ABDAB CCACB ACADC !-->
    <MultipleChoices :choices="['char', 'short', 'long', 'signed']">
      <Underline>C</Underline
      ><span class="code">huge_number=2147483647;</span>选择最恰当的选项
    </MultipleChoices>

    <MultipleChoices :choices="['long', 'double', 'char', 'float']">
      <template #default>
        <span class="code"><Underline>C</Underline> ch = 'A';</span
        >选择最恰当的选项
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['double', 'int', 'long', 'float']">
      <template #default>
        <span class="code"
          ><Underline>A</Underline> pi=3.1415926535897932384626433;</span
        >选择最恰当的选项
      </template>
    </MultipleChoices>

    <MultipleChoices
      :choices="[
        '-4<=n<=-1',
        'n>=-4 ** n<=-1',
        'n>=-4 && n<=-1',
        'n>=-4 %% n<=-1',
      ]"
    >
      <template #default
        ><span class="code">int n=-2;</span
        >那么<Underline>C</Underline>==1</template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['0', '2', '3', '5']">
      <template #default>下列程序的运行结果是<Underline>B</Underline></template>
      <template #content
        ><div class="code">
          <div>int p=5, q=3*p+2;</div>
          <div>printf("%d", q%3);</div>
        </div></template
      >
    </MultipleChoices>

    <!-- ABDAB CCACB ACADC !-->
    <MultipleChoices :choices="['low', 'medium', 'high', 'ultra']">
      <template #default>下列程序的运行结果是<Underline>A</Underline></template>
      <template #content
        ><div class="code">
          <div>int m=10000;</div>
          <div>if (m<=10000) {</div>
          <div class="indent">puts("low");</div>
          <div>} else if (m<=20000) {</div>
          <div class="indent">puts("medium");</div>
          <div>} else {</div>
          <div class="indent">puts("high");</div>
          <div>}</div>
        </div></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['2', '4', '5', '6']">
      <template #default>填哪个数，使该程序运行结果为odd？</template>
      <template #content
        ><div class="code">
          <div>int n=<Underline>C</Underline>;</div>
          <div>if (n%2 == 1) {</div>
          <div class="indent">puts("odd");</div>
          <div>}else{</div>
          <div class="indent">puts("even");</div>
          <div>}</div>
        </div></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['{3,4}', '[3,4]', '(3,4)', '<3,4>']">
      <template #default>
        <span class="code">int coordinate[2]=<Underline>A</Underline>;</span>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['1', '4', '5', '3']">
      <template #default>
        <span class="code"
          >int d={1,4,5,3}; 那么<span class="code"
            >d[3]==<Underline>D</Underline></span
          ></span
        >
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['22', '25', '30', '33']">
      <template #default>
        <span class="code"
          >char languages[3][10]={ "Chinese", "English", "Japanese" };</span
        >
        那么<span class="code">languages</span
        >包含<Underline>C</Underline>个char
      </template>
    </MultipleChoices>
    <PageBreak />
  </ol>
</template>

<style scoped></style>
