<script setup lang="ts">
import Slide from '@/layouts/Slide.vue'
import Math from '@/components/Math.vue'
</script>

<template>
  <Slide title="磁路欧姆定律">
    <table>
      <tbody>
        <tr>
          <td>电路</td>
          <td>电动势<Math tex="E" /></td>
          <td>电流<Math tex="I" /></td>
          <td>电阻<Math tex="R" /></td>
          <td><Math :tex="String.raw`R=\frac{\Delta E}{I}`" /></td>
        </tr>
        <tr>
          <td>磁路</td>
          <td>磁动势<Math tex="F" /></td>
          <td>磁通<Math :tex="String.raw`\Phi`" /></td>
          <td>磁阻<Math tex="R" /></td>
          <td><Math :tex="String.raw`R=\frac{\Delta F}{\Phi}`" /></td>
        </tr>
      </tbody>
    </table>
    <img src="/ee/magnetic-ohm.jpg" alt="磁路示意图" />
  </Slide>
</template>

<style scoped>
td {
  padding: 0.2em 1em;
}
tr {
  border-top: solid black 1px;
  border-bottom: solid black 1px;
}
table {
  border-collapse: collapse;
}
</style>
