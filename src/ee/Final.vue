<script setup lang="ts">
import Math from '@/components/Math.vue'
</script>

<template>
  <h1>期末作业</h1>
  <ol class='outer'>
    <li>电磁场</li>
    <ol>
      <li><p>交流发电机的工作原理如下图所示，设方形线圈的长为<Math tex='L'/>，宽为<Math tex='W' />，发电机旋转的角速度
        为<Math :tex='String.raw`\omega`' />，
      那么磁通量对时间<Math tex='t'/>的函数为<Math :tex='String.raw`\Phi(t)=WL\cos(\omega t)`' />
      ，用<em>电磁感应定律</em>计算感应电动势<Math tex='E' />对时间<Math tex='t'/>的函数</p></li>
      <img src='/ee/generator.png' alt='发电机' />
      <li>设某磁路的磁通量为<Math tex='\Phi' />，磁动势为<Math tex='F' />，磁阻为<Math tex='R' />，写出三者的关系式</li>
      <li>图a与b中，哪个是三相交流电机的原理图？</li>
      图a
      <img src="/ee/triple-motor.gif" alt="三相电机" height='300'/>
      图b
      <img src="/ee/direct-motor.gif" alt="直流电机" height='300'/>
    </ol>
    <li>复数运算</li>
    <ol>
      <li>计算复数<Math tex='a=\frac{1}{2}+\frac{\sqrt{3}}{2}i' />与<Math tex='b=\frac{\sqrt{3}}{2}+\frac{1}{2}i' />
        的三角形式与指数形式。注意，角度请用<em>弧度制</em></li>
      <li>用<em>适当的形式</em>计算<Math tex='a+b,a-b,a\times b,a/b' /></li>
      <li>求方程<Math tex='x^3=-1' />的所有复数根（包括实数根，因为实数属于复数）</li>
      <li>某点的坐标为<Math tex='(4,3)'/>，将该点绕原点逆时针旋转<Math tex='\pi/2'/>角度，利用复数计算旋转后的坐标</li>
    </ol>
    <li>复变函数</li>
    <ol>
      <li>以下哪些命题是正确的，哪些命题是错误的？</li>
      <ol>
        <li>连续函数必定是解析的</li>
        <li>解析函数必定是连续的</li>
        <li>连续但不解析的函数存在</li>
        <li>解析但不连续的函数存在</li>
      </ol>
      <li>求函数值</li>
      <ol>
        <li><Math tex='{(2+i)}^{1+i}'/></li>
        <li><Math tex='\cos (3+2i)'/></li>
      </ol>
      <li>求以下函数的导数</li>
      <ol>
        <li><Math tex='f(z)=z/2+2/z'/></li>
        <li><Math tex='f(z)=e^z\sin z'/></li>
      </ol>
      <li>
        计算曲线积分<Math tex='\oint_C \frac{\mathrm{d}z}{(z-z_0)^n}'/>
        其中曲线<Math tex='C'/>是以<Math tex='z_0'/>为中心，<Math tex='r' />为半径的逆时针圆周，<Math tex='n'/>
        为非负整数
      </li>

      <li>求函数<Math tex='f(z)=\sin z/z^3'/>的洛朗级数。步骤如下</li>
      <ol>
        <li>列出<Math tex='\sin z'/>的泰勒级数</li>
        <li>利用泰勒级数，求出<Math tex='f(z)' />的洛朗级数</li>
        <li>这个洛朗级数的极点是多少级极点？</li>
      </ol>
      <li>用留数定理计算积分<Math tex='\int_{-\infty}^{+\infty} \frac{1}{x^2+1}\mathrm{d}x'/></li>
    </ol>
    <li>Laplace变换</li>
    <ol>
      <li>写出Laplace变换的公式</li>
      <li>写出象原函数的微分性质公式</li>
      <li>写出象原函数的积分性质公式</li>
      <li>设有两个函数<Math tex='f_1(t)'/>与<Math tex='f_2(t)'/>，写出它们的卷积公式</li>
    </ol>
    <li>行列式</li>
    <ol>
      <li>计算行列式<Math :tex='
        String.raw`\begin{vmatrix}
    1 & 2 \\
    3 & 4
    \end{vmatrix}`'/></li>
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
    其中每个<Math :tex="String.raw`a_{ij}\neq 0`" />，那么这个行列式有多少个非零项？
    <li>将上一题的4阶行列式，按照第2行展开，写出展开式</li>
    </ol>
  </ol>
</template>

<style scoped>
ol.outer{
  list-style-type: cjk-ideographic;
}
</style>
