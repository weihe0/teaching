import {AILayout} from "@/components/layouts";
import {Slide} from "@/components/slide";

export default function Transport(){
  return <AILayout>
    <Slide title="智能交通">
      <ul>
        <li>智能交通的定义</li>
        <li>智能交通的应用领域</li>
        <li>智能交通的发展</li>
      </ul>
    </Slide>
    <Slide title="智能交通的概念">
      <ul>
        <li>先进的科学技术：人工智能、通信技术、传感器、自动控制</li>
        <li>服务、控制车辆</li>
        <li>加强车辆、道路、使用者三者之间的联系</li>
      </ul>
    </Slide>
    <Slide title="智能交通的特征">
      <ul>
        <li>道路、桥梁、附属设施等基础设施，车辆、船舶等运输装备以及人和货物的互联</li>
        <li>虚拟与现实结合</li>
        <li>门到门一体化综合运输</li>
        <li>应需而变，为用户提供适应性服务</li>
      </ul>
    </Slide>
    <Slide title="智能交通的优点">
      <ul>
        <li>高效省时</li>
        <li>安全便捷</li>
        <li>以人为本</li>
        <li>节能环保</li>
        <li>可视可预测</li>
      </ul>
    </Slide>
    <Slide title="智能交通监控系统">
      <img src="/surveillance.png" alt="智能监控" />
    </Slide>
    <Slide title="电子收费系统">
      <img src="/etc.png" width="512"  alt="ETC" />
    </Slide>
    <Slide title="自动驾驶案例">
      <ul>
        <li><a href="https://www.bilibili.com/video/BV1Px4y1N7eM" target="_blank">上海自动驾驶</a></li>
        <li><a href="https://www.bilibili.com/video/BV1r94y1d72s" target="_blank">深圳疫情下自动驾驶送货</a> </li>
        <li><a href="https://www.bilibili.com/video/BV19p4y1h7KP" target="_blank">广州高峰期自动驾驶</a></li>
      </ul>
    </Slide>
    <Slide title="智慧交通数据大屏">
      <video src="/transport-data.mp4" controls />
    </Slide>
    <Slide title="目标识别技术">
      <figure>
        <img src="/yolo.jpg" width="540" alt="yolo目标识别" />
        <figcaption><em>实时</em>识别目标</figcaption>
      </figure>
    </Slide>
    <Slide title="Yolo技术原理">
      <img src="/yolo-network.jpg" alt="yolo v8 神经网络" width="540"/>
    </Slide>
  </AILayout>
}
