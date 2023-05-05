<script setup lang='tsx'>
import type {Component} from 'vue'
import Slide from '@/layouts/Slide.vue'
import AILayout from '@/layouts/AILayout.vue'
const slides:Component[]=[
  {
    render(){
      return <Slide title="项目七 人工智能+医疗">
        <ul>
          <li>人工智能+医疗的基本概念</li>
          <li>人工智能+医疗的应用</li>
          <li>人工智能+医疗的历史</li>
          <li>人工智能+医疗的案例</li>
          <li>人工智能+医疗的意义</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="人工智能+医疗的基本概念">
        <ul>
          <li>技术：机器学习、自然语言处理等</li>
          <li>数据：医学影像、医疗案例、调查数据等</li>
          <li>功能：辅助诊断、疗法选择、风险预测、减少医疗事故</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="传统医疗的不足">
        <ul>
          <li>医生培训时间过长：五年至八年的学习+三年的规范化培训</li>
          <li>医学诊断结果受医生水平的影响</li>
          <li>医疗数据与案例分散在各个医院</li>
          <li>优质医疗供给不足</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="提升医生和医院的效率">
        <ul>
          <li>提升医学影像解读的速度和准确性</li>
          <li>早期疾病筛查</li>
          <li>医疗语音录入技术</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="提升医生的培养效率">
        <ul>
          <li>人类医生：5年专业本科教育+3年规范化培训</li>
          <li>训练人工智能医生</li>
          <li><em>短时间</em>学习<em>海量医学案例</em></li>
          <li>学成后可以快速传播</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="提升医疗资源调配效率">
        <ul>
          <li>人工智能分诊，不用挤大医院</li>
          <li>人工智能医保监管</li>
          <li>打破医保信息孤岛</li>
        </ul>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="人工智能+医疗的历史">
        <ol>
          <li>1976年，研发血液感染病的诊断与咨询系统——MYCIN</li>
          <li>DxPlan诊疗系统</li>
          <li>IBM Watson治疗肿瘤：几秒内筛选出数10年治疗历史，150万份患者记录</li>
          <li>腾讯觅影，早期筛查癌症，准确率高，速度快</li>
          <li>“达芬奇”手术机器人</li>
        </ol>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="手术机器人">
        <img width={600} height={600} src="/ai/operation-glass.jpg" alt="参观手术机器人"/>
        <figure>

          <figcaption>手术机器人3D眼镜</figcaption>
        </figure>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="帝国理工哈姆林中心">
        <a href="https://www.cn-healthcare.com/articlewm/20220315/content-1326077.html" target="_blank">
          帝国理工哈姆林中心-机器人微创手术倡导者
        </a>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="AlphaFold研发药物">
        <a href="https://www.jiemian.com/article/5345339.html" target="_blank">
          “AlphaGo”进化版来了：新靶向药在路上，阿尔茨海默症、帕金森症攻克在即？
        </a>
        <a href="https://new.qq.com/rain/a/20220804A049I200" target="_blank">
          蛋白质宇宙来了！AlphaFold把几乎所有已知蛋白质的结构预测完了
        </a>
      </Slide>
    }
  },
  {
    render(){
      return <Slide title="人工智能诊断心脏病">
        <a href="https://www.sohu.com/a/156742680_804770" target="_blank">
          HeartFlow如何使用AI来检测冠心病
        </a>
      </Slide>
    }
  }
]
</script>

<template>
<AILayout :slides='slides'/>
</template>

<style scoped>

</style>
