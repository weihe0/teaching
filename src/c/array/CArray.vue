<script setup lang="ts">
import ArrayContents from './ArrayContents.vue'
import ArrayDefinition from './ArrayDefinition.vue'
import ArrayMotivation from './ArrayMotivation.vue'
import ArrayRequirement from './ArrayRequirement.vue'
import StartZero from './StartZero.vue'
import StartZeroAdvantage from './StartZeroAdvantage.vue'
import Initialization from './Initialization.vue'
import TwoDimensional from './TwoDimensional.vue'
import ComputeMean from './ComputeMean.vue'
import StringDefinition from '../string/StringDefinition.vue'
import StringFunctions from '../string/StringFunctions.vue'
import CLayout from '@/layouts/CLayout.vue'
import type { Component } from 'vue'
import ArrayDisplay from '@/c/array/ArrayDisplay.vue'
import ArrayFind from '@/c/array/ArrayFind.vue'
import ArrayMax from '@/c/array/ArrayMax.vue'
import Sieve from '@/c/array/Sieve.vue'

let slides: Component[] = [
  ArrayContents,
  ArrayMotivation,
  ArrayDefinition,
  ArrayRequirement,
  StartZero,
  StartZeroAdvantage,
  Initialization,
  ComputeMean,
  TwoDimensional,
  ArrayDisplay,
  ArrayFind,
  ArrayMax,
  Sieve
]
</script>

<template>
  <CLayout :slides="slides" />
</template>

<style scoped></style>
