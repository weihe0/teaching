<script setup lang="ts">

import ClangCarousel from '@/ClangCarousel.vue'
import Slide from '@/Slide.vue'
</script>

<template>
<ClangCarousel>
  <Slide topic="指针">
    <p>变量的指针就好比酒店的房间号</p>
    <table class="memory">
      <tbody>
      <tr><td>地址</td><td>100</td><td>104</td><td>108</td></tr>
      <tr><td>变量</td><td>a</td><td>b</td><td>c</td></tr>
      </tbody>
    </table>
    <p>&#x1f914;&a &b与&c的值分别是多少？</p>
  </Slide>
  <Slide topic="取址运算符">
    <p class="code">int n=10; &amp;n;</p>
    <table class="pointer">
      <tbody>
      <tr><td></td><td></td><td>n</td></tr>
      <tr><td class="value">&n</td><td>&rightarrow;</td><td class="object">10</td></tr>
      </tbody>
    </table>
  </Slide>
  <Slide topic="指针变量">
    <div class="code">
      <div>int n=10;</div>
      <div>int *pn=&amp;n;</div>
    </div>
    <table class="pointer">
      <tbody>
      <tr><td>pn</td><td></td><td >n</td></tr>
      <tr><td class="emphasis">&n</td><td>&rightarrow;</td><td class="object">10</td></tr>
      </tbody>
    </table>
  </Slide>
  <Slide topic="指针运算符">
    <div class="code">
      <div>int n=10;</div>
      <div>int *pn=&amp;n;</div>
      <div>*pn=20;</div>
    </div>
    <table class="pointer">
      <tbody>
      <tr><td >pn</td><td></td><td>n</td></tr>
      <tr><td >&n</td><td>&rightarrow;</td><td class="emphasis">20</td></tr>
      </tbody>
    </table>
  </Slide>
  <Slide topic="数组的名字代表数组首个元素的地址">
    <div class="code">int a[5]={0};</div>
    <p>a本身代表一个地址，是数组首个元素的地址</p>
    <table class="pointer">
      <tbody>
      <tr><td></td><td></td><td>a[0]</td><td>a[1]</td><td>a[2]</td><td>a[3]</td><td>a[4]</td></tr>
      <tr><td>a</td><td>&rightarrow;</td><td class="emphasis">0</td ><td class="object">0</td>
        <td class="object">0</td><td class="object">0</td><td class="object">0</td></tr>
      </tbody>
    </table>
    <p>&#x1f914;a指向哪个元素？</p>
  </Slide>
  <Slide topic="数组与指针">
    <div class="code">
      <div>int a[5]={0};</div>
      <div>int *pa=a;</div>
    </div>
    <table class="pointer">
      <tbody>
      <tr><td>pa</td><td></td><td>pa[0]</td><td>pa[1]</td><td>pa[2]</td><td>pa[3]</td><td>pa[4]</td></tr>
      <tr><td class="emphasis">a</td><td>&rightarrow;</td><td class="emphasis">0</td ><td class="object">0</td>
        <td class="object">0</td><td class="object">0</td><td class="object">0</td></tr>
      <tr><td></td><td></td><td>a[0]</td><td>a[1]</td><td>a[2]</td><td>a[3]</td><td>a[4]</td></tr>
      </tbody>
    </table>
  </Slide>
</ClangCarousel>
</template>

<style scoped lang="scss">
table{
  border-collapse: collapse;
  td{
    min-width: 2ex;
    text-align: center;
  }
}
.memory{
  border-collapse: collapse;
}
.memory td{
  border: solid black 2px;
}
.first{
  border: solid black 2px;
}
.pointer{
  border-collapse: collapse;
  color: gray;
  .emphasis{
    color: black;
    border: solid black 2px;
  }
  .value{
    color: black;
  }
  .object{
    border: solid gray 2px;
  }
}

</style>
