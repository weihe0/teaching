<script setup lang="ts">
import Carousel from '@/Carousel.vue';
import Slide from '@/Slide.vue';
import Sum from '@/ee/components/Sum.vue';
import Frac from '@/ee/components/Frac.vue';
</script>

<template>
  <Carousel>
    <Slide topic="第四章 级数">
      <ul>
        <li>复数列的极限</li>
        <li>级数的定义与收敛</li>
        <li>幂级数</li>
        <li>泰勒级数</li>
        <li>洛朗级数</li>
      </ul>
    </Slide>
    <Slide topic="复数列的极限">
      <p>
        对于任意给定的&varepsilon;&gt;0，都能找到一个正整数N，当n&gt;N时，|&alpha;<sub>n</sub>-&alpha;|&lt;&varepsilon;
      </p>
    </Slide>
    <Slide topic="幂级数的运算和性质">
      <ul>
        <li>
          <Sum from="n=0" to="&infin;" />a<sub>n</sub>+<Sum
            from="n=0"
            to="&infin;"
          />b<sub>n</sub> =<Sum from="n=0" to="&infin;" />a<sub>n</sub>+b<sub
            >n</sub
          >
        </li>
        <li>
          <Sum from="n=0" to="&infin;" />a<sub>n</sub>&middot;<Sum
            from="n=0"
            to="&infin;"
          />b<sub>n</sub> &ne;<Sum
            from="n=0"
            to="&infin;"
          />a<sub>n</sub>&middot;b<sub>n</sub>
        </li>
      </ul>
    </Slide>
    <Slide topic="泰勒级数">
      <p>设 z<sub>0</sub> 在半径为 d 的邻域内解析，对邻域内任意的 z 有</p>
      <p>
        f(z)=<Sum from="n=0" to="&infin;" /><Frac
          ><template #num>f<sup>(n)</sup>(z<sub>0</sub>)</template>
          <template #de>n!</template></Frac
        >(z-z<sub>0</sub>)<sup>n</sup>
      </p>
    </Slide>
    <Slide topic="常见泰勒级数">
      <ul>
        <li>
          e<sup>z</sup>=1+z+<Frac
            ><template #num>1</template> <template #de>2!</template></Frac
          >z+<Frac><template #num>1</template> <template #de>3!</template></Frac
          >z+...+<Frac
            ><template #num>1</template> <template #de>n!</template></Frac
          >z+...
        </li>
        <li>
          sin z = z-<Frac
            ><template #num>z<sup>3</sup></template>
            <template #de>3!</template></Frac
          >+<Frac
            ><template #num>z<sup>5</sup></template>
            <template #de>5!</template></Frac
          >-<Frac
            ><template #num>z<sup>7</sup></template>
            <template #de>7!</template></Frac
          >+...
        </li>
        <li>
          cos z = 1-<Frac
            ><template #num>z<sup>2</sup></template>
            <template #de>2!</template></Frac
          >+<Frac
            ><template #num>z<sup>4</sup></template>
            <template #de>4!</template></Frac
          >-<Frac
            ><template #num>z<sup>6</sup></template>
            <template #de>6!</template></Frac
          >+...
        </li>
      </ul>
    </Slide>
    <Slide topic="洛朗级数">
      <ul>
        <li>
          ...+c<sub>-n</sub>(z-z<sub>0</sub>)<sup>-n</sup>+...+c<sub>-1</sub>(z-z<sub>0</sub>)<sup
            >-1</sup
          >
          +c<sub>0</sub>+c<sub>1</sub>(z-z<sub>0</sub>)+...+c<sub>n</sub>(z-z<sub>0</sub>)<sup
            >n</sup
          >
          +...
        </li>
        <li>
          正幂项：c<sub>0</sub>+c<sub>1</sub>(z-z<sub>0</sub>)+...+c<sub>n</sub>(z-z<sub>0</sub>)<sup
            >n</sup
          >
          +...
        </li>
        <li>
          负幂项：c<sub>-1</sub>(z-z<sub>0</sub>)<sup>-1</sup>+...+c<sub>-n</sub>(z-z<sub>0</sub>)<sup>-n</sup>+...
        </li>
      </ul>
    </Slide>
    <Slide topic="留数">
      <ul>
        <li>
          f(z)=
          ...+c<sub>-n</sub>(z-z<sub>0</sub>)<sup>-n</sup>+...+c<sub>-1</sub>(z-z<sub>0</sub>)<sup
            >-1</sup
          >
          +c<sub>0</sub>+c<sub>1</sub>(z-z<sub>0</sub>)+...+c<sub>n</sub>(z-z<sub>0</sub>)<sup
            >n</sup
          >
          +...
        </li>
        <li>c<sub>-1</sub>即为<em>留数</em></li>
      </ul>
    </Slide>
  </Carousel>
</template>

<style scoped></style>
