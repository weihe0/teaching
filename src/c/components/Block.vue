<script setup lang="ts"></script>

<template>
  <div>
    <div>&lbrace;</div>
    <div class="indent">
      <slot />
    </div>
    <div>&rbrace;</div>
  </div>
</template>

<style scoped>
.indent {
  margin-left: 4ex;
}
</style>
