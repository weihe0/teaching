<template>
<ol id="homework">
  <li>设\(\theta=\frac{\pi}{4}\)，计算\(e^{i\theta}\)，要算出结果中的所有三角函数值</li>
  <li>\(w_1=\frac{\sqrt{3}}{2}+\frac{1}{2}i, w_2=\frac{1}{2}+\frac{\sqrt{3}}{2}i\)
    <ol>
      <li>写出\(w_1,w_2\)的三角形式以及指数形式</li>
      <li>计算\(w_1+w_2\),\(w_1-w_2\),\(w_1w_2\),\(w_1/w_2\)</li>
    </ol>
  </li>

  <li>已知虚数单位的定义为\(i^2=-1\)，那么有多少个复数\(w\)满足\(w^2=i\)？找出所有这样的\(w\)</li>
  <li>复数\(w=3+4i\)
    <ol>
      <li>它的模是多少？</li>
      <li>在复平面上将\(w\)按逆时针旋转\(\frac{\pi}{2}\)，得到\(z\)，求出\(z\)</li>
    </ol>
  </li>
  <li>设\(w\)与\(z\)的关系为\(w=z^3\)，那么\(z\)是\(w\)的单值函数还是多值函数？</li>

</ol>
</template>

<script setup lang="ts">
import {renderMathInDocument} from "mathlive";
import {onMounted} from "vue";
onMounted(()=>{
  renderMathInDocument();
})
</script>

<style scoped>
#homework{
  font-size: 2em;
  margin: 1em;
}
#homework li{
  margin: 1em 0;
}
</style>
