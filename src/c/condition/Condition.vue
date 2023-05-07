<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import CLayout from '@/layouts/CLayout.vue'
import CodeBlock from '@/components/CodeBlock.vue'
const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="第8章 条件判断语句">
          <ul>
            <li>
              单个<code>if</code>语句
            </li>
            <li>
              <code>if ... else ... </code>语句
            </li>
            <li>
              <code>if ... else if </code>语句
            </li>
            <li>
              <code>if</code>语句嵌套
            </li>
            <li>条件运算符</li>
            <li>
              <code>switch</code>语句
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="单个if语句">
          <CodeBlock>
            int score;
            <br />
            scanf(&quot;%d&quot;,&nbsp;&amp;score);
            <br />
            if&nbsp;(score&lt;60)
            <br />
            {'{'}
            <br />
            <span class="indent-1">printf(&quot;fail&quot;);</span>
            <br />
            {'}'}
            <br />
          </CodeBlock>
          <p>
            输入多少时，输出<code>fail</code>？&#x1F914;
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="注意事项1">
          <p>
            if语句内<em>不要打分号</em>
          </p>
          <CodeBlock>
            if (score&lt;60)<span style="color: orange">;</span>
            <br />
            <span class="indent-1 omit">printf(&quot;fail&quot;);</span>
          </CodeBlock>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="注意事项2">
          <p>
            如果不写花括号，<code>if</code>语句内只包含一条语句
          </p>
          <CodeBlock>
            if (score&lt;60)
            <br />
            <span class="indent-1">printf(&quot;you&nbsp;&quot;);</span>
            <br />
            <span class="indent-1 omit">printf(&quot;fail&quot;);</span>
          </CodeBlock>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="if ... else语句形式">
          <CodeBlock>
            int&nbsp;num=12;
            <br />
            if&nbsp;(num&gt;18)
            <br />
            <span class="indent-1 omit">printf(&quot;greater&nbsp;than&nbsp;18);</span>
            <br />
            else
            <br />
            <span class="indent-1">
              printf(&quot;less&nbsp;than&nbsp;or&nbsp;equal&nbsp;to&nbsp;18&quot;);
            </span>{' '}
          </CodeBlock>
          <p>
            <em>if和else必须匹配！</em>
          </p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="switch语句注意事项">
          <ul>
            <li>
              switch(<span style="color: saddlebrown">表达式</span>)中的
              <span style="color: saddlebrown">表达式</span>必须是<em>整数类型</em>或
              <em>字符类型</em>
            </li>
            <li>
              case 常量表达式:，<em>不能是变量</em>
            </li>
            <li>
              case 各个值应该<em>不同</em>
            </li>
            <li>default分支可以出现在任何位置，也可以没有</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="思考题：输入的某个月份属于哪个季节🤔">
          <div class="horizontal">
            <div>
              <p>输入月份</p>
              <ul>
                <li>春季：3 4 5月</li>
                <li>夏季：6 7 8月</li>
                <li>秋季：9 10 11月</li>
                <li>冬季：12 1 2月</li>
              </ul>
            </div>
            <div>
              <p>提示</p>
              <ol>
                <li>使用switch语句</li>
                <li>合理利用坠落规则</li>
              </ol>
            </div>
          </div>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <CLayout :slides="slides" />
</template>

<style scoped>
.horizontal {
  display: flex;
}
</style>
