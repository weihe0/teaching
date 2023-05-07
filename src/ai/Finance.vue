<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import AILayout from '@/layouts/AILayout.vue'
const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="项目八 人工智能+金融">
          <ul>
            <li>什么是金融</li>
            <li>身份识别</li>
            <li>风险控制</li>
            <li>智能客服</li>
            <li>行情研究</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="金融业务">
          <ul>
            <li>流通：汇款、ETC、在线支付、POS机</li>
            <li>投资：存款、股票、债券、理财产品</li>
            <li>融资：信用卡、贷款、发行股票、发行债券</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="人工智能在金融领域的主要应用">
          <ul>
            <li>银行网点终端机</li>
            <li>风险管理</li>
            <li>智能客服</li>
            <li>智能投顾</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="智能投顾案例">
          <ul>
            <li>
              <a href={'https://www.thepaper.cn/newsDetail_forward_22311305'} target={'_blank'}>
                首席策略师随时待命！摩根士丹利们接入GPT-4：能干什么，效果如何
              </a>
            </li>
            <li>帮助摩根约一万六千名财富管理顾问，充分利用该行庞大的研究资源和数据库</li>
            <li>数十万页涵盖投资策略、市场研究和评论以及分析师见解的知识和洞见</li>
            <li>GPT-4有能力将所有这些内容资源，整合并解析为更可用和更易获取的展现形式</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="智能投顾的效率">
          <blockquote>
            “你可以把它想象成让我们的<em>首席投资策略师</em>、<em>首席全球经济学家</em>、
            <em>全球股票策略师</em>和全球各地的<em>其他分析师</em>，每天都在为每位顾问待命。
            我们相信，这对于我们公司来说是一种革命性的能力。”
          </blockquote>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="Citadel尝试ChatGPT">
          <blockquote>
            “从写代码到翻译再到信息解读，我们公司日常运营中的各种业务，都可以用ChatGPT。”
          </blockquote>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="智能客服">
          <ul>
            <li>
              人工智能记者写出一篇当日股市行情的新闻报道，仅需<em>0.3秒</em>
            </li>
            <li>
              半数以上记者阅读报道后<em>分不清</em>是人工智能还是人工编写的
            </li>
            <li>
              交通银行的“娇娇”，基于智能语音、智能图像、生物特征识别等技术进行人际交流，分担部分大堂经理的工作
            </li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'人工智能财经新闻'}>
          <a href={'https://new.qq.com/rain/a/20220125A05TMR00'} target={'_blank'}>
            卷起来！“无人化”、24小时无间断播报！财经新闻这么卷？
          </a>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'智能终端取代银行网点'}>
          <ul>
            <li>
              <a href={'http://www.ecovacs-c.com/news/yingyonganli/143.html'} target={'_blank'}>
                年内431家银行网点关门！看金融机器人困中破局，助力银行智能转型！
              </a>
            </li>
            <li>
              <a
                href={'http://www.xinhuanet.com/politics/2022-01/25/c_1128296896.htm'}
                target={'_blank'}
              >
                身边的银行网点会消失吗——银行业服务终端模式调整升级情况调查
              </a>
            </li>
            <li>
              <a href={'https://www.sohu.com/a/201503343_733188'} target={'_blank'}>
                银行自助设备,让服务更便捷！智能化终端机已成为银行网点“标配”
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
        <Slide title={'智能终端的关键技术'}>
          <ul>
            <li>人脸识别、虹膜识别</li>
            <li>人机对话</li>
            <li>图像识别</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'人脸识别过程'}>
          <ol>
            <li>人脸检测：框出人脸</li>
            <li>人脸比对：计算拍摄的人脸与证件的人脸的相似度</li>
            <li>人脸关键点检测：定位人脸的五官及轮廓</li>
            <li>活体检测：检测是不是用照片或者视频欺骗人脸识别</li>
          </ol>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'人脸检测'}>
          <figure>
            <img src={'/face-detection.jpg'} alt={'人脸识别'} />
            <figcaption>选择照片中人脸的区域，不涉及身份识别</figcaption>
          </figure>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'漏洞：用伪造的人脸骗过人脸识别系统'}>
          <figure>
            <img src={'/ai/deepfake.gif'} alt={'伪造人脸'} width={'70%'} />
            <figcaption>伪造人脸</figcaption>
          </figure>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'活体检测'}>
          <figure>
            <img src={'/ai/liveness.jpg'} alt={'活体检测'} width={'70%'} />
            <figcaption>确认是真人，而不是拍摄或合成的人类</figcaption>
          </figure>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title={'人工智能换脸'}>
          <ul>
            <li>
              <a href={'https://m.thepaper.cn/baijiahao_7103231'} target={'_blank'}>
                和马斯克Zoom开个会，竟是AI换脸
              </a>
            </li>
            <li>用 Avatarify 将自己的脸替换成别人的脸，在视频会议中的表现也十分流畅</li>
            <li>
              <a href={'https://github.com/alievk/avatarify'} target={'_blank'}>
                项目传送门
              </a>
            </li>
            <li>
              <a href={'https://arxiv.org/pdf/2003.00196.pdf'} target={'_blank'}>
                论文传送门
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
