<template>
  <CLangLayout>

      <CSlide title="第7章 运算符与表达式">
        <ol>
          <li>赋值运算符与赋值表达式</li>
          <li>算术运算符与算术表达式</li>
          <li>自增自减运算符</li>
          <li>运算符的优先级与结合性</li>
        </ol>
      </CSlide>
      <CSlide title="赋值运算符">
        <ul>
          <li>举例：<code>a=1+2</code></li>
          <li>赋值也是<em>运算</em>，结果 = 右边的表达式的值</li>
          <li>作用是将等号左边的变量，设定为等号右边的表达式的值</li>
          <li>与数学的等号<em>不同</em>，例如<code>a=a+1</code></li>
        </ul>
      </CSlide>
    <CSlide title="赋值运算符的常见错误">
      <ul>
        <li>把 = 当做等号，在C语言中，等号是<code>==</code></li>
        <li>赋值符号的左右颠倒，如<code>1 = a</code></li>
        <li>忘记在语句末尾加分号，例如<code>a=a+1</code></li>
        <li>赋值符号的左边不表示某个变量，例如<code>a+1=b+1</code></li>
      </ul>
    </CSlide>
    <CSlide title="用赋值运算交换变量的值">
      <pre><code>int t = a;
a = b;
b = t;</code></pre>
      <p>联想：一瓶酒与一瓶水如何交换？需要借助第三个瓶子</p>
    </CSlide>
    <CSlide title="算术运算符">
      <ol>
        <li>左变量/常量 运算符（+-*/） 右变量/常量</li>
        <li>左右的类型相同么？如果是，跳过第3步</li>
        <li>如果左右的类型不同，转换其中一个类型为另一个</li>
        <li>运算结果在类型的范围内么？如果超范围，转到5</li>
        <li>如果是unsigned超范围，那么新结果 = 原结果 % (unsigned的最大值 + 1)</li>
        <li>如果是signed超范围，<em>结果不可预料</em></li>
      </ol>
    </CSlide>
    <CSlide title="整数的除法与取余">
      <table>
        <tr>
          <td>5/3==1</td>
          <td>5%3==2</td>
        </tr>
        <tr>
          <td>-5/3==-1</td>
          <td>-5%3==-2</td>
        </tr>
        <tr>
          <td>5/-3==-1</td>
          <td>5%-3==2</td>
        </tr>
        <tr>
          <td>-5/-3==1</td>
          <td>-5%-3==-2</td>
        </tr>
      </table>
      <em>取余（%）的正负取决于被除数</em>
    </CSlide>
    <CSlide title="隐式类型转换">
      <ol>
        <li>转换<em>值的类型</em>而不是<em>变量的类型</em></li>
        <li>整数类型&rightarrow;float&rightarrow;double&rightarrow;long double</li>
        <li>signed&circledcirc;signed或unsigned&circledcirc;unsigned，char&rightarrow;short&rightarrow;int&rightarrow;long&rightarrow;long
          long
        </li>
        <li>signed&circledcirc;unsigned</li>
        <ol>
          <li>如果signed的范围 &gt; unsigned的范围，unsigned&rightarrow;signed</li>
          <li>否则，signed转unsigned。<em>如果signed是负数，那么转换后的数 = unsigned的最大值 + 1 - 负数的绝对值</em></li>
        </ol>
      </ol>
    </CSlide>
    <CSlide title="强制类型转换">
      <ul>
        <li>语法：<code>(类型名)变量</code>或<code>(类型名)(表达式)</code></li>
        <li><code>(类型名)</code>的优先级<em>高于</em>二元运算符（+-*/%等等）</li>
        <li>举例<code>int a=2; float b=1.6; int c=a+(int)b;</code></li>
        <li>问题：如何将<code>a+b</code>的结果转换为int？&#x1F914;</li>
      </ul>
    </CSlide>
    <CSlide title="赋值运算中的强制类型转换">
      <ul>
        <li>赋值符号右边的值的类型<em>强制转换</em>为左边的类型</li>
        <li>举例<code>int a; a=1.6;</code>效果是<code>a==1</code></li>
        <li>浮点数&rightarrow;整数，截取整数部分，<em>不是四舍五入</em></li>
        <li>unsigned大范围&rightarrow;小范围，大数 % (小范围最大值 + 1)</li>
        <li>signed大范围&rightarrow;小范围，<em>结果不可预料，谨慎使用</em></li>
      </ul>
    </CSlide>
    <CSlide title="类型转换的推荐做法">
      <ol>
        <li>尽量不要混用不同类型</li>
        <li>如要混用不同类型，尽量保证一种类型的范围<em>完全包含</em>另一种类型</li>
        <li>无必要不使用unsigned类型</li>
        <li>必须使用unsigned类型时，unsigned&circledcirc;unsigned，或者，unsigned&rightarrow;更大的signed</li>
      </ol>
    </CSlide>
    <CSlide title="unsigned运算超范围的处理">
      <canvas width="960" height="540" ref="unsigned_clock"></canvas>
      <div>
        <input type="number" v-model="n"/>
        <button @click="run">运行</button>
      </div>
    </CSlide>
      <CSlide title="复合赋值">
        <ul>
          <li><code>value+=3</code>等价于<code>value=value+3</code></li>
          <li><code>value-=3</code>等价于<code>value=value-3</code></li>
          <li><code>value*=3</code>等价于<code>value=value*3</code></li>
          <li><code>value/=3</code>等价于<code>value=value/3</code></li>
        </ul>
      </CSlide>
      <CSlide title="算术运算符">
        <ul>
          <li>“+”运算符：做加法<code>a+b</code>，做正号<code>+520</code></li>
          <li>“+”运算符：做减法<code>a-b</code>，做负号<code>-520</code></li>
          <li>“*”乘法，结果超过范围将产生<em>不可预料的后果</em></li>
          <li>“/”除法，<em>整数/整数=整数</em>，其它情况得到<em>浮点数</em></li>
        </ul>
      </CSlide>
      <CSlide title="自增自减运算符">
        <ul>
          <li><code>b=++a;</code>相当于<code>a+=1;b=a;</code></li>
          <li><code>b=--a;</code>相当于<code>a-=1;b=a;</code></li>
          <li><code>b=a++;</code>相当于<code>b=a;a+=1;</code></li>
          <li><code>b=a--;</code>相当于<code>b=a;a-=1;</code></li>
          <li><em>慎用</em>自增自减运算符</li>
        </ul>
      </CSlide>
      <CSlide title="优先级与结合性">
        <ul>
          <li>表达式先看优先级</li><li>例如<code>x + y * z</code>相当于<code>x + (y * z)</code></li>
          <li>优先级<em>相同</em>时，再看<em>结合性</em>：左结合或右结合</li>
          <li>例如<code>a - b + c</code>相当于<code>(a - b) + c</code></li>（左结合）
          <li>例如<code>a = b = c</code>相当于<code>a = (b = c)</code></li>（左结合）
        </ul>
      </CSlide>
      <CSlide title="算术表达式实例">
        <p>苹果公司的CEO来中国考察。他是美国人，使用华氏温度。摄氏温度\(c\)与华氏温度\(f\)的转换公式为
          \[f=\frac{9}{5}c+32, c=\frac{5}{9}(f-32)\]</p>
      </CSlide>
    <CSlide title="程序要求">
      <p>输入一个摄氏温度\(c\)，得到华氏温度，再输入一个华氏温度\(f\)，得到摄氏温度</p>
      <p>如果程序正确，那么当\(c=20\)时，\(f={{9/5*20+32}}\)，当\(f=68\)时，\(c={{5/9*(68-32)}}\)</p>
    </CSlide>
  </CLangLayout>
