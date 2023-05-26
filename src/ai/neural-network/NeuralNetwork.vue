<script setup lang='tsx'>

import Slide from '@/layouts/Slide.vue'
import type { Component } from 'vue'
import Dataset from '@/ai/neural-network/Dataset.vue'
import AILayout from '@/layouts/AILayout.vue'
import Prediction from '@/ai/neural-network/Prediction.vue'
const slides:Component[]=[
  {
    render(){
      return <Slide title='神经网络与做题家'>
        <ol>
          <li>设定神经网络</li>
          <li>准备题库</li>
          <li>让神经网络做题</li>
          <li>阅卷评分</li>
          <li>根据分数调整神经网络</li>
          <li>重复第3-5步，直到神经网络的分数达标</li>
        </ol>
      </Slide>
    }
  },
  Dataset,
  {
    render(){
      return <Slide title='神经网络的题库'>
        <img src='/ai/mnist.jpg' width='600' alt='MNIST' />
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='题库的重要性'>
        <ul>
          <li>题库对于神经网络的表现<em>至关重要</em></li>
          <li>准备题库是设计神经网络的<em>首要步骤</em></li>
          <li>有专业的公司负责给神经网络准备题库</li>
          <li>相关报道：<a
            href='http://scitech.people.com.cn/n1/2019/0910/c1007-31345745.html' target='_blank'>
            数据标注师 人工智能背后的人工力量
          </a></li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='常见题库——MNIST'>
        <img src='/ai/mnist.jpg' width='600' alt='MNIST' />
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='人脸库'>
        <figure>
          <img src='/ai/celeba.webp'  alt='人脸库' />
          <figcaption>包含20万张人脸</figcaption>
        </figure>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='ChatGPT数据集'>
        <a href='https://mp.weixin.qq.com/s?__biz=MzkxMjMxMjIwNQ==&mid=2247515338&idx=1&sn=660fb7fcac2f6075c2c1672313cead03&chksm=c10c2e28f67ba73e1be3e8fff2bccac094855194e50f506b9458baf61429eff776c7ccc5cb4e&scene=21#wechat_redirect'
           target='_blank'>ChatGPT的数据集有多大？</a>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='神经网络做题'>
        <img src='/ai/write.png' alt='做题' width='600' />
      </Slide>
    }
  },
  Prediction,
  {
    render(){
      return <Slide title='评分'>
        <p>评分标准：神经网络的答案与标准答案的<em>整体偏差</em></p>
        <ul>
          <li>L1损失：用于判断题，做错，偏差加1，做对，偏差不增加</li>
          <li>均方误差：用于计算题，计算神经网络的运算结果与标准结果的均方误差</li>
          <li>交叉熵：用于选择题，计算给出的选项与正确选项的偏差</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='根据评分调整神经网络'>
        <ol>
          <li>构建错题集</li>
          <li>寻找神经网络中错题的根源</li>
          <li>从根源调整神经网络，尽量减小误差</li>
          <li>优化1：牺牲误差，<em>增大调整幅度</em></li>
          <li>优化2：只针对一小部分错题进行调整</li>
          <li>优化3：误差较大时，大幅度调整，误差较小时，小幅度调整</li>
        </ol>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='神经网络的应用'>
        <ul>
          <li>让神经网络做没有见过的新题，看看效果</li>
          <li>过拟合：神经网络在题库上表现良好，在新题上表现糟糕</li>
          <li>缓解过拟合的方法</li>
          <ul>
            <li>增大题库</li>
            <li>适当降低神经网络的复杂度，避免“死记硬背”</li>
            <li>简化答案</li>
          </ul>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title='神经网络的对学生学习过程的启发'>
        <ul>
          <li>尽早且频繁<em>测试</em>学习效果</li>
          <li>题库的<em>广度</em>比<em>深度</em>更重要</li>
          <li>学会挑选<em>典型题目</em></li>
          <li>重点针对<em>错题集</em>加以改进</li>
          <li>重视<em>常见错误</em>，不必过于注意<em>罕见错误</em></li>
          <li>不要死记硬背题库，学会举一反三</li>
        </ul>
      </Slide>
    }
  }
]
</script>

<template>
<AILayout :slides='slides' />
</template>

<style scoped>

</style>
