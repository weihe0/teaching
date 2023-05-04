<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
import CodeBlock from '@/components/CodeBlock.vue'
</script>

<template>
  <Slide title="C程序的基本结构">
    <CodeBlock
      >#include&nbsp;&lt;stdio.h&gt;<br />
      int&nbsp;main()<br />
      {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;printf(&quot;hello,&nbsp;world\n&quot;);<br />
      &nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;0;<br />
      }
    </CodeBlock>
  </Slide>
</template>

<style scoped></style>
