<template>
  <CLangLayout>

    <div class="carousel">
      <Slide title="第7章 运算符与表达式">
        <ol>
          <li>赋值运算符与赋值表达式</li>
          <li>算术运算符与算术表达式</li>
          <li>自增自减运算符</li>
          <li>运算符的优先级与结合性</li>
        </ol>
      </Slide>
      <Slide title="赋值运算符">
        <ul>
          <li>举例：<code>a=1+2</code></li>
          <li>赋值也是<em>运算</em>，结果 = 右边的表达式的值</li>
          <li>作用是将等号左边的变量，设定为等号右边的表达式的值</li>
          <li>与数学的等号<em>不同</em>，例如<code>a=a+1</code></li>
        </ul>
      </Slide>
      <Slide title="复合赋值">
        <ul>
          <li><code>value+=3</code>等价于<code>value=value+3</code></li>
          <li><code>value-=3</code>等价于<code>value=value-3</code></li>
          <li><code>value*=3</code>等价于<code>value=value*3</code></li>
          <li><code>value/=3</code>等价于<code>value=value/3</code></li>
        </ul>
      </Slide>
      <Slide title="算术运算符">
        <ul>
          <li>“+”运算符：做加法<code>a+b</code>，做正号<code>+520</code></li>
          <li>“+”运算符：做减法<code>a-b</code>，做负号<code>-520</code></li>
          <li>“*”乘法，结果超过范围将产生<em>不可预料的后果</em></li>
          <li>“/”除法，<em>整数/整数=整数</em>，其它情况得到<em>浮点数</em></li>
        </ul>
      </Slide>
      <Slide title="自增自减运算符">
        <ul>
          <li><code>b=++a;</code>相当于<code>a+=1;b=a;</code></li>
          <li><code>b=--a;</code>相当于<code>a-=1;b=a;</code></li>
          <li><code>b=a++;</code>相当于<code>b=a;a+=1;</code></li>
          <li><code>b=a--;</code>相当于<code>b=a;a-=1;</code></li>
          <li><em>慎用</em>自增自减运算符</li>
        </ul>
      </Slide>
      <Slide title="优先级与结合性">
        <ul>
          <li>表达式先看优先级</li><li>例如<code>x + y * z</code>相当于<code>x + (y * z)</code></li>
          <li>优先级<em>相同</em>时，再看<em>结合性</em>：左结合或右结合</li>
          <li>例如<code>a - b + c</code>相当于<code>(a - b) + c</code></li>（左结合）
          <li>例如<code>a = b = c</code>相当于<code>a = (b = c)</code></li>（左结合）
        </ul>
      </Slide>
      <Slide title="算术表达式实例">
        <p>苹果公司的CEO来中国考察。他是美国人，使用华氏温度。摄氏温度\(c\)与华氏温度\(f\)的转换公式为
          \[f=\frac{9}{5}c+32, c=\frac{5}{9}(f-32)\]</p>
        <p>输入一个摄氏温度\(c\)，得到华氏温度，再输入一个华氏温度\(f\)，得到摄氏温度</p>
        <p>如果程序正确，那么当\(c=20\)时，\(f={{9/5*20+32}}\)，当\(f=68\)时，\(c={{5/9*(68-32)}}\)</p>
      </Slide>
    </div>
  </CLangLayout>
</template>

<style scoped>
div{
  height: 100%;
}
ul{
  margin: 0;
}
em{
  font-family: sans-serif;
  font-style: normal;
}
</style>

<script setup lang="ts">
import Slide from "./Slide.vue";
import CLangLayout from "./CLangLayout.vue";
import {onMounted, ref} from "vue";
import {renderMathInDocument} from "mathlive";
const current=ref(0);
let slides:HTMLCollection;
onMounted(()=>{
  renderMathInDocument();
})

</script>
