<script setup lang="ts"></script>

<template>
  <div class="background">
    <div v-for="(_, i) in Array(4)" class="page">
      <div class="frame"></div>
      <footer>第{{ i + 1 }}页</footer>
    </div>
  </div>
</template>

<style scoped>
.page {
  page-break-after: always;
  display: grid;
  grid-template-rows: auto min-content;
}
.frame {
  height: calc(100vh - 2em);
  border: solid black thin;
}
footer {
  text-align: center;
  font-family: serif;
}
</style>
