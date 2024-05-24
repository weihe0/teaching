<script setup lang="ts">

import PageBreak from "@/c/exams/PageBreak.vue";
</script>

<template>
<!--  <div class="background">
    <template v-for="_ of Array(4)">
      <div class="frame"></div>
    </template>
  </div>-->
  <footer>
    <p style="font-size: 10pt;"><b>Note(s)</b></p>
    <p>This is a printed copy.</p>
  </footer>
</template>

<style scoped>
.background{
  counter-reset: page 1;
}
.frame{
  page-break-after: avoid;
  box-sizing: border-box;
  counter-increment: page;
  width: 100vw;
  height: 100vh;
  border: solid black thin;
}
footer {
  margin-top: 0.1cm;
  display: block;
  position: running(footer);
  font-size: 8pt;
  line-height:1.0;
}
</style>
<style>

body{
  margin: 0;
  padding-bottom: 1em;

}
</style>