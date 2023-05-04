<script setup lang="ts">
import CLayout from '@/layouts/CLayout.vue'
import type { Component } from 'vue'
import Jill from '@/ai/Jill.vue'
const slides: Component[] = [Jill]
</script>

<template>
  <CLayout :slides="slides" />
</template>

<style scoped></style>
