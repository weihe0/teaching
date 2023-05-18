<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import AILayout from '@/layouts/AILayout.vue'

const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="人工智能语言Python">
          <ul>
            <li>Python语言的特点</li>
            <li>Python语言的功能</li>
            <li>Python语言的元素</li>
            <li>Python语言的模块</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="Python介绍">
          <ul>
            <li>
              实现人工智能的<em>首选</em>语言
            </li>
            <li>
              包含许多人工智能的<em>模块</em>
            </li>
            <li>简单易用</li>
            <li>
              使人工智能的研究者<em>专注于</em>考虑人工智能的技术，而不是编程语言的<em>细节</em>
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="Python语言的特点">
          <ul>
            <li>简单：不熟悉计算机也能学会</li>
            <li>明确：可以从Python程序直观地看出程序的意图</li>
            <li>优雅：程序的排版比较美观，令人愿意阅读</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="使用Python语言">
          <ol>
            <li>
              <a href="https://mirrors.huaweicloud.com/python/3.10.11/python-3.10.11.exe">
                点此下载Python语言
              </a>
            </li>
            <li>运行安装包，点击“Install Now”</li>
            <li>打开Python用于按行运行Python程序</li>
            <li>使用IDLE编写Python源文件</li>
            <li>
              在<em>中国境内</em>使用Python的<em>额外步骤</em>：<br />
              在用户目录下创建pip.ini文件，文件内容
            </li>
          </ol>
          <CodeBlock>
            [global]
            <br />
            index-url = https://pypi.tuna.tsinghua.edu.cn/simple
            <br />
            [install]
            <br />
            trusted-host = pypi.tuna.tsinghua.edu.cn
          </CodeBlock>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="一个简单的Python程序">
          <CodeBlock>
            <span>print("你好！")</span>
          </CodeBlock>
          <p>功能：向屏幕输出“你好！”</p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="Python语言的基础数据类型">
          <ul>
            <li>数：例如2.5</li>
            <li>字符串：例如"人工智能"</li>
            <li>元祖：例如('abcd', 786 , 2.23, 'runoob', 70.2)</li>
            <li>
              列表：例如{'['}18,27,'语言','Python'{']'}
            </li>
            <li>
              字典：例如{'{'}'课程':'人工智能概论', '教师':'何为', '教材':'人工智能技术与应用'{'}'}
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="Python的变量">
          <ul>
            <li>
              <dfn>变量</dfn>用于给<em>数据取名字</em>
            </li>
            <li>如，满分=100，那么“满分”这个变量就代表100</li>
            <li>
              变量代表的值<em>可以更改</em>，例如 满分=150
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="Python语言的运算">
          <ul>
            <li>四则运算：1.5+2*3</li>
            <li>比较运算：1.5&gt;2.5</li>
            <li>赋值运算：列表 = [1,2,3,4]</li>
            <li>引用列表元素：列表[2]</li>
            <li>获取字典条目：下午课程['课程']</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="判断与选择">
          <CodeBlock>
            <span>数 = -2</span>
            <br />
            <span>if (数 &lt; 0):</span>
            <br />
            <span class="indent-1">绝对值 = -数</span>
            <br />
            <span>else</span>
            <br />
            <span class="indent-1">绝对值 = 数</span>
          </CodeBlock>
          <p>求绝对值</p>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="循环">
          <CodeBlock>
            <span>总和 = 0</span>
            <br />
            <span>数 = 1</span>
            <br />
            <span>while (数 &lt;= 100):</span>
            <br />
            <span class="indent-1">总和 = 总和 + 数</span>
            <br />
            <span class="indent-1">数 = 数 + 1</span>
            <br />
            <span>print(总和)</span>
          </CodeBlock>
          <p>实现从1加到100</p>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <AILayout :slides="slides" />
</template>

<style scoped></style>
