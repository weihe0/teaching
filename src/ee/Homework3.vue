<script setup lang="ts">
import Math from '@/components/Math.vue'
</script>

<template>
  <h1>第三次作业</h1>
  <ol>
    <li>如果行列式</li>
    <Math
      :block="true"
      :tex="
        String.raw`\begin{vmatrix}
    a_{11} & a_{12} & a_{13} & a_{14} \\
    a_{21} & a_{22} & a_{23} & a_{24} \\
    a_{31} & a_{32} & a_{33} & a_{34} \\
    a_{41} & a_{42} & a_{43} & a_{44}
    \end{vmatrix}`
      "
    />
    其中每个<Math :tex="String.raw`a_{ij}\neq 0`" />，那么这个行列式有多少个非零项？（1分）
    <li>将第1题的4阶行列式，按照第3列展开，写出展开式（2分）</li>
    <li>
      使用<em>克拉默法则</em>求解如下线性方程组，使用消元法或其他方法不得分（2分）
      <Math
        :block="true"
        :tex="
          String.raw`\begin{cases}
    3x_1+2x_2=12\\
    2x_1+4x_2=14
    \end{cases}`
        "
      />
    </li>
  </ol>
</template>

<style scoped></style>
