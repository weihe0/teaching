<template>
  <Slide title="二维数组">
    <div class="execution">
      <div class="code">
        <span>int a[2][3]={</span><br />
        <span>{11,12,13},</span><br />
        <span>{21,22,23}</span><br />
        <span>};</span>
        <p>二维数组的本质是<em>数组的数组</em></p>
      </div>
      <div class="environment">
        <span>a[0]</span>
        <table class="array">
          <tr>
            <td>a[0][0]</td>
            <td>a[0][1]</td>
            <td>a[0][2]</td>
          </tr>
        </table>
        <span>a[1]</span>
        <table class="array">
          <tr>
            <td>a[1][0]</td>
            <td>a[1][1]</td>
            <td>a[1][2]</td>
          </tr>
        </table>
      </div>
    </div>
  </Slide>
</template>

<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
</script>

<style scoped>
.execution {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.code {
  border: solid black 1px;
  font-family: monospace;
}
.environment {
  padding: 1em 0;
  border: solid black 1px;
}
table.array td {
  border: solid black 1px;
  border-collapse: collapse;
  min-width: 1em;
}
table.array {
  border-collapse: collapse;
}
</style>
