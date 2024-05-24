<script setup lang="ts">
import './exam.scss'
</script>

<template>
  <span class="blank"><slot/></span>
</template>

<style scoped>
.blank {
  display: inline-block;
  width: 4em;
  border-bottom: solid black thin;
  margin: 0 1ex;
  vertical-align: bottom;
}
</style>
