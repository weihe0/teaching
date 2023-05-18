<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import Slide from '@/layouts/Slide.vue'
enum State {
  normal = 'normal',
  visit = 'visit',
  update = 'update'
}

const array = [10, 20, 40, 30, 15]
const length = array.length
const states = reactive(new Array<State>(length).fill(State.normal))
const index = ref<number | undefined>(undefined)
watch(index, (newIndex, oldIndex) => {
  if (oldIndex !== undefined && oldIndex >= 0 && oldIndex < states.length) {
    states[oldIndex] = State.normal
  }
  if (newIndex !== undefined && newIndex >= 0 && newIndex < states.length) {
    states[newIndex] = State.visit
  }
})
const maxElement = ref(10)
const anime = (function* () {
  while (true) {
    maxElement.value = array[0]
    index.value = undefined
    yield
    for (index.value = 1; index.value < length; index.value++) {
      yield
      if (array[index.value] > maxElement.value) {
        states[index.value] = State.update
        yield
        maxElement.value = array[index.value]
        yield
      } else {
        yield
        yield
      }
    }
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
</script>

<template>
  <Slide title="查找数组元素">
    <table>
      <tbody>
        <tr>
          <td v-for="(element, i) of array" :class="states[i]">{{ element }}</td>
        </tr>
      </tbody>
    </table>
    <p>max: {{ maxElement }}</p>
    <p>循环下标从多少开始？🤔</p>
  </Slide>
</template>

<style scoped>
.normal {
  background-color: unset;
}
.visit {
  background-color: green;
}
.update {
  background-color: blue;
}
table {
  border-collapse: collapse;
}
table td {
  border: solid black 1px;
  padding: 0 1em;
}
</style>