</template>

<style scoped>
ul{
  margin: 0;
}
em{
  font-family: sans-serif;
  font-style: normal;
}
button {
  width: 80px;
  height: 40px;
}

input {
  height: 40px;
  width: 80px;
  font-size: 1em;
}
</style>

<script setup lang="ts">
import CSlide from "./CSlide.vue";
import CLangLayout from "./CLangLayout.vue";
import {onMounted, onUpdated, ref} from "vue";
import {renderMathInDocument} from "mathlive";
const current=ref(0);
const unsigned_clock = ref<HTMLCanvasElement | null>(null);
let c: CanvasRenderingContext2D;
onMounted(() => {
  c = unsigned_clock.value!.getContext("2d")!;
  c.translate(c.canvas.width / 2, c.canvas.height / 2);
  c.font = "1em Arial"
  let angle = -Math.PI / 2;
  const radius = 200;
  for (let i = 0; i < 16; i++) {
    let text = i < 10 ? `${i} ` : `${i}`;
    c.fillText(text, radius * Math.cos(angle) - c.measureText(text).width / 2, radius * Math.sin(angle));
    angle += Math.PI / 8;
  }
  c.moveTo(0, 0);
  c.lineTo(0, -150);
  c.lineWidth = 2;
  c.stroke();
  renderMathInDocument();
})
let n = ref(0);

function run() {
  if (n.value >= 0) {
    n.value %= 16;
  } else {
    n.value = n.value % 16 + 16;
  }
  c.strokeStyle = "antiquewhite";
  c.stroke();
  c.beginPath();
  c.strokeStyle = "black";
  c.moveTo(0, 0);
  const pointer_angle = -Math.PI / 2 + n.value * Math.PI / 8;
  c.lineTo(150 * Math.cos(pointer_angle), 150 * Math.sin(pointer_angle));
  c.stroke();
}

</script>
