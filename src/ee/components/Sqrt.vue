<script setup lang="ts"></script>

<template>
  <span class="sqrt"><slot></slot></span>
</template>

<style scoped lang="scss">
.sqrt {
  margin-left: 0.5em;
  vertical-align: middle;
  border-top: solid thin;
}
.sqrt:before {
  margin-left: -0.5em;
  content: '\221A';
}
</style>
