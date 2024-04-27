<script setup lang="ts">
import Slide from '@/Slide.vue';
import IfElse from '@/c/components/IfElse.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Block from '@/c/components/Block.vue';
</script>

<template>
  <Slide topic="函数的定义">
    <div class="definition">
      <span>函数头</span>
      <span>函数体</span>
      <div class="code header">
        <ruby>int<rt>返回类型</rt></ruby>
        <ruby>max2<rt>函数名</rt></ruby> (<ruby>int a<rt>形式参数</rt></ruby
        >, <ruby>int b<rt>形式参数</rt></ruby
        >)
      </div>
      <div class="code">
        <Block class="body">
          <IfElse condition="a>b">
            <template #ifStatement>
              <SingleStatement>return a;</SingleStatement>
            </template>
            <template #elseStatement>
              <SingleStatement>return b;</SingleStatement>
            </template>
          </IfElse>
        </Block>
      </div>
    </div>
  </Slide>
</template>

<style scoped>
.definition {
  display: grid;
  grid-template: auto auto / auto auto;
  grid-auto-flow: column;
}
.header {
  background: chocolate;
}
.body {
  background: bisque;
}
</style>
