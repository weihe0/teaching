<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import AILayout from '@/layouts/AILayout.vue'
import Jill from '@/ai/Jill.vue'

const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="项目九 人工智能+教育">
          <ul>
            <li>人工智能+教育的基本概念</li>
            <li>人工智能+教育的发展建议</li>
            <li>人工智能+教育的发展趋势</li>
            <li>人工智能+教育的应用</li>
            <li>人工智能在教育领域的作用</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="人工智能+教育的基本概念">
          <ul>
            <li>人工智能+教育是信息化革命的新境界</li>
            <li>
              在<em>教育管理</em>、<em>教育教学</em>和<em>教育科研</em>与人工智能技术
              <em>全面融合</em>
            </li>
            <li>创建智能的学习时空环境</li>
            <li>通过塑造智能的学习环境，为教育带来更加便捷和高效的运行方式</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="人工智能+教育的发展建议">
          <ul>
            <li>加强数据汇聚，消除数据壁垒</li>
            <li>关注多远应用场景，避免人工智能强化应试教育</li>
            <li>开战跨学科研究</li>
            <li>提供开放平台和服务</li>
            <li>推广智能教育试验</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="人工智能+教育的发展趋势">
          <ul>
            <li>关注人机结合的制度体系与思维体系</li>
            <li>关注核心素养导向的人才培养</li>
            <li>关注个性化、多样性和适应性的学习</li>
            <li>关注人机协作的高效教学</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="ChatGPT对教育的冲击">
          <ul>
            <li>
              <a href="https://www.bilibili.com/video/BV1eG4y1N7b2" target="_blank">
                最强AI ChatGPT 能帮忙写作业？
              </a>
            </li>
            <li>
              <a href="https://www.bilibili.com/video/BV1JG4y1N7KL" target="_blank">
                用ChatGPT秒杀Python编程作业
              </a>
            </li>
            <li>
              <a href="https://www.bilibili.com/video/BV1ko4y1e71W" target="_blank">
                ChatGPT帮你自动完成PPT，8分钟搞定
              </a>
            </li>
            <li>
              <a href="https://www.php.cn/ai/531422.html" target="_blank">
                「ChatGPT克星」升级：老师可以把全班作业丢进去检测了
              </a>
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="人工智能在教育领域的作用">
          <ul>
            <li>实现个性化教学</li>
            <li>帮助学生获得解决复杂问题的能力，拓展批判性思维</li>
            <li>加快网络课堂的普及</li>
            <li>减少教师的重复劳动</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="减少教师的重复劳动">
          <img src="/ai/grade.jpg" height="600" alt="人工智能阅卷" />
        </Slide>
      )
    }
  },
  Jill,
  {
    render() {
      return (
        <Slide title="作业帮">
          <ul>
            <li>
              <a href="https://www.163.com/dy/article/I38GRTA40534A4SC.html" target="_blank">
                作业帮发布行业首款AI老师一对一学习机
              </a>
            </li>
            <li>
              <a href="https://www.infoq.cn/article/m9rDvI32ysd1XrSjXzaO" target="_blank">
                作业帮直播课如何用 AI 实现专注力和离席检测
              </a>
            </li>
            <li>
              <a href="https://user.guancha.cn/main/content?id=579503" target="_blank">
                小“试卷”有大智慧 作业帮AI技术满足高质量学习需求
              </a>
            </li>
          </ul>
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
