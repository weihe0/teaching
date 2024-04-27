<script setup lang="ts">
import ClangCarousel from '@/ClangCarousel.vue';
import Slide from '@/Slide.vue';
</script>

<template>
  <ClangCarousel>
    <Slide topic="表达式">
      <ol>
        <li>整数类型</li>
        <li>字符类型</li>
        <li>浮点类型</li>
        <li>优先级</li>
        <li>结合性</li>
      </ol>
    </Slide>
    <Slide topic="整数类型">
      <table>
        <tbody>
          <tr>
            <td>
              <span class="omit">signed</span> short
              <span class="omit">int</span>
            </td>
            <td>unsigned short <span class="omit">int</span></td>
          </tr>
          <tr>
            <td><span class="omit">signed</span> int</td>
            <td>unsigned <span class="omit">int</span></td>
          </tr>
          <tr>
            <td>
              <span class="omit">signed</span> long
              <span class="omit">int</span>
            </td>
            <td>unsigned long <span class="omit">int</span></td>
          </tr>
        </tbody>
      </table>
    </Slide>
    <Slide topic="整数类型常量">
      <table>
        <tbody>
          <tr>
            <td>int</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>unsigned</td>
            <td>6000U 或 6000u</td>
          </tr>
          <tr>
            <td>long</td>
            <td>6000L 或 6000l</td>
          </tr>
          <tr>
            <td>unsigned long</td>
            <td>6000UL 或 6000ul</td>
          </tr>
        </tbody>
      </table>
    </Slide>
    <Slide topic="字符类型">
      <ul>
        <li>类型名称：char，是英文character（字符）的缩写</li>
        <li>
          char类型只能表示美国与西欧的常用字符，<strong>不能表示汉字</strong>
        </li>
        <li>
          也有signed char，unsigned char，但char是signed char还是unsigned
          char<em>不确定</em>
        </li>
        <li>char的本质是字符的<em>编码</em>，是范围最小的整数类型</li>
      </ul>
    </Slide>
    <Slide topic="字符常量">
      <ul>
        <li>普通的字符常量：字符左右加单引号，例如'A'，'z'，'6'，','等等</li>
        <li>
          转义字符：直接输入源程序会导致编译错误，必须用以\开头的字符序列表示，例如'\n'，'\0'等等
        </li>
        <li>&#x1F914;为什么字符A必须用'A'表示，不能直接写成A？</li>
      </ul>
    </Slide>
    <Slide topic="浮点类型">
      <table>
        <thead>
          <tr>
            <td>类型名</td>
            <td>常量</td>
          </tr>
          <tr>
            <td>double</td>
            <td>123.456 或 1.23456e3 或 1.23456E3</td>
          </tr>
          <tr>
            <td>float</td>
            <td>123.456F 或 123.456f</td>
          </tr>
        </thead>
      </table>
    </Slide>
    <Slide topic="浮点类型的运算误差">
      <ul>
        <li>浮点类型的运算<em>有误差</em></li>
        <li>0.1+0.2!=0.3</li>
        <li>
          推荐做法：如果两个浮点表达式的差值小于一个很小的浮点数，可以视为相等
        </li>
      </ul>
    </Slide>
    <Slide topic="隐式类型转换规则">
      <ul>
        <li>小范围类型转为大范围类型</li>
        <li>类型范围大小排序：double，float，long，int，short</li>
        <li>
          unsigned int与signed int运算，signed转unsigned，其他整数类型类推
        </li>
        <li>unsigned long与signed int的范围大小关系不确定</li>
      </ul>
    </Slide>
    <Slide topic="类型转换的有关建议">
      <ul>
        <li>表达式尽量使用相同类型，尽量避免隐式类型转换</li>
        <li>非必要不使用unsigned类型</li>
      </ul>
    </Slide>
    <Slide topic="优先级与结合性">
      <ul>
        <li>
          unary表示单目运算符（如!），binary<sub>1</sub>与binary<sub>2</sub>表示两个双目运算符
        </li>
        <li>
          用于确定形如A binary<sub>1</sub> B binary<sub>2</sub> C以及unary A
          binary<sub>1</sub> B表达式的运算次序
        </li>
        <li>先使用优先级，后使用结合性</li>
      </ul>
    </Slide>
    <Slide topic="优先级与结合性举例">
      <div>
        <table>
          <tbody>
            <tr>
              <td><span class="op">!</span>a<span class="op">+</span>b*c/d</td>
              <td>!的优先级比+高</td>
            </tr>
            <tr>
              <td>
                (!a)<span class="op">+</span>b<span class="op">*</span>c/d
              </td>
              <td>+的优先级比*低</td>
            </tr>
            <tr>
              <td>
                (!a)+(b<span class="op">*</span>c<span class="op">/</span>d
              </td>
              <td>*与/的优先级相同，左结合</td>
            </tr>
            <tr>
              <td>(!a)+((b*c)/d)</td>
              <td>所有运算符的次序已确定</td>
            </tr>
          </tbody>
        </table>
        <p>
          &#x1F914;已知=与+=运算符优先级相同，右结合，如何确定a+=b=1的运算次序？
        </p>
      </div>
    </Slide>
  </ClangCarousel>
</template>

<style scoped lang="scss">
.omit {
  color: gray;
}
table {
  border-collapse: collapse;
  td {
    border: solid black 2px;
    padding: 0 1em;
  }
}
.op {
  color: dodgerblue;
}
</style>
