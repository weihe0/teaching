<template>
  <div class="slide">
    <h1>第5章 数据类型</h1>
    <ul>
      <li>整数类型</li>
      <li>字符类型</li>
      <li>浮点数类型</li>
      <li><code class="hljs-function">printf</code>介绍</li>
    </ul>
  </div>
  <div class="slide">
    <h1>最简单的C程序</h1>
    <div class="two-columns">
        <pre><code>int main() {
    return 0;
}</code></pre>
      <ul>
        <li><code>int</code>表示整数类型</li>
        <li><code>main</code>表示程序从这里开始执行</li>
        <li><code>return 0;</code>表示main函数的返回值是0，表示程序没有出错，成功结束</li>
      </ul>
    </div>
  </div>
  <div class="slide">
    <h1>常量</h1>
    <ul>
      <li>常量是指程序中固定不变的量</li>
      <li>常量可以是任何的<em>基本</em>数据类型</li>
      <li>常量举例：<code>100</code>，<code>2.5</code>，<code>'A'</code>（字符型常量）</li>
    </ul>
  </div>
  <div class="slide">
    <h1>变量</h1>
    <ul>
      <li>变量是指<em>值可以改变</em>的量</li>
      <li><em>定义</em>变量的语法：<code class="hljs">数据类型 名字;</code></li>
      <li>变量定义举例</li>
      <ul>
        <li><code>int a;</code></li>
        <li><code>unsigned long number;</code></li>
      </ul>
      <li><code>数据类型</code>有可能包含<em>多个</em>单词</li>
      <li>变量定义的结尾有<em>分号</em><code>;</code></li>
    </ul>
  </div>
  <div class="slide">
    <h1>取变量名的规则</h1>
    <ul>
      <li><code>下划线、字母</code> + <code>下划线、字母、数字</code></li>
      <li>头部必须有，尾部可以没有</li>
      <li>合法的变量名：<code class="hljs"><span class="hljs-name">_</span></code>，<code>number123</code>，
        <code>your_name</code></li>
      <li>不合法的变量名：<span class="counterexample">123number</span>，<span class="counterexample">your name</span> </li>
    </ul>
  </div>
  <div class="slide">
    <h1>给变量名设定初始值</h1>
    <ul>
      <li>语法：<code>数据类型 名字 = 常量或常量表达式;</code></li>
      <li>举例：<code>int a = 1;</code>，<code>int b = 15+3</code></li>
    </ul>
  </div>
  <div class="slide">
    <h1>取变量名的推荐做法</h1>
    <ul style="width: 80%">
      <li>取有意义的名字，例如<code>height</code>，<code>salary</code></li>
      <li>如果名字包含多个单词，单词之间加下划线，例如<code>my_number</code>，或者单词首字母大写，例如<code>myNumber</code></li>
      <li>如果某个名字有可能<em>重名</em>，在名字前面加<em>下划线</em>，例如<code>_duplicate</code></li>
    </ul>
  </div>
  <div class="slide">
    <h1>整数类型</h1>
    <table>
      <tr><td><span class="omit">signed</span> short <span class="omit">int</span></td>
        <td>unsigned short <span class="omit">int</span></td>
      </tr>
      <tr><td><span class="omit">signed</span> int</td>
        <td>unsigned <span class="omit">int</span></td>
      </tr>
      <tr><td><span class="omit">signed</span> long <span class="omit">int</span></td>
        <td>unsigned long <span class="omit">int</span></td>
      </tr>
    </table>
    <ul>
      <li class="omit">灰色的部分可以省略</li>
      <li>变量和常量都有<em>类型</em></li>
    </ul>
  </div>
  <div class="slide">
    <h1>整数常量</h1>
    <ul>
      <li>十进制，开头<em>不能为0</em></li>
      <li>16进制，以<code>0x</code>或<code>0X</code>开头，例如<code>0xABCD</code></li>
      <li>8进制，以<code>0</code>开头，例如<code>0127</code></li>
      <li>整数常量默认为<code>int</code>类型</li>
      <li>如果整数常量超过<code>int</code>类型（大于最大值或者小于最小值）的范围，则为<code>long</code>类型</li>
      <li>在数字后面加<code>l</code>或者<code>L</code>，类型为<code>signed long int</code>，加<code>ul</code>或<code>UL</code>，类型为
        <code>unsigned long int</code></li>
    </ul>
  </div>
  <div class="slide">
    <h1>基本字符类型</h1>
    <ul>
      <li>只能表示<em>单个字符，不包括汉字</em></li>
      <li>字符常量举例：<code>'A'</code>，<code>'z'</code>，<code>'6'</code>，<code>'+'</code>，<code>' '</code></li>
      <li>字符常量反例：<span class="counterexample">'abc'</span></li>
      <li>数据类型：<code>char</code>或<code>signed char</code>或<code>unsigned char</code></li>
      <li>定义字符类型变量举例：<code>char ch = 'g';</code></li>
      <li><em>字符的本质是整数</em>，即C程序储存的是字符的<em>编码</em></li>
    </ul>
  </div>
  <div class="slide">
    <h1>转义字符</h1>
    <ol>
      <li>某些字符常量不能表示为<code>'字符'</code>，否则会产生<em>错误</em></li>
      <li>在单引号内以<code>\</code>开头的字符序列，会被<em>转义</em>为特殊的字符</li>
      <li><code>'\n'</code>换行符，<code>'\t'</code>制表符（Tab键）</li>
      <li><code>'\61'</code>十进制编码为61的字符</li>
      <li><code>'\x61'</code>16进制编码为0x61，即十进制97的字符</li>
    </ol>
  </div>
  <div class="slide">
    <h1>浮点类型</h1>
    <ul>
      <li>表示数学的小数</li>
      <li>数据类型为<code>float</code>（精度与范围适中）或<code>double</code>（精度与范围较大）</li>
      <li>浮点数常量默认为<code>double</code>，在末尾加上<code>f</code>或<code>F</code>才是<code>float</code></li>
      <li>精度与范围<em>不能兼顾</em>，精度&leftrightarrow;范围</li>
    </ul>
  </div>
  <div class="slide">
    <h1>运算与表达式</h1>
    <ul>
      <li>四则运算、<em>赋值运算</em>……</li>
      <li>C语言的运算极为丰富</li>
      <li>由一个和多个运算组成，能计算出结果的算式，就是<em>表达式</em></li>
      <li><em>表达式语句</em>的末尾必须加上<code>;</code></li>
    </ul>
  </div>
  <div class="slide">
    <h1>赋值运算</h1>
    <ul>
      <li>举例：<code>a=1+2</code></li>
      <li>赋值也是<em>运算</em>，结果 = 右边的表达式的值</li>
      <li>作用是将等号左边的变量，设定为等号右边的表达式的值</li>
      <li>与数学的等号<em>不同</em>，例如<code>a=a+1</code></li>
    </ul>
  </div>
  <div class="slide">
    <h1>交换变量的值</h1>
    <pre><code>int t = a;
a = b;
b = t;</code></pre>
    <p>联想：一瓶酒与一瓶水如何交换？需要借助第三个瓶子</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "CLang"
}
</script>

<style scoped>

</style>
