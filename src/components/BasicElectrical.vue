<template>
  <div class="slide">
    <h1>曲线</h1>
    <canvas width="960" height="540" ref="graph"></canvas>
  </div>

    <p>$$x=\frac{-b\pm \sqrt{b^2-4ac}}{2a}$$</p>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {HomoVector2, Matrix3} from "./cgmath";
import {renderMathInDocument} from 'mathlive'
import {Engine} from "@babylonjs/core";

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
  plot();

  function plot() {
/*    const inverse_derivative = (x: number) => x * x * x / 3000 - 0.45 * x * x + 180 * x;
    const cubic = (x: number) => inverse_derivative(x) / 100 + 100;
    const start_point = new HomoVector2(0, cubic(0)).transform(basis);
    c.moveTo(start_point.x, start_point.y);
    for (let x = 5; x <= 900; x += 5) {
      const coordinate_canvas = new HomoVector2(x, cubic(x)).transform(basis);
      c.lineTo(coordinate_canvas.x, coordinate_canvas.y);
      console.log(coordinate_canvas.x + "," + coordinate_canvas.y);
    }
    c.stroke();*/
    c.translate(c.canvas.width/2,c.canvas.height/2);
    c.transform(1,0,0,-1,0,0);
    const radius_x = 300, radius_y = 150;
    let x=[0,0,0,0,0,0,0,0,0];
    let y=[0,0,0,0,0,0,0,0,0];
    let angle=0.0;
    for(let i=0;i<=8;i++){
      x[i]=radius_x*Math.cos(angle);
      y[i]=radius_y*Math.sin(angle);
      angle+=Math.PI/8;
    }
    let lines=1;
    const id = setInterval(()=>{
      c.clearRect(-400,-250,800,500);
      if(lines<=8){
        for(let i=0;i<lines;i++){
          arrow(x[i],y[i],x[i+1],y[i+1]);
        }
        lines++;
      }else {
        c.clearRect(-400,-250,800,500);
        clearInterval(id);
      }
    }, 1000);
  }
  function arrow(x0:number,y0:number,x1:number,y1:number){
    c.save();
    const modulus=Math.sqrt((x1-x0)*(x1-x0)+(y1-y0)*(y1-y0));
    c.translate(x0,y0);
    const [dx, dy]=[(x1-x0)/modulus,(y1-y0)/modulus];
    c.transform(dx,dy,-dy,dx,0,0);
    c.moveTo(0,0);
    c.lineTo(modulus,0);
    const edge_length=20;
    const edge_angle=Math.PI/6;
    const [edge_dx,edge_dy]=[edge_length*Math.cos(edge_angle), edge_length*Math.sin(edge_angle)];
    c.lineTo(modulus-edge_dx, edge_dy);
    c.moveTo(modulus,0);
    c.lineTo(modulus-edge_dx,-edge_dy);
    c.lineJoin="round";
    c.strokeStyle="SpringGreen";
    c.stroke();
    c.restore();
  }
})

</script>

<style scoped>
canvas{
  background-color: black;
  color: white;
}
</style>
