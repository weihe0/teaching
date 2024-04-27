<script setup lang="ts"></script>

<template>
  <span class="under">
    <span>Lim</span>
    <span><slot /></span>
  </span>
</template>

<style scoped lang="scss">
.under {
  display: inline flex;
  flex-direction: column;
  > :nth-child(2) {
    font-size: 0.75em;
  }
}
</style>
