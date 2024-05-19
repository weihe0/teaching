<script setup lang="ts">
import Slide from '@/Slide.vue';
</script>

<template>
  <Slide topic="str是数组，数组的元素是指针">
    <div class="code">char *str[]={ "Ada", "C", "Java" };</div>
    <table class="layout">
      <tbody>
        <tr>
          <td>str[0]</td>
          <td></td>
          <td>&rightarrow;</td>
          <td>'A'</td>
          <td>'d'</td>
          <td>'a'</td>
          <td>'\0'</td>
        </tr>
        <tr>
          <td>str[1]</td>
          <td></td>
          <td>&rightarrow;</td>
          <td>'C'</td>
          <td>'\0'</td>
        </tr>
        <tr>
          <td>str[2]</td>
          <td></td>
          <td>&rightarrow;</td>
          <td>'J'</td>
          <td>'a'</td>
          <td>'v'</td>
          <td>'a'</td>
          <td>'\0'</td>
        </tr>
      </tbody>
    </table>
  </Slide>
</template>

<style scoped>
.layout {
  border-collapse: collapse;
}
.layout td {
  min-width: 2em;
  text-align: center;
}
.layout td:nth-child(4),
.layout td:nth-child(2) {
  border: solid black thick;
}
.layout td:nth-child(n + 5) {
  border: dashed gray thick;
}
</style>
