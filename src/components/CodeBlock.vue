<script setup lang="ts"></script>

<template>
  <p class="outer">
    <code>
      <slot />
    </code>
  </p>
</template>

<style scoped>
.outer {
  margin: 0;
  padding: 1em;
  border: solid black 1px;
  font-size: 80%;
}
</style>
