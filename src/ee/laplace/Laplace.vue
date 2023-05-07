<script setup lang="ts">
import Fourier from './Fourier.vue'
import FourierDisadvantage from './FourierDisadvantage.vue'
import LaplaceTransform from './LaplaceTransform.vue'
import EELayout from '@/layouts/EELayout.vue'

const slides = [Fourier, FourierDisadvantage, LaplaceTransform]
</script>

<template>
  <EELayout :slides='slides'/>
</template>

<style scoped></style>
