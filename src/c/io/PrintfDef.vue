<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
import CodeBlock from '@/components/CodeBlock.vue'
</script>

<template>
  <Slide title="printf">
    <CodeBlock>
      int a = 10;<br />
      float b = 0.5;<br />
      char c = 'A';<br />
      printf("a=<span class="int">%d</span>, b=<span class="float">%f</span>, c=<span class="char"
        >%c</span
      >, <span class="int">a</span>, <span class="float">b</span>, <span class="char">c</span>);
    </CodeBlock>
    输出：<samp>10, 0.5, A</samp>
    <p>输出的格式必须与变量的类型匹配</p>
  </Slide>
</template>

<style scoped>
.int {
  color: saddlebrown;
}
.float {
  color: indianred;
}
.char {
  color: darkorange;
}
</style>
