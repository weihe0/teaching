<script setup lang="ts">
import Background from '@/c/exams/template/Background.vue';
import Side from '@/c/exams/template/Side.vue';
import ExamHeader from '@/c/exams/template/ExamHeader.vue';
</script>

<template>
  <div class="exam">
    <Background />
    <div class="front">
      <Side />
      <div class="questions">
        <ExamHeader />
        <p><em>试题中所有的表达式都是C语言的表达式，不是数学算式</em></p>
        <h2>判断题，每题2分，共10题，合计20分</h2>
        <slot name="judgements"></slot>

        <h2>单选题，每题2分，共15题，合计30分</h2>
        <p><em>答案写在下划线上</em></p>
        <slot name="choices"></slot>

        <h2>填空题，每题2分，共15题，合计30分</h2>
        <p><em>请写最简单的答案，例如不要写1+2，要写成3</em></p>
        <slot name="completion"></slot>
        <h2>编程题，每题10分，共2题，合计20分</h2>
        <slot name="programming"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
em {
  font-family: sans-serif;
  font-weight: bold;
}
.exam {
  display: grid;
}
.exam > * {
  grid-area: 1/1/2/2;
}
h2 {
  font-family: sans-serif;
  display: list-item;
  list-style-type: simp-chinese-informal;
  list-style-position: inside;
}
@font-face {
  font-family: clang;
  unicode-range: U+22, U+27;
  src: local('Times New Roman');
}
.questions {
  font-family: clang, serif;
  margin: 0 1em;
}
@page {
  size: a4;
  margin: 0.5in;
}
</style>
<style>
li {
  margin-top: 1ex;
  list-style-position: inside;
}
ol {
  padding: 0;
}
span.code {
  margin-right: 1ex;
}
</style>
