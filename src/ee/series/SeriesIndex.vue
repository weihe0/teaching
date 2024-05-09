<script setup lang="ts">
import Carousel from '@/Carousel.vue';
import Slide from '@/Slide.vue';
</script>

<template>
  <Carousel>
    <Slide topic="第四章 级数">
      <ul>
        <li>复数列的极限</li>
        <li>级数的定义与收敛</li>
        <li>幂级数</li>
        <li>泰勒级数</li>
        <li>洛朗级数</li>
      </ul>
    </Slide>
    <Slide topic="复数列的极限">
      <p>
        对于任意给定的&varepsilon;&gt;0，都能找到一个正整数N，当n&gt;N时，|&alpha;<sub>n</sub>-&alpha;|&lt;&varepsilon;
      </p>
    </Slide>
  </Carousel>
</template>

<style scoped></style>
