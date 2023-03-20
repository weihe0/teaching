<template>
  <div class="slide">
    <h1>曲线</h1>
    <canvas width="960" height="540" ref="graph" style="background-color: black"></canvas>
  </div>

    <p>$$x=\frac{-b\pm \sqrt{b^2-4ac}}{2a}$$</p>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {HomoVector2, Matrix3} from "./cgmath";
import {renderMathInDocument} from 'mathlive'
const graph = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
  renderMathInDocument();
  const c = graph.value!.getContext('2d')!;
  const o = new HomoVector2(60, 540 - 60);
  const e = new HomoVector2(20, 10);
  const axis = {
    x: {
      start: -60,
      end: 960 - 60,
    },
    y: {
      start: -60,
      end: 540 - 60,
    }
  }
  const basis_array = [
    [1, 0, o.x],
    [0, -1, o.y],
    [0, 0, 1],
  ]
  const basis = new Matrix3(basis_array);
  c.strokeStyle = "#FFFFFF";
  draw_axis(axis.x.start, axis.x.end, 0);
  draw_axis(axis.y.start, axis.y.end, Math.PI / 2);
  plot();

  function draw_axis(start: number, end: number, angle: number) {
    const start_point = new HomoVector2(start, 0).rotate(angle).transform(basis);
    const end_point = new HomoVector2(end, 0).rotate(angle).transform(basis);
    const left_point = new HomoVector2(end - e.x, e.y).rotate(angle).transform(basis);
    const right_point = new HomoVector2(end - e.x, -e.y).rotate(angle).transform(basis);
    c.moveTo(start_point.x, start_point.y);
    c.lineTo(end_point.x, end_point.y);
    c.lineTo(left_point.x, left_point.y);
    c.moveTo(end_point.x, end_point.y);
    c.lineTo(right_point.x, right_point.y);
    c.stroke();
  }

  function plot() {
    const inverse_derivative = (x: number) => x * x * x / 3000 - 0.45 * x * x + 180 * x;
    const cubic = (x: number) => inverse_derivative(x) / 100 + 100;
    const start_point = new HomoVector2(0, cubic(0)).transform(basis);
    c.moveTo(start_point.x, start_point.y);
    for (let x = 5; x <= 900; x += 5) {
      const coordinate_canvas = new HomoVector2(x, cubic(x)).transform(basis);
      c.lineTo(coordinate_canvas.x, coordinate_canvas.y);
      console.log(coordinate_canvas.x + "," + coordinate_canvas.y);
    }
    c.stroke();
  }
})

</script>

<style scoped>

</style>
