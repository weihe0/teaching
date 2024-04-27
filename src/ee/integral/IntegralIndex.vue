<script setup lang="ts">
import Carousel from '@/Carousel.vue';
import Slide from '@/Slide.vue';
import IntegralMotion from '@/ee/integral/IntegralMotion.vue';
import { f, z } from '@/ee/utility';
import Lim from '@/ee/components/Lim.vue';
import Int from '@/ee/components/Int.vue';
import Sum from '@/ee/components/Sum.vue';
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
