<script setup lang="ts">
import Sqrt from '@/ee/components/Sqrt.vue';
import Frac from '@/ee/components/Frac.vue';
import Int from '@/ee/components/Int.vue';
</script>

<template>
  <p class="info"><span>姓名：</span><span>学号：</span></p>
  <ol class="exercise">
    <li>
      某线圈围成的面积为 A ，它的垂直方向的磁感应强度为 B ，求该线圈的磁通密度
      &Theta;
    </li>
    <li>
      在直流发电机中，某线圈的面积为
      A，其垂直方向的磁感应强度为B，线圈旋转的角速度为 &alpha;
      则该线圈的磁通量对时间 t 的函数为 &Theta;(t)=BA cos
      &alpha;t。求该线圈的电动势 E 对 t 的函数
    </li>
    <li>a=1+2i, b=3+4i，求 a+b, a-b, a&middot;b, a/b</li>
    <li>x=1+<Sqrt>3</Sqrt>i，求 x 的模与主值</li>
    <li>y=<Sqrt>3</Sqrt>+i，求出y的三角表示式与指数表示式</li>
    <li>
      求函数值sin(1+<Frac
        ><template #num>&pi;</template><template #de>2</template></Frac
      >) 与 cos(1+<Frac
        ><template #num>&pi;</template><template #de>2</template></Frac
      >)
    </li>
    <li>
      f(z)=z<sup>3</sup>e<sup>z<sup>2</sup></sup
      >，求 f(z) 的导数
    </li>
    <li>
      设路径 C 为 1 到 i 的直线，求积分 <Int curve="C" /><Frac
        ><template #num>Ln(2+z)</template> <template #de>2+z</template></Frac
      >dz
    </li>
    <li>
      设路径 C 为逆时针方向的半径大于 1 的圆，求积分<Int curve="C" />
      <Frac
        ><template #num>sin &pi;z</template>
        <template #de>(z-1)<sup>4</sup></template></Frac
      >dz
    </li>
    <li>
      求幂级数 1+<Frac
        ><template #num>z</template> <template #de>2</template></Frac
      >+<Frac
        ><template #num>z<sup>2</sup></template>
        <template #de>2<sup>2</sup></template></Frac
      >+<Frac
        ><template #num>z<sup>3</sup></template>
        <template #de>2<sup>3</sup></template></Frac
      >+...+<Frac
        ><template #num>z<sup>n</sup></template>
        <template #de>2<sup>n</sup></template></Frac
      >+...的收敛范围，并求出收敛范围内的解析式
    </li>
  </ol>
</template>

<style scoped>
.info {
  display: flex;
  justify-content: space-around;
}
.exercise li {
  margin-block-end: 20ex;
}
</style>
