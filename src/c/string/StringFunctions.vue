<template>
  <Slide title="字符串处理函数">
    <p style="font-family: monospace">
      char str0[10] = "Mac";<br />
      <span>char str1[]="Book"</span>
    </p>
    <table>
      <thead>
        <tr>
          <td>函数</td>
          <td>效果</td>
          <td>执行后str0</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>strcpy(str0,str1)</td>
          <td>复制</td>
          <td>"Book"</td>
        </tr>
        <tr>
          <td>strcat(str0,str1)</td>
          <td>连接</td>
          <td>"MacBook"</td>
        </tr>
        <tr>
          <td>strupr(str0)</td>
          <td>转大写</td>
          <td>"MAC"</td>
        </tr>
        <tr>
          <td>strlwr(str0)</td>
          <td>转小写</td>
          <td>"mac"</td>
        </tr>
        <tr>
          <td>strlen(str0)</td>
          <td>获得字符串长度（不含'\0'）</td>
          <td></td>
        </tr>
        <tr>
          <td>strcmp(str0,str1)</td>
          <td>比较字符串</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </Slide>
</template>

<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
</script>

<style scoped>
table {
  font-family: monospace;
  border-collapse: collapse;
}
tr {
  border-top: solid black 1px;
  border-bottom: solid black 1px;
}
td {
  padding: 0 1em;
}
</style>
