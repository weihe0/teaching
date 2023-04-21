import {AILayout} from "@/components/layouts";
import {Slide} from "@/components/slide";

export default function Robot(){
  return <AILayout>
    <Slide title={'项目二 智能机器人'}>
      <ul>
        <li>智能机器人的基本含义</li>
        <li>典型的智能机器人</li>
        <li>主要应用领域</li>
        <li>关键技术</li>
      </ul>
    </Slide>
    <Slide title={'智能机器人的基本含义'}>
      <ul>
        <li>感觉要素</li>
        <li>运动要素</li>
        <li>思考要素</li>
      </ul>
    </Slide>
    <Slide title={'常见类型'}>
      <ul>
        <li>工业智能机器人</li>
        <li>农业智能机器人</li>
        <li>服务智能机器人</li>
        <li>探索智能机器人</li>
      </ul>
    </Slide>
    <Slide title={'关键技术'}>
      <ul>
        <li>多传感器信息融合</li>
        <li>导航与定位</li>
        <li>路径规划</li>
        <li>智能控制</li>
        <li>人机接口技术</li>
      </ul>
    </Slide>
    <Slide title={'智能机器人的发展方向'}>
      <ul>
        <li>可编程机器人：编程序完成重复操作</li>
        <li>感知机器人：具有感知周围环境的能力</li>
        <li>智能机器人：具有识别、推理、规划和学习等机制</li>
      </ul>
    </Slide>
    <Slide title={'技术方向'}>
      <ul>
        <li>机器人网络化</li>
        <li>软计算方法：概率推理、神经网络、遗传算法</li>
        <li>机器学习</li>
        <li>智能人机接口</li>
      </ul>
    </Slide>
    <Slide title={'智能制造案例'}>
      <a href="https://www.koloe.cn/information/17330.html" target="_blank">
        用特斯拉超级工厂经验，打造新一代制造业生产模式
      </a>
    </Slide>
  </AILayout>
}
