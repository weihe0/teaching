<script setup lang="ts">
import {
  approxIntegral,
  Complex,
  computeSeries,
  series2path,
} from '@/ee/utility';

const props = defineProps<{
  f(z: Complex): Complex;
  z(t: number): Complex;
  a: number;
  b: number;
  n: number;
}>();
let zSeries = computeSeries(props.z, props.a, props.b, props.n);
let fSeries = approxIntegral(props.f, zSeries);
const zPath = series2path(zSeries);
const fPath = series2path(fSeries);
function makePathFunction(path: string): string {
  return `path(${path})`;
}
const zPathFunction = makePathFunction(zPath);
const fPathFunction = makePathFunction(fPath);
</script>

<template>
  <svg viewbox="-100 -100 200 200" class="z">
    <circle r="10" :cx="zSeries[0].xs" :cy="zSeries[0].ys" class="z" />
    <circle r="10" :cx="fSeries[0].xs" :cy="fSeries[0].ys" class="fz" />
    <path :d="zPath" />
    <path :d="fPath" />
  </svg>
</template>

<style scoped lang="scss">
@keyframes move {
  0% {
    offset-distance: 0;
  }
  100% {
    offset-distance: 100%;
  }
}
.z {
  offset-path: v-bind(zPathFunction);
  animation: move 5s infinite linear;
}
.fz {
  offset-path: v-bind(fPathFunction);
  animation: move 10s infinite linear;
}
path {
  fill: none;
  stroke: gray;
  stroke-width: 2;
}
svg {
  transform: scaleY(-1);
}
</style>
