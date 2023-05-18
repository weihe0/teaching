<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import Slide from '@/layouts/Slide.vue'
import { onMounted, reactive } from 'vue'
const partial = reactive({ format: '', input: '' })
const format = 'a=%d, b=%f, c=%c'
const input = 'a=, b=, c='
const values: string[] = ['10', '0.5', 'A']
const variables = reactive(['', '', ''])
const anime = (function* () {
  while (true) {
    partial.format = ''
    partial.input = ''
    for (let k = 0; k < variables.length; k++) {
      variables[k] = ''
    }
    let i = 0,
      j = 0,
      k = 0
    while (i < format.length) {
      if (format[i] === '%') {
        partial.format += format.slice(i, i + 2)
        i += 2
        yield
        for (let ch of values[k]) {
          partial.input += ch
          yield
        }
        variables[k] = values[k]
        k++
      } else {
        partial.format += format[i]
        partial.input += format[i]
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
  <Slide title="scanf的执行过程">
    <CodeBlock>
      int a = 10;<br />
      float b = 0.5;<br />
      char c = 'A';<br />
      scanf("a=%d, b=%f, c=%c", &a, &b, &c);
    </CodeBlock>
    <p>
      格式：<code>{{ partial.format }}</code
      ><br />
      输出：<samp>{{ partial.input }}</samp
      ><br />
      变量：<var
        >a<span class="region">{{ variables[0] }}</span> b<span class="region">{{
          variables[1]
        }}</span>
        c<span class="region">{{ variables[2] }}</span>
      </var>
    </p>
  </Slide>
</template>

<style scoped>
.region {
  display: inline-block;
  min-width: 1em;
  min-height: 2ex;
  border: solid black 1px;
  margin: 0 0.5em;
}
</style>
