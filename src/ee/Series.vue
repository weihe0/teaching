<script setup lang='tsx'>
import type {Component} from 'vue'
import Slide from '@/layouts/Slide.vue'
import EELayout from '@/layouts/EELayout.vue'
const slides:Component[]=[
  {
    render(){
      return
    }
  }
]
</script>

<template>
  <EELayout :slides='slides'/>
</template>

<style scoped>

</style>
