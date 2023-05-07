<template>
  <Slide title="数组的定义">
    <div class="execution">
      <div class="code">
        <span>int a[5];</span><br />
        <span>float b[6];</span>
      </div>
      <div class="environment">
        <span>a</span>
        <table class="array">
          <tr>
            <td>a[0]</td>
            <td>a[1]</td>
            <td>a[2]</td>
            <td>a[3]</td>
            <td>a[4]</td>
          </tr>
        </table>
        <span>b</span>
        <table class="array">
          <tr>
            <td>b[0]</td>
            <td>b[1]</td>
            <td>b[2]</td>
            <td>b[3]</td>
            <td>b[4]</td>
            <td>b[5]</td>
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
  min-width: 40%;
}
.environment {
  padding: 1em 0;
  border: solid black 1px;
  min-width: 30%;
}
table.array td {
  border: solid black 1px;
  border-collapse: collapse;
}
table.array {
  border-collapse: collapse;
}
</style>
