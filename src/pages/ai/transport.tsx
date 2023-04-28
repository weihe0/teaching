import {AILayout} from "@/components/layouts";
import {Slide} from "@/components/slide";
import Link from "next/link";
import styles from '@/styles/ai.module.css'
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
    <Slide title={'自动驾驶'}>
      <ol>
        <li>自动驾驶的案例</li>
        <li>自动驾驶的等级</li>
        <li>自动驾驶的感知</li>
        <li>自动驾驶的决策</li>
      </ol>
    </Slide>
    <Slide title="自动驾驶案例">
      <ul>
        <li><Link href={'https://www.bilibili.com/video/BV1ko4y117HT'} target={'_blank'}>
          地平线基于征程2芯片的ADAS视觉感知demo</Link></li>
        <li><Link href={'https://www.bilibili.com/video/BV1XN4y1P7Kr'} target={'_blank'}>沃尔沃的自动驾驶到底有多卷</Link></li>
        <li><Link href="https://www.bilibili.com/video/BV1Px4y1N7eM" target="_blank">上海自动驾驶</Link></li>
        <li><Link href="https://www.bilibili.com/video/BV1r94y1d72s" target="_blank">深圳疫情下自动驾驶送货</Link> </li>
        <li><Link href="https://www.bilibili.com/video/BV19p4y1h7KP" target="_blank">广州高峰期自动驾驶</Link></li>
      </ul>
    </Slide>
    <Slide title={'自动驾驶的难点'}>
      <ul>
        <li>路况多种多样</li>
        <li>周边的汽车、非机动车与行人的移动路线不可预料</li>
        <li>决策时间较短</li>
        <li>事故后果严重</li>
      </ul>
    </Slide>
    <Slide title={'路况多种多样'}>
      <div className={styles.grid2x2}>
        <img src={'/road-high.jpg'} width={400} alt={'高等级公路'}/>
        <img src={'/road-old.jpg'} width={400} alt={'老马路'}/>
        <img src={'/road-narrow.jpg'} width={400} alt={'窄路'}/>
        <img src={'/road-dirt.jpg'} width={400} alt={'土路'}/>
      </div>
    </Slide>
    <Slide title={'决策时间较短'}>
      <ul>
        <li>周边的汽车、非机动车与行人的轨迹会<em>突然变化</em></li>
        <li>需要在<em>很短的时间</em>内做出决策，避免事故</li>
      </ul>
    </Slide>
    <Slide title={'自动驾驶的等级'}>
      <table className={styles.tb}>
        <thead>
        <tr><td>等级</td><td>名字</td><td>驾驶操作</td><td>环境感知</td><td>车辆接管</td><td>应用场景</td></tr>
        </thead>
        <tbody>
        <tr><td>1</td><td>辅助驾驶</td><td>司机与车辆</td><td>司机</td><td>司机</td><td>限定</td></tr>
        <tr><td>2</td><td>部分自动驾驶</td><td>车辆</td><td>司机</td><td>司机</td><td>限定</td></tr>
        <tr><td>3</td><td>条件自动驾驶</td><td>车辆</td><td>车辆</td><td>司机</td><td>限定</td></tr>
        <tr><td>4</td><td>高度自动驾驶</td><td>车辆</td><td>车辆</td><td>车辆</td><td>限定</td></tr>
        <tr><td>5</td><td>完全自动驾驶</td><td>车辆</td><td>车辆</td><td>车辆</td><td>不限</td></tr>
        </tbody>
      </table>
    </Slide>
    <Slide title={'自动驾驶关键技术'}>
      <ul>
        <li>环境感知</li>
        <li>高精地图</li>
        <li>路径规划</li>
        <li>控制执行</li>
      </ul>
    </Slide>
    <Slide title={'环境感知'}>
      <img src={'/sense.png'} width={800} alt={'环境感知'}/>
    </Slide>
    <Slide title={'传感器'}>
      <table className={styles.tb}>
        <thead>
        <tr><td>传感器</td><td>优点</td><td>缺点</td><td>用途</td></tr>
        </thead>
        <tbody>
        <tr><td>摄像头</td><td>分辨率高</td><td>容易受光照影响</td><td>检测车道线、红绿灯、指示牌</td></tr>
        <tr><td>毫米波雷达</td><td>探测距离远，不受天气影响</td><td>分辨率较低</td><td>测距</td></tr>
        <tr><td>激光雷达</td><td>测距精确</td><td>成本高，易受天气影响</td><td>检测车辆与行人</td></tr>
        </tbody>
      </table>
    </Slide>
    <Slide title={'图像信息获取'}>
      <img src={'/image-recognition.jpg'} alt={'识别图像的车辆、车道与标志牌'}/>
      <p>识别目标：车辆、车型、车道线、指示牌、障碍物</p>
    </Slide>
    <Slide title={'激光雷达'}>
      <img src={'/lidar-image.jpg'} width={500} alt={'激光雷达成像'}/>
    </Slide>
    <Slide title={'激光雷达 vs 摄像头'}>
      <ul>
        <li>纯摄像头：Tesla</li>
        <li>纯激光雷达：Robotaxi</li>
        <li>摄像头 + 激光雷达：<Link href={'https://new.qq.com/rain/a/20210420A0F01300'}>地平线</Link></li>
      </ul>
    </Slide>
    <Slide title={'轨迹预测'}>
      <ol>
        <li>记录周边的汽车与非机动车的行驶轨迹</li>
        <li>根据行驶轨迹推测运动模式</li>
        <li>根据运动模式推测未来的运动轨迹</li>
      </ol>
    </Slide>
    <Slide title={'轨迹预测的方法'}>
      <ul>
        <li>神经网络：让自动驾驶系统“学习”一段轨迹，预测将来的轨迹</li>
        <li>统计推理：根据过往的<em>所有</em>轨迹，计算将来<em>最有可能</em>的轨迹</li>
        <li>模式预测：识别运动模式（如直行、转向、超车、避让等），预测该模式下车辆的轨迹</li>
      </ul>
    </Slide>
    <Slide title={'路径规划'}>
      <ul>
        <li>横向规划：如何打方向盘</li>
        <ul>
          <li>规划合理的车辆轨迹，再推导如何转向</li>
          <li>要求：在车道线内、接近车道中心、转弯不得过快</li>
          <li>挑战：障碍物行为变化、决策容易发生改变</li>
        </ul>
        <li>纵向规划：如何踩油门或刹车</li>
        <ul>
          <li>根据周边的车辆与行人，决定踩油门还是踩刹车</li>
          <li>要求：不得碰撞、不得闯红灯、不得过于激进、不得过于保守</li>
          <li>挑战：预测路况困难、可选的决策选项过多</li>
        </ul>
        <li>参考资料：<Link href={'https://zhuanlan.zhihu.com/p/343898281'}>自动驾驶轨迹规划</Link></li>
      </ul>
    </Slide>
  </AILayout>
}
