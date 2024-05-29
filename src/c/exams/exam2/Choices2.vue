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
      <template #default
        ><span class="code"
          >printf("<Underline>A</Underline>", 2024.0f);</span
        ></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['==', '=', '=>', '<=']">
      <template #default
        ><span class="code">int i<Underline>B</Underline>0;</span></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['2', '5', '8', '1']">
      <template #default>
        <span class="code">int n; scanf("%d", &n);</span>
      </template>
      <template #content
        ><div>
          如果用户输入1，那么<span class="code"
            >n==<Underline>D</Underline></span
          >
        </div></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['offset', 'for', 'while', 'if']">
      <template #default
        ><span class="code"
          >float <Underline>A</Underline>=0.0f;</span
        ></template
      >
    </MultipleChoices>

    <PageBreak />
    <MultipleChoices :choices="['1#5', '1.5', '1@5', '1_5']">
      <template #default
        ><span class="code">double b=</span><Underline />;</template
      >
    </MultipleChoices>

    <!-- ABDAB CCACB ACADC !-->
    <MultipleChoices :choices="['char', 'short', 'long', 'unsigned']">
      <Underline>C</Underline
      ><span class="code">very_large_number=2147483647;</span>
    </MultipleChoices>

    <MultipleChoices :choices="['0.0f', '1.5f', '1.0f', '2.0f']">
      <template #default>
        <span class="code">float c; c=3/2;</span>那么<span class="code"
          >c==</span
        ><Underline>C</Underline>;
      </template>
    </MultipleChoices>

    <MultipleChoices
      :choices="[
        'n>=-5 && n<=-1',
        '-5<=n<=-1',

        'n>=-5 ** n<=-1',
        'n>=-5 %% n<=-1',
      ]"
    >
      <template #default
        ><span class="code">int n=-3;</span
        >那么<Underline>A</Underline>==1</template
      >
    </MultipleChoices>

    <MultipleChoices
      :choices="['iron_shovel', 'iron_pickaxe', 'iron_axe', 'others']"
    >
      <template #default>下列程序的运行结果是<Underline>C</Underline></template>
      <template #content>
        <div class="code">
          <div>int item_id=258;</div>
          <div>switch (item_id)</div>
          <Block>
            <div>case 256: puts("iron_shovel"); break;</div>
            <div>case 257: puts("iron_pickaxe"); break;</div>
            <div>case 258: puts("iron_axe"); break;</div>
            <div>default: puts("others"); break;</div>
          </Block>
        </div>
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['i<99', 'i<100', 'i<101', 'i<102']">
      <template #default>下划线填哪个，能输出1到99的整数？</template>
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
          >int array<Underline>A</Underline>={5,4,3,2,1};</span
        ></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['4', '3', '2', '1']">
      <template #default
        ><span class="code"
          >int d={4,3,2,1}; 那么<span class="code">d[2]==</span
          ><Underline>C</Underline></span
        ></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['15', '9', '11', '8']">
      <template #default>
        <span class="code">char languages[3][5]={ "Java", "C", "C++" };</span>
        那么<span class="code">languages</span
        >包含<Underline>A</Underline>个char
      </template>
    </MultipleChoices>

    <MultipleChoices :choices="['1', '3', '6', '9']">
      <template #default>
        调用<span class="code">triple(3)</span>，运行结果为<Underline
          >D</Underline
        >
      </template>
      <template #content
        ><div class="code">
          <div>void triple(int n)</div>
          <Block>
            <div>printf("%d", 3*n);</div>
          </Block>
        </div></template
      >
    </MultipleChoices>

    <MultipleChoices :choices="['y=3', '3', 'y=2', '2']">
      <template #default>下列程序的运行结果是<Underline>C</Underline></template>
      <template #content
        ><div class="code">
          <Function function-name="add" parameters="int x" return-type="int">
            return x+1;
          </Function>

          <Function function-name="main" parameters="" return-type="int">
            <div>int y=2;</div>
            <div>printf("y=%d", add(y));</div>
            <div>return 0;</div>
          </Function>
        </div></template
      >
    </MultipleChoices>
    <PageBreak />
  </ol>
</template>

<style scoped></style>
