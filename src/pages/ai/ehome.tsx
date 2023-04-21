import {Slide} from "@/components/slide";
import {AILayout} from "@/components/layouts";

export default function EHome(){
  return <AILayout>
    <Slide title="智能家居">
      <ul>
        <li>智能家居的基本概念</li>
        <li>智能家居的产品形态</li>
        <li>智能家居的应用方向</li>
        <li>万物互联</li>
      </ul>
    </Slide>
    <Slide title="智能家居的概念">
      <p><dfn>智能家居</dfn>是利用<em>综合布线技术、网络通信技术、安全防范技术、自动控制技术、音频技术</em>将与家居有关的设施集成起来，构建高效的住宅设施的管理系统</p>
    </Slide>
    <Slide title="智能家居案例（非真实）">
      <ul>
        <li><a href="https://www.bilibili.com/video/BV1Ft411V78z" target="_blank">Q宝</a></li>
        <li><a href="https://www.bilibili.com/video/BV1E7411f7WH" target="_blank">罗宝</a></li>
        <li><a href="https://www.bilibili.com/video/BV1Sv4y1V7Xb" target="_blank">马宝</a></li>
        <li><a href="https://www.bilibili.com/video/BV1KE411F7Re" target="_blank">茄宝</a></li>
      </ul>
    </Slide>
    <Slide title="智能家居的形态演变">
      <ol>
        <li><dfn>智能单品</dfn>：智能冰箱、智能空调、智能洗衣机、路由器、电视盒子、摄像头</li>
        <li><dfn>不同产品的联动</dfn>：信息互通共享</li>
        <li><dfn>智能系统集成</dfn>：不同类产品直接的融合和交互</li>
      </ol>
    </Slide>
    <Slide title="智能系统集成示意图">
      <img src="/smart-home.jpg" alt="智能家居系统集成" width="750" />
    </Slide>
    <Slide title="智能家居生活">
      <a href="https://www.bilibili.com/video/BV1aW4y1877E" target="_blank"><p>Alexa</p></a>
    </Slide>
    <Slide title="智能家居的组成">
      <ul>
        <li>智能照明</li>
        <li>智能窗帘</li>
        <li>安防控制</li>
        <li>家电控制</li>
        <li>家庭影院</li>
        <li>可视对讲</li>
      </ul>
    </Slide>
    <Slide title="智能窗帘">
      <ul>
        <li>自我反应、调节、控制</li>
        <li>自动调节光线强度、空气湿度、室温</li>
        <li><em>按时自动开合窗帘</em></li>
      </ul>
    </Slide>
    <Slide title="智能空调">
      <ul>
        <li>温度传感器&rightarrow;开关空调</li>
        <li>湿度传感器&rightarrow;水循环</li>
        <li>空气质量探测器&rightarrow;新风</li>
        <li>空调状态&rightarrow;终端</li>
      </ul>
    </Slide>
    <Slide title="灯光控制">
      <ul>
        <li>调节各种场景的灯光：聚会、睡觉、看电视</li>
        <li>有利于防盗</li>
        <li>有利于节约能源</li>
      </ul>
    </Slide>
    <Slide title="背景音乐控制">
      <ul>
        <li>打破空间限制</li>
        <li>音源丰富</li>
        <li>调节家庭环境气氛</li>
      </ul>
    </Slide>
    <Slide title="智能锁">
      <li>出门无需带钥匙</li>
      <li>保护隐私安全</li>
      <li>操作简单易懂</li>
      <li>外观简单大方</li>
    </Slide>
    <Slide title="实际产品">
      <li><a href="https://item.jd.com/100004676756.html">智能音箱</a></li>
      <li><a href="https://item.jd.com/100037767981.html">智能冰箱</a></li>
      <li><a href="https://item.jd.com/100048765169.html">智能门锁</a></li>
      <li><a href="https://item.jd.com/100014743067.html">智能窗帘</a></li>
      <li><a href="https://item.jd.com/100002439574.html">智能床头灯</a></li>
    </Slide>
  </AILayout>
}
