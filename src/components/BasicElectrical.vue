<template>
  <div class="slide">
    <h1>曲线积分的定义</h1>
    <canvas width="960" height="540" ref="graph"></canvas>
    <span>\[\begin{split}
      \int_Cf(z)\mathrm{d}z&=\lim_{n\to\infty}\sum_{k=1}^n f(\zeta_k)(z_k-z_{k-1})
    &=\lim_{n\to\infty}\sum_{k=1}^n f(\zeta_k)\Delta z_k\end{split}\]</span>
  </div>
  <div class="slide">
    <h1>\(\Delta z\)与\(\mathrm{d}z\)的区别</h1>
    <ul>
      <li>\(\Delta z\)代表某个<em>固定的复数</em>，例如\(\Delta z=\frac{1}{10}+\frac{1}{20}i\)</li>
      <li>\(\mathrm{d}z\)代表<em>变化的复数</em>，例如dz={{real}}+{{imaginary}}i</li>
    </ul>
  </div>
  <div class="slide">
    <h1>积分存在的条件</h1>
    <ul>
      <li>\(f(z)=u+iv\)</li>
      <li>\(\mathrm{d}z=\mathrm{d}x+i\mathrm{d}y\)</li>
      <li>\[\int_Cf(z)\mathrm{d}z=\int_C(u\mathrm{d}x-v\mathrm{d}y)+i\int_C(v\mathrm{d}x+u\mathrm{d}y)\]</li>
      <li>等式右侧是<em>实数函数的积分</em></li>
    </ul>
  </div>
  <div class="slide">
    <h1>曲线的参数形式</h1>
    <canvas width="960" height="540" ref="curve"></canvas>
    <p>\(z(t)=R_x\cos t + i R_x\sin t\)</p>
  </div>
  <div class="slide">
    <h1>积分的参数形式</h1>
    <p>\[\int_Cf(z(t))\mathrm{d}z(t)=\int_0^tf(z)\frac{\mathrm{d}z}{\mathrm{d}t}\mathrm{d}t
      =\int_0^tf(z)z'(t)\mathrm{d}t\]</p>
    <p>\[(R_x\cos t+i R_y\sin t)'=-R_x\sin t+i R_y \cos t\]</p>
  </div>
  <div class="slide">
    <h1>柯西——古萨定理</h1>
    <ul>
    <li>柯西<em>提出</em>定理，古萨<em>严格证明</em></li>
      <li>如果\(f(z)\)在单连通域\(B\)内解析，那么\(f(z)\)沿\(B\)内任意一条封闭曲线\(C\)的积分为零</li>
      <li>推论：解析函数的曲线积分，只与<em>起点</em>和<em>终点</em>相关，与<em>路径</em>无关</li>
    </ul>
  </div>
  <div class="slide">
    <h1>原函数</h1>
    <ul>
      <li>\(F'(z)=f(z)\)，\(F(z)\)是\(f(z)\)的<em>原函数</em></li>
      <li>\[\int_{z_0}^{z_1} f(z)\mathrm{d}z=F(z_1)-F(z_0)\]</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const graph = ref<HTMLCanvasElement | null>(null);
const curve = ref<HTMLCanvasElement | null>(null);
let c: CanvasRenderingContext2D;
let c2: CanvasRenderingContext2D;
const real=ref(2);
const imaginary=ref(3);
onMounted(() => {
  c = graph.value!.getContext('2d')!;
  plot();
  let anime_number=animate_number();
  setInterval(()=>{
    anime_number.next();
  },1000);
  c2=curve.value!.getContext('2d')!;
  const anime_curve=animation_curve();
  setInterval(()=>{
    anime_curve.next();
  }, 1000/60);
})

function* animation_curve(){
  c2.transform(1,0,0,-1,c2.canvas.width/2,c2.canvas.height/2);
  while(true){
    let angle=0.0;
    let step=Math.PI/180;
    for(let i=0;i<360;i++){
      angle += step;
      c2.clearRect(-c2.canvas.width/2,-c2.canvas.height/2, c2.canvas.width,c2.canvas.height);
      c2.beginPath();
      c2.fillStyle="Green";
      c2.font="1em sans-serif"
      c2.save();
      c2.setTransform(1,0,0,1,c2.canvas.width/2,c2.canvas.height/2);
      c2.fillText(`t=${i+1}π/360`, -c2.measureText(`t=${i+1}π/360`).width/2, 0);
      c2.restore();
      c2.beginPath();
      c2.ellipse(0,0,300,240,0, 0, angle);
      c2.strokeStyle="SpringGreen";
      c2.lineWidth=4;
      c2.stroke();
      yield ;
    }
  }
}
function* animate_number(){
  while (true){
    real.value=2;
    imaginary.value=3;
    yield ;
    for(let i=0;i<4;i++){
      real.value /= 16;
      imaginary.value /= 16;
      yield ;
    }
  }


}
function* animate_poly() {
  let x = new Array<number>(32);
  let y = new Array<number>(32);
  const radius_x = 300, radius_y = 150;
  while (true) {
    // infinite loop
    for (let factor = 1; factor <= 4; factor *= 2) {
      let number_segments = 8 * factor;
      let angle_step = Math.PI / number_segments;
      let angle = 0.0;
      for (let i = 0; i <= number_segments; i++) {
        x[i] = radius_x * Math.cos(angle);
        y[i] = radius_y * Math.sin(angle);
        angle += angle_step;
      }
      c.beginPath();
      for (let s = 0; s < number_segments; s++) {
        arrow(x[s], y[s], x[s + 1], y[s + 1]);
        yield; // return to the timer and wait for next frame
      }
      c.clearRect(-400, -250, 800, 500);
      yield;
    }
  }
}

function plot() {
  c.translate(c.canvas.width / 2, c.canvas.height / 2);
  c.transform(1, 0, 0, -1, 0, 0);
  const anime = animate_poly();
  setInterval(()=>{
    anime.next();
  },500);
}

function arrow(x0: number, y0: number, x1: number, y1: number) {
  c.save();
  c.translate(x0, y0);
  const modulus = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
  const [dx, dy] = [(x1 - x0) / modulus, (y1 - y0) / modulus];
  c.transform(dx, dy, -dy, dx, 0, 0);
  c.moveTo(0, 0);
  c.lineTo(modulus, 0);
  const edge_length = 10;
  const edge_angle = Math.PI / 6;
  const [edge_dx, edge_dy] = [edge_length * Math.cos(edge_angle), edge_length * Math.sin(edge_angle)];
  c.lineTo(modulus - edge_dx, edge_dy);
  c.moveTo(modulus, 0);
  c.lineTo(modulus - edge_dx, -edge_dy);
  c.lineJoin = "round";
  c.strokeStyle = "SpringGreen";
  c.stroke();
  c.restore();
}

</script>

<style scoped>
canvas {
  background-color: black;
  color: white;
}
</style>
