<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
import CodeBlock from '@/components/CodeBlock.vue'
</script>

<template>
  <Slide title="scanf">
    <CodeBlock>
      int a;<br />
      float b;<br />
      char c;<br />
      printf("a=<span class="int">%d</span>, b=<span class="float">%f</span>, c=<span class="char"
        >%c</span
      >, <span class="int">&a</span>, <span class="float">&b</span>, <span class="char">&c</span>);
    </CodeBlock>
    <p>scanf中，变量名左边必须加上&运算符</p>
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
