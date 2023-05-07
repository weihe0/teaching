<script setup lang="ts">
import { ComponentPublicInstance, onMounted, ref } from 'vue'
import ElectricalContent from '../ElectricalContent.vue'
import katex from 'katex'
import renderMathInElement from 'katex/contrib/auto-render'
import Concepts from '../../ai/transport/Concepts.vue'
import Fourier from './Fourier.vue'
import FourierDisadvantage from './FourierDisadvantage.vue'
import LaplaceTransform from './LaplaceTransform.vue'

const list = [Fourier, FourierDisadvantage, LaplaceTransform]
const show = ref(false)
const index = ref(0)
const numSlides = list.length

function previous() {
  if (index.value - 1 >= 0) {
    index.value--
  }
}

function next() {
  if (index.value + 1 < numSlides) {
    index.value++
  }
}
onMounted(() => {
  renderMathInElement(document.body)
})
</script>

<template>
  <nav v-show="show">
    <ElectricalContent />
    <button @click="show = !show">
      <svg width="32px" height="64px" viewBox="0 0 32 64">
        <polyline points="32 0,  0 32, 32 64" />
      </svg>
    </button>
  </nav>
  <div class="slide-container">
    <button class="unfold" @click="show = !show">
      <svg width="32px" height="64px" viewBox="0 0 32 64">
        <polyline points="0 0, 32 32, 0 64" />
      </svg>
    </button>
    <Component :is="list[index]" />
    <div class="control">
      <button @click="previous">
        <svg width="64px" height="32px" viewBox="0 0 64 32">
          <polyline points="0 32, 32 0, 64 32" />
        </svg>
      </button>
      <button @click="next">
        <svg width="64px" height="32px" viewBox="0 0 64 32">
          <polyline points="0 0, 32 32, 64 0" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
nav {
  position: absolute;
  height: 100vh;
  background-color: wheat;
  display: grid;
  grid-template-columns: auto 4em;
}

.slide-container {
  display: grid;
  grid-template-columns: 2em auto 2em;
  grid-gap: 1em;
  height: 100vh;
  font-size: 200%;
}

.unfold {
  place-self: center;
}

.control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  border: none;
  background-color: transparent;
}
.control button {
  margin: 2em 0;
}
svg {
  stroke: black;
  fill: none;
  stroke-width: 4px;
}

svg:hover {
  stroke: blue;
  cursor: pointer;
}
</style>
