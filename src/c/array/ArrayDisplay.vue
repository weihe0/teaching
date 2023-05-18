<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import Slide from '@/layouts/Slide.vue'
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
const hide = ref(true)
const array = [10, 20, 40, 30, 15]
const visit = reactive([false, false, false, false, false])
const index = ref<0 | 1 | 2 | 3 | 4 | undefined>(undefined)
watch(index, (newIndex, oldIndex) => {
  if (oldIndex !== undefined && oldIndex >= 0 && oldIndex < visit.length) {
    visit[oldIndex] = false
  }
  if (newIndex !== undefined && newIndex >= 0 && newIndex < visit.length) {
    visit[newIndex] = true
  }
})
const anime = (function* () {
  while (true) {
    index.value = undefined
    yield
    for (index.value = 0; index.value < 5; index.value++) {
      yield
    }
    yield
  }
})()
let id: number
onMounted(() => {
  id = setInterval(() => {
    anime.next()
  }, 1000)
})
onUnmounted(() => {
  clearInterval(id)
})
function toggle() {
  hide.value = !hide.value
}
</script>

<template>
  <Slide title="输出数组">
    <CodeBlock :class="{ hidden: hide }">
      #include&nbsp;&lt;stdio.h&gt;<br />
      int&nbsp;main()<br />
      {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;a[]={10,20,40,30,15};<br />
      &nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;for(i=0;i&lt;5;i++){<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf(&quot;%d\n&quot;,a[i]);<br />
      &nbsp;&nbsp;&nbsp;&nbsp;}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;0;<br />
      }
    </CodeBlock>
    <button @click="toggle">
      <span v-if="hide">显示</span>
      <span v-else>隐藏</span>
    </button>
    <table>
      <tbody>
        <tr>
          <td v-for="(element, index) of array" :class="{ visit: visit[index] }">{{ element }}</td>
        </tr>
      </tbody>
    </table>
    <span>i:{{ index === undefined ? ' ' : index }}</span>
  </Slide>
</template>

<style scoped>
.hidden {
  visibility: hidden;
}
.visit {
  background-color: green;
}
button {
  font-size: 100%;
}
table {
  border-collapse: collapse;
}
table td {
  padding: 0 1em;
  border: solid black 1px;
}
</style>
