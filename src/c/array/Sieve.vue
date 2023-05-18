<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import Slide from '@/layouts/Slide.vue'
const max = 50
const isPrime = reactive(new Array(max + 1).fill(true))
const visit = reactive(new Array(max + 1).fill(false))
const index = ref<undefined | number>(undefined)
const prime_numbers = reactive<number[]>([])
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
    isPrime.fill(true)
    prime_numbers.splice(0, prime_numbers.length)
    yield
    for (let integer = 2; integer <= max; integer++) {
      index.value = integer
      yield
      if (isPrime[integer]) {
        for (let factor = 2; factor * integer <= max; factor++) {
          index.value = factor * integer
          yield
          isPrime[index.value] = false
          yield
        }
      }
    }
    for (index.value = 2; index.value <= max; index.value++) {
      if (isPrime[index.value]) {
        prime_numbers.push(index.value)
        yield
      } else {
        yield
      }
    }
  }
})()
let id: number
onMounted(() => {
  id = setInterval(() => {
    anime.next()
  }, 500)
})
onUnmounted(() => {
  clearInterval(id)
})
</script>

<template>
  <Slide title="Eratosthenes筛除法找素数">
    <table>
      <tbody>
        <tr class="index">
          <td v-for="(e, i) of isPrime" :class="{ composite: !e }">{{ i }}</td>
        </tr>
        <tr>
          <td v-for="(e, i) of isPrime" :class="{ visit: visit[i] }">{{ e ? 1 : 0 }}</td>
        </tr>
      </tbody>
    </table>
    <p>
      素数：<span v-for="p of prime_numbers" class="prime-number">{{ p }}</span>
    </p>
  </Slide>
</template>

<style scoped>
.visit {
  background-color: green;
}
.composite {
  color: gray;
}
.prime-number {
  padding-right: 1em;
}
table {
  border-collapse: collapse;
}
table tr {
  display: flex;
  flex-wrap: wrap;
}
table td {
  border: solid black 1px;
  min-width: 2em;
}
.index td {
  border: none;
}
</style>
