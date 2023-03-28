<template>
  <Slide title="目录">
    <ul>
      <li><router-link to="/clang/data">C语言</router-link></li>
      <li><router-link to="/ai">人工智能</router-link></li>
      <li><router-link to="/electrical">电气工程基础能力</router-link></li>
    </ul>
  </Slide>
</template>

<script setup lang="ts">
import Slide from "./Slide.vue";
</script>
