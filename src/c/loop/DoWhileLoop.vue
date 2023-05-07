<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import Slide from '@/layouts/Slide.vue'
import CodeBlock from '@/components/CodeBlock.vue'

const runStates = ref([false, false, false, false, false])
const runIndex = ref<number | null>(null)
watch(runIndex, (index, oldIndex) => {
  if (oldIndex !== null) {
    runStates.value[oldIndex] = false
  }
  if (index !== null) {
    runStates.value[index] = true
  }
})
const environment = reactive({ i: 0, s: 0 })

function* animationGenerator() {
  while (true) {
    runIndex.value = 0
    yield
    environment.i = 1
    yield
    do {
      runIndex.value = 1
      yield
      environment.s += environment.i
      yield
      runIndex.value = 2
      yield
      environment.i++
      yield
      runIndex.value = 3
      yield
      yield
    } while (environment.i <= 5)
    runIndex.value = 4
    yield
  }
}
let id = 0
const animation = animationGenerator()
onMounted(() => {
  id = setInterval(() => {
    animation.next()
  }, 1000)
})
onUnmounted(() => {
  clearInterval(id)
})
onMounted(() => {})
onUnmounted(() => {})
</script>
<template>
  <Slide title="do while循环">
    <div class="execution">
      <CodeBlock>
        <span>int s=0;</span><br />
        <span :class="{ running: runStates[0] }">int i=1;</span><br />
        <span>do {</span><br />
        <span :class="{ indent_1: true, running: runStates[1] }">s+=i;</span><br />
        <span :class="{ indent_1: true, running: runStates[2] }">i++</span><br />
        <span>} while (<span :class="{ running: runStates[3] }">i&lt;=5</span>);</span><br />
        <span :class="{ running: runStates[4] }">printf("%d", s);</span>
      </CodeBlock>
      <p class="environment">
        <span
          >i<span class="variable">{{ environment.i }}</span></span
        ><br />
        <span
          >s<span class="variable">{{ environment.s }}</span></span
        >
      </p>
    </div>
  </Slide>
</template>

<style scoped>
.slide {
  display: grid;
  grid-template-rows: 3em 12em;
  width: 90%;
}
.title {
  place-self: center;
}
.code {
  border: solid black 1px;
  font-family: monospace;
  width: 40%;
}
.indent_1 {
  margin-left: 4ex;
}
.running {
  background-color: green;
}
.execution {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.environment {
  padding: 1em 0;
  border: solid black 1px;
  width: 30%;
}
.variable {
  margin: 1em;
  border: solid black 1px;
}
</style>
