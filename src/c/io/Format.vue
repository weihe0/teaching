<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
</script>

<template>
  <Slide title="常见格式">
    <table>
      <thead>
        <tr>
          <td>格式</td>
          <td>类型</td>
          <td>内容</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>%d</td>
          <td>signed int</td>
          <td>十进制整数</td>
        </tr>
        <tr>
          <td>%u</td>
          <td>unsigned int</td>
          <td>十进制无符号整数</td>
        </tr>
        <tr>
          <td>%f</td>
          <td>float</td>
          <td>小数</td>
        </tr>
        <tr>
          <td>%e</td>
          <td>float</td>
          <td>科学计数法</td>
        </tr>
        <tr>
          <td>%c</td>
          <td>char</td>
          <td>字符</td>
        </tr>
        <tr>
          <td>%s</td>
          <td>char*</td>
          <td>字符串</td>
        </tr>
      </tbody>
    </table>
  </Slide>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
tr {
  border: solid black 1px;
}
td {
  min-width: 2em;
  padding: 0 1em;
}
</style>
