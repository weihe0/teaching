<script setup lang='ts'>

import { onMounted, onUnmounted, ref } from 'vue'
const props=defineProps<{controls:number[],responses:number[]}>()
const dx = 5, xmax = 80, dy = 20, ymax = 12
const width = xmax * dx
const halfHeight = ymax * dy
const controlCanvas = ref<HTMLCanvasElement | null>(null)
const responseCanvas = ref<HTMLCanvasElement | null>(null)
let controlContext: CanvasRenderingContext2D
let responseContext: CanvasRenderingContext2D

function* controlAnimeGenerator() {
  for (let t = 0; t <= props.controls.length + props.responses.length; t++) {
    controlFrame(t)
    responseFrame(t)
    yield
  }
  yield
}

let id: number | null = null
onMounted(() => {
  controlContext = controlCanvas.value!.getContext('2d')!
  controlContext.transform(-1, 0, 0, -1, width, halfHeight)
  drawAxis(controlContext)
  responseContext = responseCanvas.value!.getContext('2d')!
  responseContext.transform(1, 0, 0, -1, 0, halfHeight)
  drawAxis(responseContext)
})
onUnmounted(() => {
  animeStop()
})

function animeStart() {
  if (id === null) {
    const controlAnime=controlAnimeGenerator()
    id = setInterval(() => {
      if(controlAnime.next().done){
        animeStop()
      }
    }, 500)
  }
}

function animeStop() {
  id && clearInterval(id)
  id = null
}

function controlFrame(elapsedTime: number) {
  controlContext.save()
  controlContext.setTransform(1, 0, 0, 1, 0, 0)
  controlContext.clearRect(0, 0, width, 2 * halfHeight)
  controlContext.restore()
  drawAxis(controlContext)
  if (elapsedTime <= xmax) {
    controlContext.save()
    controlContext.translate(-elapsedTime * dx, 0)
    drawControls()
    controlContext.restore()
  }
}

function responseFrame(elapsedTime: number) {
  responseContext.save()
  responseContext.setTransform(1, 0, 0, 1, 0, 0)
  responseContext.clearRect(0, 0, width, 2 * halfHeight)
  responseContext.restore()
  responseContext.setTransform(1, 0, 0, -1, 0, halfHeight)
  drawAxis(responseContext)
  responseContext.beginPath()
  for (let tau = 0; tau <= elapsedTime; tau++) {
    if (props.controls[tau] !== 0) {
      responseContext.moveTo(tau * dx, props.controls[tau] * props.responses[0])
      for (let timeAfterRes = 1;
           timeAfterRes < props.responses.length && timeAfterRes < elapsedTime - tau;
           timeAfterRes++) {
        responseContext.lineTo((tau + timeAfterRes) * dx,
          props.controls[tau] * props.responses[timeAfterRes] * dy
        )
      }
    }
  }
  responseContext.strokeStyle = 'red'
  responseContext.lineWidth = 2
  responseContext.stroke()
}

function drawAxis(context: CanvasRenderingContext2D) {
  const side = 15
  context.beginPath()
  context.moveTo(0, 0)
  context.lineTo(width - side, 0)
  context.lineWidth = 2
  context.strokeStyle = 'black'
  context.stroke()
  context.beginPath()
  context.moveTo(width - side, side / 2)
  context.lineTo(width - side, -side / 2)
  context.lineTo(width, 0)
  context.fillStyle = 'black'
  context.fill()
}

function drawControls() {
  controlContext.beginPath()
  controlContext.fillStyle = 'green'
  for (let i = 0; i < props.controls.length; i++) {
    if (props.controls[i] > 0) {
      controlContext.fillRect(i * dx, 0, dx, props.controls[i] * dy)
    } else if (props.controls[i] < 0) {
      controlContext.fillRect(i * dx, props.controls[i] * dy, dx, -props.controls[i] * dy)
    }
  }
}

</script>

<template>
  <div class='canvases'>
    <canvas ref='controlCanvas' :width='xmax*dx' :height='2*dy*ymax'></canvas>
    <canvas ref='responseCanvas' :width='xmax*dx' :height='2*dy*ymax'></canvas>
    <button @click='animeStart'>启动</button>
    <button @click='animeStop'>暂停</button>
  </div>
</template>

<style scoped>
.canvases {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-gap: 1em;
}
</style>
