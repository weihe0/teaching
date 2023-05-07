<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import Slide from '@/layouts/Slide.vue'
import { onMounted, reactive } from 'vue'
const partial = reactive({ format: '', output: '' })
const format = 'a=%d, b=%f, c=%c'
const values: string[] = ['10', '0.5', 'A']
const anime = (function* () {
  while (true) {
    partial.format = ''
    partial.output = ''
    let i = 0,
      j = 0
    while (i < format.length) {
      if (format[i] === '%') {
        partial.format += format.slice(i, i + 2)
        i += 2
        yield
        partial.output += values[j]
        j++
        yield
      } else {
        partial.format += format[i]
        partial.output += format[i]
        i++
        yield
      }
    }
    yield
  }
})()
onMounted(() => {
  setInterval(() => {
    anime.next()
  }, 1000)
})
</script>

<template>
  <Slide title="printf的执行过程">
    <CodeBlock>
      int a = 10;<br />
      float b = 0.5;<br />
      char c = 'A';<br />
      printf("a=%d, b=%f, c=%c", a, b, c);
    </CodeBlock>
    <p>
      <code>格式：{{ partial.format }}</code
      ><br /><samp>输出：{{ partial.output }}</samp>
    </p>
  </Slide>
</template>

<style scoped></style>
