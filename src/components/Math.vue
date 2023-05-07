<script setup lang="ts">
import katex from 'katex'
import '@/katex.css'
import { onUpdated } from 'vue'

const props = defineProps<{ tex: string; block?: boolean }>()

function render() {
  return katex.renderToString(props.tex, {
    input: 'html',
    displayMode: props.block
  })
}
let html = render()
onUpdated(() => {
  html = render()
})
</script>

<template>
  <span v-html="html" />
</template>

<style scoped></style>
