<script setup lang="ts">
import Carousel from '@/Carousel.vue';
import Slide from '@/Slide.vue';
import IntegralMotion from '@/ee/integral/IntegralMotion.vue';
import { f, z } from '@/ee/utility';
import Lim from '@/ee/components/Lim.vue';
import Int from '@/ee/components/Int.vue';
import Sum from '@/ee/components/Sum.vue';
import Frac from '@/ee/components/Frac.vue';
</script>

<template>
  <Carousel>
    <Slide topic="第三章 路径积分">
      <ul>
        <li>路径积分的定义</li>
        <li>积分的计算方法</li>
        <li>柯西—古萨定理</li>
        <li>原函数与不定积分</li>
        <li>柯西积分</li>
      </ul>
    </Slide>
    <Slide topic="路径积分的定义">
      <ol>
        <li>设z<sub>0</sub>,z<sub>2</sub>,...,z<sub>n</sub>是曲线C上的点</li>
        <li>&Delta;z<sub>k</sub>=z<sub>k</sub>-z<sub>k-1</sub></li>
        <li>
          &zeta;<sub>k</sub>是路径z<sub>k-1</sub>z<sub>k</sub>上<em>任意</em>
          一点
        </li>
        <li>
          <Int curve="C" />
          f(z)dz=<Lim>n&RightArrow;&infin;</Lim>
          <Sum from="k-1" to="n" />
          f(&zeta;<sub>k</sub>)(z<sub>k</sub>-z<sub>k-1</sub>)=
          <Lim>n&RightArrow;&infin;</Lim>
          <Sum from="k-1" to="n" />
          f(&zeta;<sub>k</sub>)&Delta;z<sub>k</sub>
        </li>
      </ol>
    </Slide>
    <Slide topic="路径积分的计算方法">
      <ol>
        <li>光滑曲线C由定义在[a,b]上的参数方程z=g(t)给出</li>
        <li>C的正方向为t递增的方向</li>
        <li>dz=g'(t)dt</li>
        <li>
          <Int curve="C" />
          f(z)dz=
          <span class="int">
            &int;<sub>a</sub>
            <sup>b</sup>
          </span>
          f[g(t)]g'(t)dt
        </li>
      </ol>
    </Slide>
    <Slide topic="柯西-古萨定理">
      <ul>
        <li>如果f(z)在单连通域D上解析</li>
        <li>路径C是区域D上一条封闭的曲线</li>
        <li><Int curve="C" />f(z)dz=0</li>
      </ul>
    </Slide>
    <Slide topic="柯西-古萨定理的物理解释">
      <ul>
        <li>
          f(z)描述了一个<em>向量场</em>，例如水流场，f(z)表示z点水流的流速与流向
        </li>
        <li>f(z)在D上解析，意味着这片水没有喷泉与旋涡</li>
        <li>
          将路径看做渔网，路径积分就是通过渔网的总体水流量。封闭的渔网，总体水流量为0
        </li>
      </ul>
    </Slide>
    <Slide topic="柯西-古萨定理的数学解释"
    ><ul>
      <li>
        f(z)在封闭曲线上的路径积分，可以转化为许多个微小的三角形路径上的积分的总合
      </li>
      <li>每个微小的三角形路径上，f(z)的值几乎相等，所以路径积分非常接近0</li>
      <li>因为每个微小三角形路径的积分几乎为0，积分的总和也为0</li>
    </ul></Slide
    >
    <Slide topic="柯西-古萨定理的推论">
      <ul>
        <li>如果封闭曲线围城的区域内有“洞”，路径积分仍然为0</li>
        <li>
          如果分f(z)在单连通域上解析，f(z)的路径积分只与路径的起点与终点有关，与路径无关
        </li>
      </ul>
    </Slide>
    <Slide topic="原函数与路径积分">
      <ul>
        <li>如果F'(z)=f(z)</li>
        <li>dF(z)=f(z)dz</li>
        <li>设路径的起点与终点分别为z<sub>1</sub>与z<sub>2</sub></li>
        <li>
          <Int curve="C" />f(z)dz=<Int
          curve="C"
        />dF(z)=F(z<sub>2</sub>)-F(z<sub>1</sub>)
        </li>
      </ul>
    </Slide>
    <Slide topic="柯西积分公式">
      <ol>
        <li>积分曲线C是以z<sub>0</sub>为圆心，半径为&delta;的圆</li>
        <li>研究在C上的积分<Int curve="C" /><Frac><template #num>f(z)</template>
          <template #de>z-z<sub>0</sub></template></Frac>dz</li>
        <li>当&delta;&rightarrow;0时，<Int curve="C" /><Frac><template #num>f(z)</template>
          <template #de>z-z<sub>0</sub></template></Frac>dz =
          f(z<sub>0</sub>)<Int curve="C" /><Frac><template #num>1</template>
            <template #de>z-z<sub>0</sub></template></Frac>dz = 2&pi;if(z<sub>0</sub>)</li>
      </ol>
        <p>&#x1f914;圆是封闭曲线，但为什么这个积分不等于0？</p>
    </Slide>
  </Carousel>
</template>

<style scoped lang="scss">
.int {
  font-size: 1.5em;
  font-family: math;
  vertical-align: middle;
  > sub,
  > sup {
    font-size: 0.5em;
  }
}
</style>
