<script setup lang="ts">
import CLayout from '@/layouts/CLayout.vue'
import type { Component } from 'vue'
import Jill from '@/ai/Jill.vue'
import PrintfAnime from '@/c/io/PrintfAnime.vue'
import ArrayDisplay from '@/c/array/ArrayDisplay.vue'
import ArrayFind from '@/c/array/ArrayFind.vue'
import ArrayMax from '@/c/array/ArrayMax.vue'
import Sieve from '@/c/array/Sieve.vue'
const slides: Component[] = [Sieve]
</script>

<template>
  <CLayout :slides="slides" />
</template>

<style scoped></style>
