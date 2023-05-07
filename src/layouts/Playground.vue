<script setup lang="ts">
import CLayout from '@/layouts/CLayout.vue'
import type { Component } from 'vue'
import Jill from '@/ai/Jill.vue'
import PrintfAnime from '@/c/io/PrintfAnime.vue'
const slides: Component[] = [PrintfAnime]
</script>

<template>
  <CLayout :slides="slides" />
</template>

<style scoped></style>
