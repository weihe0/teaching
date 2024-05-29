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
    <MultipleChoices :choices="['%s', '%z', '%j', '%d']">
      printf("<Underline>A</Underline>", "2024");
    </MultipleChoices>

    <MultipleChoices :choices="['inn', 'unsigned int', 'lung', 'floating']">
      <span class="code"><Underline>B</Underline> a=0;</span>
    </MultipleChoices>

    <MultipleChoices :choices="['%d', '/d', '@d', '&d']">
      <span class="code">int d; scanf("%d", <Underline>D</Underline>);</span>
    </MultipleChoices>

    <MultipleChoices :choices="['offset', 'for', 'while', 'if']">
      <span class="code">float <Underline>A</Underline>=2.5f;</span>
    </MultipleChoices>

    <PageBreak />

    <MultipleChoices :choices="['1.5U', '1.5', '1.5R', '1.5L']">
      <span class="code">double b=<Underline>B</Underline></span
      >;
    </MultipleChoices>

    <!-- ABDAB CCACB ACADC !-->
    <MultipleChoices :choices="['char', 'short', 'long', 'unsigned']">
      <span class="code"><Underline>C</Underline> huge_number=2147483647;</span
      >选择最恰当的选项
    </MultipleChoices>

    <MultipleChoices :choices="['0', '1.5', '1', '2']">
      <span class="code">float c; c=3/2;</span>那么<span class="code">c==</span
      ><Underline>C</Underline>;
    </MultipleChoices>

    <MultipleChoices
      :choices="[
        'n>=-5 && n<=-1',
        'n>=-5 ** n<=-1',
        'n>=-5 %% n<=-1',
        '-5<=n<=-1',
      ]"
    >
      <span class="code">int n=-3;</span>那么<Underline>A</Underline>==1
    </MultipleChoices>

    <MultipleChoices :choices="['floor=0', 'floor=1', 'floor>=2', '1']">
      <template #default>下列程序的运行结果是<Underline>C</Underline></template>
      <template #content>
        <div class="code">
          <div>int e=2;</div>
          <div>if (e<1) {</div>
          <div class="indent">printf("floor=0");</div>
          <div>}else if(e<2){</div>
          <div class="indent">printf("floor=1");</div>
          <div>}else{</div>
          <div class="indent">printf("floor>=2");</div>
          }
        </div>
      </template>
    </MultipleChoices>

    <MultipleChoices
      :choices="['i^2<=1000', 'i*i<=1000', 'i**2<=1000', 'i<=1000']"
    >
      <template #default
        >下划线选哪个，输出满足i<sup>2</sup>&le;1000条件的i？</template
      >
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
      <span class="code">int array<Underline>A</Underline>={5,4,3,2,1};</span>
    </MultipleChoices>

    <MultipleChoices :choices="['2', '3', '5', '8']">
      <span class="code"
        >int d={2,3,5,8}; 那么<span class="code">d[2]==</span
        ><Underline>C</Underline></span
      >
    </MultipleChoices>

    <MultipleChoices :choices="['36', '28', '31', '29']">
      <span class="code"
        >char books[3][12]={ "Sager_king", "twin_city", "Miserable" };</span
      >
      那么<span class="code">books</span>包含<Underline>A</Underline>个char
    </MultipleChoices>

    <MultipleChoices :choices="['s=5', '5', 's=10', '10']">
      <template #default>下列程序的运行结果是<Underline>D</Underline></template>
      <template #content>
        <div class="code">
          <div>int i, s=0;</div>
          <div>for(i=0;i<5;i++)</div>
          <div class="indent">s+=i;</div>
          <div>printf("%d", s);</div>
        </div>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['y=2', '2', 'y=20', '20']">
      <template #default>下列程序的运行结果是<Underline>C</Underline></template>
      <template #content>
        <div class="code">
          <Function
            function-name="multiply"
            parameters="int x"
            return-type="int"
          >
            return x*10;
          </Function>

          <PageBreak />

          <Function function-name="main" parameters="" return-type="int">
            <div>int y=2;</div>
            <div>printf("y=%d", multiply(y));</div>
            <div>return 0;</div>
          </Function>
        </div>
      </template>
    </MultipleChoices>
  </ol>
</template>

<style scoped></style>
