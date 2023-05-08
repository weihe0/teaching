<script setup lang="ts">
import Paper from '@/layouts/Paper.vue'
import Plan from '@/layouts/Plan.vue'
import Math from '@/components/Math.vue'
const weekday=4
const class_number=7
</script>

<template>
  <Paper>
    <Plan
      keynote="复数的定义"
      difficulty="理解复数"
      :week="2"
      :count="1"
      :weekday="weekday"
      topic="复数"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>运算与数集的扩展</li>
          <ol>
            <li>减法产生负数</li>
            <li>除法产生分数</li>
            <li>开方产生实数</li>
            <li>负数开方产生<em>复数</em></li>
          </ol>
          <li>虚数单位</li>
          <ol>
            <li>虚数单位的定义</li>
            <li>虚数单位的用法</li>
            <li>虚数单位的历史</li>
            <li>虚数单位与负数开方的关系</li>
          </ol>
          <li>实部与虚部</li>
          <ol>
            <li>实部与虚部的定义</li>
            <li>纯虚数</li>
            <li>复数相等的充分必要条件</li>
            <li>复数不能比较大小</li>
          </ol>
          <li>共轭复数与代数方程</li>
          <ol>
            <li>代数方程的求根公式</li>
            <li>代数方程的根得到共轭复数</li>
            <li>共轭复数的性质</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>复数的提出是为了解决什么问题？</li>
          <li>为什么复数不能比较大小？</li>
          <li>共轭复数与代数方程有什么联系？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>由于多年的应试教育，学生们认为数学与物理只是用来考试的，在实际的生产生活中没有作用。</li>
          <li>学生的微积分基础很差，很难理解复变函数</li>
          <li>学生认为复数是虚构的数，难以接受复数的概念</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="复平面上的复数运算"
      difficulty="复数与复平面的关系"
      :week="3"
      :count="2"
      :weekday="weekday"
      topic="复平面"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>复数的几何表示——复平面</li>
          <ol>
            <li>实数集是一维的数轴</li>
            <li>复数集是二维的平面</li>
            <li>复数<Math tex='x+iy'/>还与从原点指向<Math tex='(x,y)'/>的向量一一对应</li>
            <li>复平面坐标系的横轴是实数</li>
            <li>复平面坐标系的虚轴是纯虚数</li>
          </ol>
          <li>复数的向量表示</li>
          <ol>
            <li>复数<Math tex='x+iy'/>与点<Math tex='(x,y)'/>一一对应</li>
            <li>复数的模</li>
            <li>复数的辐角及主值</li>
            <li>复数的三角表示式</li>
            <li>复数的欧拉公式</li>
            <li>复数的指数表示式</li>
          </ol>
          <li>复平面上的复数运算</li>
          <ol>
            <li>复平面上的加减运算符合平行四边形法则</li>
            <li>复平面上的乘法运算，复数的模相乘，辐角相加</li>
            <li>复平面上的除法运算，复数的模相除，辐角相减</li>
            <li>用三角表示式及指数表示式求负数的乘幂与方根</li>
            <li>求复数的方根的特别注意事项</li>
            <li>在复数集下求<Math tex='n'/>次方根</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>复数的乘除法与旋转变换的关系</li>
          <li>复数的加法为什么符合平行四边形法则？（提示：平行四边形法则与交换律有关）</li>
          <li>复数为什么有多个辐角？多个辐角之间有什么关系？</li>
          <li>在复数集内解方程<Math tex='x^3=-1'/>，方程有几个根？分别是多少？</li>
          <li>复数的三角表示式与指数表示式主要用于哪些运算？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>由于多年的应试教育，学生们认为数学与物理只是用来考试的，在实际的生产生活中没有作用。</li>
          <li>学生的微积分基础很差，很难理解复变函数</li>
          <li>学生认为复数是虚构的数，难以接受复数的概念</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="复变函数的定义"
      difficulty="复变函数的几何表示"
      :week="4"
      :count="3"
      :weekday="weekday"
      topic="复变函数"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>区域及其连通性</li>
          <ol>
            <li>邻域与取心邻域</li>
            <li>内点、开集与区域</li>
            <li>界点与边界的定义</li>
            <li>开区域、闭区域、有界区域、无界区域</li>
            <li>曲线的复数表示</li>
            <li>简单闭曲线</li>
            <li>单连通域与多连通域，及其与简单闭曲线的关系</li>
          </ol>
          <li>复变函数</li>
          <ol>
            <li>复变函数的定义</li>
            <li>由函数构成的映射</li>
            <li>复变函数对复平面的映射</li>
            <li>常见复变函数</li>
          </ol>
          <li>复变函数的极限和连续性</li>
          <ol>
            <li>函数极限的<Math :tex='String.raw`\varepsilon-\delta`'/>定义</li>
            <li>复变函数的极限存在的充分必要条件</li>
            <li>极限的性质</li>
            <li>常见函数极限</li>
            <li>函数的连续性定义</li>
            <li>连续函数的性质</li>
            <li>间断函数示例</li>
            <li>处处非连续函数示例</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>为什么使用邻域定义界点？</li>
          <li>椭圆曲线的复数表示形式是什么？</li>
          <li>用映射的观点研究复变函数，好处是什么？</li>
          <li>举几个不连续的函数</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>由于多年的应试教育，学生们认为数学与物理只是用来考试的，在实际的生产生活中没有作用。</li>
          <li>学生的微积分基础很差，很难理解复变函数</li>
          <li>学生认为复数是虚构的数，难以接受复数的概念</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="解析函数的定义"
      difficulty="解析函数与连续函数的关系"
      :week="5"
      :count="4"
      :weekday="weekday"
      topic="解析函数"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>复变函数的导数</li>
          <ol>
            <li>从微积分扩展得到复变函数的导数的定义</li>
            <li>微积分的导数与复变函数的导数的区别与联系</li>
            <li>微分的定义</li>
            <li>用导数的定义求常见函数的导数</li>
          </ol>
          <li>可导与连续的关系</li>
          <ol>
            <li>连续是可导的<em>必要不充分条件</em></li>
            <li>列举处处连续但处处不可导的奇异函数</li>
          </ol>
          <li>求导法则</li>
          <ol>
            <li>常函数的导数</li>
            <li>幂函数的导数</li>
            <li>两个函数相加、相减、相乘、相除后的导数</li>
            <li>复合函数的导数</li>
            <li>反函数的导数</li>
          </ol>
          <li>解析函数</li>
          <ol>
            <li>解析函数的定义</li>
            <li>函数在某点解析与在某点可导的区别</li>
            <li>奇点的定义</li>
            <li>解析函数的柯西——黎曼方程</li>
          </ol>
          <li>复数的初等函数</li>
          <ol>
            <li>将幂函数扩展到复数域</li>
            <li>将指数函数扩展到复数域</li>
            <li>将对数函数扩展到复数域</li>
            <li>将三角函数与双曲函数扩展到复数域</li>
            <li>将反三角函数与反双曲函数扩展到复数域</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>复变函数的导数定义与微积分的导数定义有什么区别？</li>
          <li>连续函数是否必定可导？可导函数是否必定连续？</li>
          <li>解析函数与可导函数有什么区别与联系？</li>
          <li>将初等函数扩充到复数域，主要思路是什么？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>由于多年的应试教育，学生们认为数学与物理只是用来考试的，在实际的生产生活中没有作用。</li>
          <li>学生的微积分基础很差，很难理解复变函数</li>
          <li>学生认为复数是虚构的数，难以接受复数的概念</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="曲线积分的定义与性质"
      difficulty="曲线积分的计算结果"
      :week="6"
      :count="5"
      :weekday="weekday"
      topic="曲线积分"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>曲线积分的定义</li>
          <ol>
            <li>有向曲线</li>
            <li>曲线分段积分和</li>
            <li>曲线积分就是曲线的分段积分和的极限</li>
          </ol>
          <li>积分存在的条件</li>
          <ol>
            <li>将复变函数转化为实数域的二元函数</li>
            <li>曲线的参数形式</li>
            <li>利用二元函数与曲线的参数形式，将曲线积分转化为定积分</li>
            <li>求解几个简单函数的曲线积分</li>
          </ol>
          <li>柯西——古萨基本定理</li>
          <ol>
            <li>如果复变函数在单连通域内解析，那么函数在单连通域内的任何一条闭曲线的积分为零</li>
            <li>基本定理的推广——复合闭路定理</li>
            <li>基本定理的推广——闭路变形原理</li>
            <li>基本定理的推论——解析函数的曲线积分只与曲线的起点与终点相关，与曲线的路径无关</li>
          </ol>
          <li>原函数与不定积分</li>
          <ol>
            <li>如果函数在单连通域内处处解析，那么曲线积分至于起点与终点相关，与曲线的路径无关</li>
            <li>复变函数的原函数</li>
            <li>复变函数的牛顿——莱布尼茨公式</li>
          </ol>
          <li>柯西积分</li>
          <ol>
            <li>柯西积分的定义</li>
            <li>柯西积分的用处</li>
            <li>解析函数的高阶导数</li>
            <li>解析函数与调和函数的关系</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>曲线积分与定积分的区别与联系在哪里？</li>
          <li>判断几个曲线积分是否存在</li>
          <li>如何使用柯西——古萨基本定理简化曲线积分的运算？</li>
          <li>如何使用原函数计算曲线积分？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>由于多年的应试教育，学生们认为数学与物理只是用来考试的，在实际的生产生活中没有作用。</li>
          <li>学生的微积分基础很差，很难理解复变函数</li>
          <li>学生认为复数是虚构的数，难以接受复数的概念</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="幂级数"
      difficulty="洛朗级数"
      :week="7"
      :count="6"
      :weekday="weekday"
      topic="级数"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>复数级数</li>
          <ol>
            <li>复数列的极限</li>
            <li>级数的定义</li>
            <li>条件收敛与绝对收敛</li>
          </ol>
          <li>幂级数</li>
          <ol>
            <li>幂级数的定义</li>
            <li>阿贝尔定理</li>
            <li>收敛圆与收敛半径</li>
            <li>收敛半径的求法：比值法、根值法</li>
            <li>幂级数的运算与性质</li>
          </ol>
          <li>泰勒级数</li>
          <ol>
            <li>泰勒中值定理</li>
            <li>泰勒级数的收敛半径</li>
            <li>指数函数的泰勒级数</li>
            <li>三角函数的泰勒级数</li>
          </ol>
          <li>洛朗级数</li>
          <ol>
            <li>泰勒级数的局限性</li>
            <li>双边幂级数的定义</li>
            <li>双边幂级数的收敛性</li>
            <li>函数展开成洛朗级数</li>
            <li>利用洛朗级数求积分</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>研究级数有什么作用？</li>
          <li>泰勒级数的局限性在哪？为什么很多复变函数没有泰勒级数？</li>
          <li>洛朗级数如何扩展了泰勒级数？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>由于多年的应试教育，学生们认为数学与物理只是用来考试的，在实际的生产生活中没有作用。</li>
          <li>学生的微积分基础很差，很难理解复变函数</li>
          <li>学生认为复数是虚构的数，难以接受复数的概念</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="留数的计算"
      difficulty="留数与洛朗级数的关系"
      :week="8"
      :count="7"
      :weekday="weekday"
      topic="留数定理"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>孤立奇点</li>
          <ol>
            <li>孤立奇点的定义</li>
            <li>可去奇点</li>
            <li>极点</li>
            <li>本性奇点</li>
            <li>函数的零点与极点的关系</li>
            <li>函数在无穷远点的性态</li>
          </ol>
          <li>留数</li>
          <ol>
            <li>复习洛朗级数</li>
            <li>留数的定义</li>
            <li>由柯西积分与洛朗级数推导留数定理</li>
            <li>使用留数定理的条件</li>
            <li>留数与可去奇点、本性奇点的关系</li>
          </ol>
          <li>留数的计算</li>
          <ol>
            <li>留数的计算规则</li>
            <li>常见函数的留数</li>
            <li>求极点处留数的若干公式</li>
            <li>利用洛朗级数求留数</li>
            <li>无穷远点的留数</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>为什么要研究孤立奇点？孤立奇点与留数有什么关系？</li>
          <li>留数与洛朗级数有什么关系？</li>
          <li>留数是如何简化积分计算的？</li>
          <li>常见函数的留数如何计算？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>由于多年的应试教育，学生们认为数学与物理只是用来考试的，在实际的生产生活中没有作用。</li>
          <li>学生的微积分基础很差，很难理解复变函数</li>
          <li>学生认为复数是虚构的数，难以接受复数的概念</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="留数在定积分计算上的应用"
      difficulty="定积分转换为留数"
      :week="9"
      :count="8"
      :weekday="weekday"
      topic="留数在定积分计算上的应用"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>计算<Math :tex='String.raw`\int_0^{2\pi}f(\cos\theta,\sin\theta)d\theta`' /></li>
          <ol>
            <li>利用欧拉公式，将三角函数转化为指数函数</li>
            <li>将定积分转化为沿正向单位圆周的曲线积分</li>
            <li>利用留数计算沿正向单位圆周的曲线积分</li>
          </ol>
          <li>计算<Math :tex='String.raw`\int_{-\infty}^{+\infty} f(x)dx`' /></li>
          <ol>
            <li>条件：<Math tex='f(x)'/>是<em>有理函数</em>，且分母的次数至少比分子的次数高二次，
              且<Math tex='f(x)'/>在实轴上没有孤立奇点</li>
            <li>选取以原点为中心的圆作为曲线积分的路径</li>
            <li>计算沿着这个圆周的积分</li>
            <li>将圆周的半径扩展为无穷大时，计算积分的极限</li>
          </ol>
          <li>计算<Math :tex='String.raw`\int_{-\infty}^{+\infty} f(x)e^{aix}dx`' /></li>
          <ol>
            <li>条件：<Math tex='f(x)'/>是有理函数，且分母的次数比至少比分子的次数高一次，且在实轴上没有孤立奇点</li>
            <li>选取以原点为中心的圆作为曲线积分的路径</li>
            <li>计算沿着这个圆周的积分</li>
            <li>将圆周的半径扩展为无穷大时，计算积分的极限</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>计算定积分<Math :tex='String.raw`\int_0^{2\pi} \frac{\cos 2\theta}{1-2p\cos\theta+p^2}d\theta`' /></li>
          <li>计算定积分<Math :tex='String.raw`\int_{-\infty}^{+\infty} \frac{x^2}{(x^2+a^2)(x^2+b^2)}dx`' /></li>
          <li>计算定积分<Math :tex='String.raw`\int_0^{+\infty} \frac{x\sin x}{x^2+a^2}dx`' /></li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>由于多年的应试教育，学生们认为数学与物理只是用来考试的，在实际的生产生活中没有作用。</li>
          <li>学生的微积分基础很差，很难理解复变函数</li>
          <li>学生认为复数是虚构的数，难以接受复数的概念</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="Laplace变换"
      difficulty="卷积的定义及应用"
      :week="10"
      :count="9"
      :weekday="weekday"
      topic="Laplace变换与卷积"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>Fourier变换</li>
          <ol>
            <li>信号函数<Math tex='f(t)'/></li>
            <li>Fourier变换将<em>时域</em>信号<Math tex='f(t)'/>变换为<em>频域</em>信号
              <Math :tex='String.raw`F(\omega)`'/></li>
            <li>Fourier变换的原理及公式</li>
            <li>Fourier变换的局限性</li>
          </ol>
          <li>Laplace变换</li>
          <ol>
            <li>Laplace变换如何克服Fourier变换的局限性</li>
            <li>Laplace变换第一步：时域信号乘以衰减函数，得到<Math tex='f(t)e^{-\alpha t}'/>，其中
            <Math :tex='String.raw`\alpha>0`'/></li>
            <li>Laplace变换第二步：对衰减的信号<Math tex='f(t)e^{-\alpha t}'/>做Fourier变换，得到
            <Math :tex='String.raw`F(\omega)`'/></li>
            <li>Laplace变换得到<em>二元函数</em><Math :tex='String.raw`F(\ln\alpha,\omega)`'/>，
            令<Math :tex='String.raw`s=\ln\alpha+i\omega`'/>，即可将二元函数
              <Math :tex='String.raw`F(\ln\alpha,\omega)`'/>转化为<em>复变函数</em>
              <Math tex='F(s)'/>
            </li>
          </ol>
          <li>Laplace变换的性质</li>
          <ol>
            <li>Laplace变换的线性性质</li>
            <li>Laplace变换的微分性质</li>
            <li>Laplace变换的积分性质</li>
            <li>Laplace变换的延迟性质</li>
          </ol>
          <li>Laplace变换的逆变换</li>
          <li>卷积</li>
          <ol>
            <li>卷积的定义</li>
            <li>卷积的应用</li>
            <li>Laplace变换与卷积的关系</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>在网上的什么地方能见到Fourier变换？</li>
          <li>Fourier变换的局限性在哪里？为什么Laplace变换能克服Fourier变换的局限性？</li>
          <li>根据Laplace变换的性质，能推导出初等函数的Laplace变换么？</li>
          <li>生产生活实践中，有哪些卷积的应用？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>由于多年的应试教育，学生们认为数学与物理只是用来考试的，在实际的生产生活中没有作用。</li>
          <li>学生的微积分基础很差，很难理解复变函数</li>
          <li>学生认为复数是虚构的数，难以接受复数的概念</li>
        </ol>
      </template>
    </Plan>
  </Paper>
</template>

<style scoped></style>
