<script setup lang='ts'>
import ConvAnime from '@/ee/laplace/ConvAnime.vue'
</script>

<template>
<Slide title='假设1：控制信号具有滞后性'>
  <ConvAnime :controls='[1]' :responses='[0,1,2,3,4,5,6,7,8,9]'/>
</Slide>
</template>

<style scoped>

</style>
