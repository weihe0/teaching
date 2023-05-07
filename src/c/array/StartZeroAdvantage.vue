<template>
  <Slide title="从0开始的好处">
    <div class="question">
      <p>一人在<em>香港</em>，匀速爬到4楼需要12分钟，他匀速爬到6楼需要多少分钟</p>
      <div>
        <table class="floor">
          <tr>
            <td>6</td>
            <td><span :style="{ display: display[6] }">🧑‍🔧</span></td>
          </tr>
          <tr>
            <td>5</td>
            <td><span :style="{ display: display[5] }">🧑‍🔧</span></td>
          </tr>
          <tr>
            <td>4</td>
            <td><span :style="{ display: display[4] }">🧑‍🔧</span></td>
          </tr>
          <tr>
            <td>3</td>
            <td><span :style="{ display: display[3] }">🧑‍🔧</span></td>
          </tr>
          <tr>
            <td>2</td>
            <td><span :style="{ display: display[2] }">🧑‍🔧</span></td>
          </tr>
          <tr>
            <td>1</td>
            <td><span :style="{ display: display[1] }">🧑‍🔧</span></td>
          </tr>
          <tr>
            <td>G</td>
            <td><span :style="{ display: display[0] }">🧑‍🔧</span></td>
          </tr>
        </table>
      </div>
      <p>{{ time }}分钟</p>
      <p>爬每层楼的时间=12分钟/4=3分钟，到6楼的时间=3分钟*6=18分钟</p>
    </div>
  </Slide>
</template>

<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
import { onMounted, onUnmounted, ref } from 'vue'
const display = ref(['none', 'none', 'none', 'none', 'none', 'none', 'none'])
const time = ref(0)
let id: number
onMounted(() => {
  const animation = (function* () {
    while (true) {
      time.value = 0
      display.value[6] = 'none'
      display.value[0] = 'unset'
      yield
      for (let floor = 1; floor <= 6; floor++) {
        display.value[floor - 1] = 'none'
        display.value[floor] = 'unset'
        time.value += 3
        yield
      }
    }
  })()
  id = setInterval(() => {
    animation.next()
  }, 1000)
})
onUnmounted(() => {
  clearInterval(id)
})
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  align-items: center;
}
table.floor {
  border-collapse: collapse;
}
table.floor td:first-child {
  border: none;
}
table.floor td {
  border: solid black 1px;
  min-width: 2em;
  text-align: center;
}
</style>
