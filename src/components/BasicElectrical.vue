<template>
<div class="slide">
  <h1>曲线</h1>
  <canvas width="960" height="540" ref="graph"></canvas>
</div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
const graph=ref<HTMLCanvasElement|null>(null);
type Vector2={x:number,y:number};
onMounted(()=>{
  const c=graph.value!.getContext('2d')!;
  const o:Vector2={x:480, y:270};
  const e:Vector2={x:60, y:30};
  const axis={
    x:{
      start:-200,
      end:200,
    },
    y:{
      start:-200,
      end:200
    }
  }
  draw_axis(axis.x.start,axis.y.end,0);
  draw_axis(axis.y.start,axis.y.end,3*Math.PI/2);
  function transform(point: Vector2, angle: number, shift: Vector2){
    const sin=Math.sin(angle);
    const cos=Math.cos(angle);

    const transformed_point:Vector2={
      x: point.x * cos - point.y * sin + shift.x,
      y: point.x * sin + point.y * cos + shift.y,
    }

    return transformed_point;
  }
  function draw_axis(start:number, end:number, angle:number){
    let start_point = transform({x:start, y:0}, angle, o);
    let end_point=transform({x:end, y:0}, angle, o);
    let left={x:end-e.x,y:e.y};
    let right={x:end-e.x, y:-e.y};
    let left_point=transform(left,angle,o);
    let right_point=transform(right,angle,o);
    c.moveTo(start_point.x, start_point.y);
    c.lineTo(end_point.x,end_point.y);
    c.moveTo(end_point.x,end_point.y);
    c.lineTo(left_point.x,left_point.y);
    c.moveTo(end_point.x,end_point.y);
    c.lineTo(right_point.x,right_point.y);
    c.stroke();
  }
})



</script>

<style scoped>

</style>
