<script setup lang="ts">
</script>

<template>
  <table class="frac">
    <tbody>
      <tr><td>
        <slot name="num" /></td>
      </tr>
      <tr><td>
        <slot name="de" /></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.frac {
  display: inline table;
  border-collapse: collapse;
  vertical-align: middle;
  margin: 0.4em 0.1em;
  tr:first-child{
    border-bottom: solid black 2px;
  }
  tr:nth-child(2) {
    border-top: solid black 2px;
  }
  td{text-align: center}
}
</style>
