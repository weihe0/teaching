<script setup lang="ts">
import Paper from '@/layouts/Paper.vue'
import Plan from '@/layouts/Plan.vue'
const week_day = 3
const class_number = 1
</script>

<template>
  <Paper>
    <Plan
      keynote="人工智能的定义"
      difficulty="什么是智力活动，什么不是智力活动"
      :week="2"
      :count="1"
      :weekday="week_day"
      topic="人工智能总论"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>人工智能的基本概念</li>
          <li>人工智能是研究、开发用于模拟、延伸和扩展<em>人的智能</em>的理论、方法、技术及应用</li>
          <li>人类的智力活动</li>
          <ol>
            <li>识别人脸</li>
            <li>识别物体</li>
            <li>理解语言</li>
            <li>运用语言</li>
            <li>翻译语言</li>
            <li>撰写文章</li>
            <li>打牌下棋</li>
            <li>设计方案</li>
            <li>艺术创作</li>
          </ol>
          <li>不属于智力活动</li>
          <ol>
            <li>抄写文稿</li>
            <li>科学计算</li>
            <li>死记硬背</li>
          </ol>
          <li>人工智能的发展简史</li>
          <ol>
            <li>1956年达特茅斯会议</li>
            <li>1980年代提出神经网络</li>
            <li>1990年代提出多种人工智能技术</li>
            <li>21世纪神经网络复兴</li>
            <li>2022年GPT横空出世</li>
          </ol>
          <li>人工智能的基本研究内容</li>
          <ol>
            <li>机器感知</li>
            <li>机器思维</li>
            <li>机器学习</li>
            <li>机器行为</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>计算非常复杂的多项式是不是智力活动？</li>
          <li>列举身边的人工智能的案例</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生的数学与计算机的基础知识极其薄弱，只能介绍最基本的人工智能知识</li>
          <li>学生对身边以及网上的人工智能应用没有兴趣</li>
          <li>学生认为人工智能是选修课，也与本专业无关，学习的热情极低</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="人工智能的难点"
      difficulty="为什么模拟人类智能很难"
      :week="3"
      :count="2"
      :weekday="3"
      topic="人工智能的预备知识"
      :class-number="1"
    >
      <template #body>
        <ol>
          <li>人工智能的载体——计算机的特点</li>
          <ol>
            <li>人类能轻松完成的事情，计算机需要极大的计算量，这些事情往往<em>属于</em>人工智能</li>
            <li>
              人类需要极大的努力才能完成的事情，计算机能轻松完成，这些事情<em>不属于</em>人工智能
            </li>
            <li>计算机能轻松完成的事：海量的机械记忆、检索数据、科学计算、编码解码</li>
            <li>计算机做得比较慢的事：判断选择、猜测联想</li>
            <li>计算机能轻松完成的事情的特点：情景单一、流程固定、多次重复</li>
            <li>人类能轻松完成的事：人脸识别、物体识别、使用母语、创新构思</li>
            <li>人类能轻松完成的事情的特点：情景多变、流程多样、创新思维</li>
          </ol>
          <li>图像数据在人工智能中的表示方法</li>
          <ol>
            <li>图像的像素</li>
            <li>像素的RGB表示法与HSL表示法</li>
            <li>图像的数据量</li>
            <li>影像与图像的关系</li>
            <li>影像的帧数、通道数与数据量</li>
            <li>影像数据的压缩原理：<em>时间局部性</em>、<em>空间局部性</em></li>
          </ol>
          <li>语音数据在人工智能中的表示方法</li>
          <ol>
            <li>声道</li>
            <li>采样率</li>
            <li>量化位数</li>
            <li>采样误差与量化误差</li>
          </ol>
          <li>人工智能的难点</li>
          <ol>
            <li>图像任务的难点：图像数据量极大</li>
            <li>语音任务的难点：语音的数据量大，并且语音受到性别、年龄、口音的影响</li>
            <li>下棋的难点：可能的棋局太多，可供选择的走法太多</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>哪些事情是人类能轻松完成但计算机很难完成的？</li>
          <li>估算未经压缩的照片的数据量</li>
          <li>估算说一个单词产生的语音的数据量</li>
          <li>在中国象棋中，预测十步以内的所有可能走法</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生的数学与计算机的基础知识极其薄弱，只能介绍最基本的人工智能知识</li>
          <li>学生对身边以及网上的人工智能应用没有兴趣</li>
          <li>学生认为人工智能是选修课，也与本专业无关，学习的热情极低</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="智能机器人的要素"
      difficulty="智能机器人与传统的工业机器人的区别"
      :week="4"
      :count="3"
      :weekday="3"
      topic="智能机器人"
      :class-number="1"
    >
      <template #body>
        <ol>
          <li>智能机器人的基本要素</li>
          <ol>
            <li>感觉要素</li>
            <li>运动要素</li>
            <li>思考要素</li>
          </ol>
          <li>常见的智能机器人的类型</li>
          <ol>
            <li>工业智能机器人</li>
            <li>农业智能机器人</li>
            <li>服务智能机器人</li>
            <li>探索智能机器人</li>
          </ol>
          <li>智能机器人的关键技术</li>
          <ol>
            <li>多传感器信息融合</li>
            <li>导航与定位</li>
            <li>路径规划</li>
            <li>智能控制</li>
            <li>人机接口技术</li>
          </ol>
          <li>智能机器人的发展方向</li>
          <ol>
            <li>可编程机器人：编程序完成重复操作</li>
            <li>感知机器人：具有感知周围环境的能力</li>
            <li>智能机器人：具有识别、推理、规划和学习等机制</li>
            <li>机器人网络化</li>
            <li>软计算方法：概率推理、神经网络、遗传算法</li>
            <li>机器学习</li>
            <li>智能人机接口</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>机器人与人工智能这两门学科的相同点与不同点在哪？</li>
          <li>智能机器人与传统的工业机器人的区别在哪？</li>
          <li>列举身边的智能机器人的案例，例如商场的导航机器人</li>
          <li>智能机器人有哪些发展方向？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生的数学与计算机的基础知识极其薄弱，只能介绍最基本的人工智能知识</li>
          <li>学生对身边以及网上的人工智能应用没有兴趣</li>
          <li>学生认为人工智能是选修课，也与本专业无关，学习的热情极低</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="无人机的优点"
      difficulty="无人机在最近的军事冲突中的应用"
      :week="5"
      :count="4"
      :weekday="3"
      topic="无人机"
      :class-number="1"
    >
      <template #body>
        <ol>
          <li>无人机的定义</li>
          <ol>
            <li>无人机是没有飞行员的飞机</li>
            <li>无人机的操作员在无人机以外</li>
            <li>无人机的四大系统：飞行系统、任务载荷系统、地面控制系统、数据链系统</li>
          </ol>
          <li>无人机的发展简史</li>
          <ol>
            <li>两次世界大战：将无人机当做靶机使用</li>
            <li>越南战争：使用无人机侦查</li>
            <li>1982年，以色列航空工业公司首次以无人机担任其他角色的军事任务</li>
            <li>1996年，美国国家航空航天局研制出X-36试验型无人战斗机</li>
            <li>2005年，大疆公司成立，后来成长为民用无人机的第一大公司</li>
          </ol>
          <li>无人机的优点</li>
          <ol>
            <li>体积小、重量轻</li>
            <li>抗过载高，机动性强</li>
            <li>可执行危险任务</li>
            <li>起飞、着陆容易</li>
            <li>使用、维护方便</li>
            <li>对环境的影响小</li>
          </ol>
          <li>无人机对人工智能的需求</li>
          <ol>
            <li>单机飞行智能</li>
            <li>多机协同智能</li>
            <li>任务自主智能</li>
          </ol>
          <li>无人机在民事领域的应用</li>
          <ol>
            <li><em>空中摄影</em></li>
            <li>安全巡逻</li>
            <li>空中喷洒药水</li>
            <li>电力巡检</li>
            <li>收集气象数据</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>有哪些耳熟能详的无人机厂商？</li>
          <li>无人机的哪些优点是飞机没有的？</li>
          <li>无人机有哪些缺点是难以克服的？</li>
          <li>无人机会取代飞机的哪些应用领域？会不会出现搭载无人机的航空母舰？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生的数学与计算机的基础知识极其薄弱，只能介绍最基本的人工智能知识</li>
          <li>学生对身边以及网上的人工智能应用没有兴趣</li>
          <li>学生认为人工智能是选修课，也与本专业无关，学习的热情极低</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="大数据思维"
      difficulty="哪些新闻稿描述了真实的大数据技术，哪些新闻稿只是将大数据当做噱头"
      :week="6"
      :count="5"
      :weekday="3"
      topic="大数据"
      :class-number="1"
    >
      <template #body>
        <ol>
          <li>大数据的定义</li>
          <ol>
            <li>Volume：容量大</li>
            <li>Variety：种类多</li>
            <li>Velocity：速度快</li>
            <li>Veracity：真实度高</li>
          </ol>
          <li>新闻稿中的真假大数据</li>
          <ol>
            <li><del>某某县房地产大数据</del></li>
            <li><del>乳制品行业企业大数据</del></li>
            <li>
              <a href="https://www.thepaper.cn/newsDetail_forward_5980996" target="'_blank'">
                上海战“疫”精准防疫，大数据如何大显身手？
              </a>
            </li>
            <li>
              <a href="https://xueqiu.com/4548706173/245054081" target="'_blank'">
                <del>3月21日大数据复盘：82%个股上涨 成交额0.89万亿</del>
              </a>
            </li>
          </ol>
          <li>大数据的工作方向</li>
          <ol>
            <li>数据平台：稳定、安全的大数据平台</li>
            <li>数据采集：从网页、数据库、传感器获取数据</li>
            <li>数据仓库：实现海量数据的存储</li>
            <li>数据处理：清洗或处理数据</li>
            <li>数据分析、数据挖掘、机器学习：从大数据中发现有用的信息</li>
          </ol>
          <li>大数据的基本处理流程</li>
          <ol>
            <li>数据采集</li>
            <li>数据清洗，<em>最重要的阶段</em></li>
            <li>数据存储</li>
            <li>数据处理</li>
          </ol>
          <li>大数据技术应用的壁垒</li>
          <ol>
            <li>成本壁垒：手机或购买数据的成本高，处理流程复杂，存储与计算成本高</li>
            <li>信息交流壁垒：政府、企业之间存在信息壁垒</li>
            <li>
              个性化壁垒：不同类型、不同用户的数据具有个性化的特征，需要采取专门的处理方法，很难总结通用的处理技术
            </li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>哪些新闻稿描述了真实的大数据技术，哪些新闻稿只是将大数据当做噱头？</li>
          <li>用大数据的4V定义检查常见的数据处理应用是否符合大数据定义</li>
          <li>淘宝的交易数据量大概有多大？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生的数学与计算机的基础知识极其薄弱，只能介绍最基本的人工智能知识</li>
          <li>学生对身边以及网上的人工智能应用没有兴趣</li>
          <li>学生认为人工智能是选修课，也与本专业无关，学习的热情极低</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="大数据思维"
      difficulty="如何运用大数据思维"
      :week="7"
      :count="6"
      :weekday="week_day"
      topic="建立大数据思维"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>认识大数据时代</li>
          <ol>
            <li>数据成为生产要素</li>
            <li>数据成为为时代发展的“新石油”</li>
            <li>市场将重组</li>
            <li>数据服务业将影响国家竞争力</li>
          </ol>
          <li>大数据与社会生活</li>
          <ol>
            <li>大数据提升政府的服务能力</li>
            <li>凭借对数据的有效分析来治理国家</li>
            <li>消除部门间的数据隔阂，为顶层设计提供建议</li>
          </ol>
          <li>案例：梁建章分析人口数据，提前十年预言人口现状，并提出预见性的人口政策建议</li>
          <ol>
            <li>梁建章是携程公司的大数据专家，并非人口专家</li>
            <li>梁建章的优势是比人口专家更会分析数据</li>
            <li>早在2012年预言中国人口的严峻形势</li>
            <li>梁建章十年前给出的建议置若罔闻，但如今都变为现实</li>
          </ol>
          <li>大数据思维</li>
          <ol>
            <li>谁先拥有大数据，谁就能够在竞争中处于优势地位</li>
            <li>网络变得不再虚拟</li>
            <li>从数据到信息，从信息到决策</li>
            <ol></ol>
          </ol>
          <li>大数据的应用</li>
          <ol>
            <li>医疗大数据：建立针对疾病以及病人特点的治疗方案</li>
            <li>生命大数据：对自身和生物体进行基因分析</li>
            <li>金融大数据：精准营销、风险管控、决策支持、产品设计</li>
            <li>零售大数据：精准营销、进货管理</li>
            <li>教育大数据：分析学生的行为与成绩，及教师的教学效果</li>
            <li>交通大数据：了解通行密度，规划交通路线</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          使用数据思维分析如下问题：
          <li>专升本、考研还是找工作？</li>
          <li>什么发展方向有前景？</li>
          <li>个人最适合哪个方向？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生的数学与计算机的基础知识极其薄弱，只能介绍最基本的人工智能知识</li>
          <li>学生对身边以及网上的人工智能应用没有兴趣</li>
          <li>学生认为人工智能是选修课，也与本专业无关，学习的热情极低</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="智能家居的关键技术"
      difficulty="智能家居与传统家居的区别"
      :week="8"
      :count="7"
      :weekday="week_day"
      topic="智能家居"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>智能家居的概念</li>
          <li>
            <dfn>智能家居</dfn>是利用
            <em>综合布线技术、网络通信技术、安全防范技术、自动控制技术、音频技术</em>
            将与家居有关的设施集成起来，构建高效的住宅设施的管理系统
          </li>
          <li></li>
          <li>智能家居的形态演变</li>
          <ol>
            <li><dfn>智能单品</dfn>：智能冰箱、智能空调、智能洗衣机、路由器、电视盒子、摄像头</li>
            <li><dfn>不同产品的联动</dfn>：信息互通共享</li>
            <li><dfn>智能系统集成</dfn>：不同类产品直接的融合和交互</li>
          </ol>
          <li>智能家居的组成</li>
          <ol>
            <li>智能照明</li>
            <li>智能窗帘</li>
            <li>安防控制</li>
            <li>家电控制</li>
            <li>家庭影院</li>
            <li>可视对讲</li>
          </ol>
          <li>典型的智能家居产品——智能音箱</li>
          <ol>
            <li>用作智能家居的控制中心</li>
            <li>显示日期、时间、天气等常用信息以及智能家居的状态</li>
            <li>语音控制</li>
            <li>主要产品有华为音箱、小米音箱、谷歌Home以及亚马逊Alexa</li>
          </ol>
          <li>典型的智能家居产品——智能锁</li>
          <ol>
            <li>出门无需带钥匙</li>
            <li>保护隐私安全</li>
            <li>操作简单易懂</li>
            <li>外观简单大方</li>
          </ol>
          <li>实际产品</li>
          <ol>
            <li>
              <a href="https://item.jd.com/100004676756.html" target="_blank"> 智能音箱 </a>
            </li>
            <li>
              <a href="https://item.jd.com/100037767981.html" target="_blank"> 智能冰箱 </a>
            </li>
            <li>
              <a href="https://item.jd.com/100048765169.html" target="_blank"> 智能门锁 </a>
            </li>
            <li>
              <a href="https://item.jd.com/100014743067.html" target="_blank"> 智能窗帘 </a>
            </li>
            <li>
              <a href="https://item.jd.com/100002439574.html" target="_blank"> 智能床头灯 </a>
            </li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>智能家居与传统家居最大的区别在哪里？</li>
          <li>你觉得哪种智能家居最有用？</li>
          <li>智能音箱应该增加哪些功能？又应该增强哪些功能？</li>
          <li>你有丢钥匙的经历么？你认为是否有必要为你的家庭更换智能锁？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生的数学与计算机的基础知识极其薄弱，只能介绍最基本的人工智能知识</li>
          <li>学生对身边以及网上的人工智能应用没有兴趣</li>
          <li>学生认为人工智能是选修课，也与本专业无关，学习的热情极低</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="智能交通的组成部分"
      difficulty="智能交通的关键技术"
      :week="9"
      :count="8"
      :weekday="week_day"
      topic="智能交通"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>智能交通的概念</li>
          <ol>
            <li>先进的科学技术：人工智能、通信技术、传感器、自动控制</li>
            <li>服务、控制车辆</li>
            <li>加强车辆、道路、使用者三者之间的联系</li>
          </ol>
          <li>智能交通的特征</li>
          <ol>
            <li>道路、桥梁、附属设施等基础设施，车辆、船舶等运输装备以及人和货物的互联</li>
            <li>虚拟与现实结合</li>
            <li>门到门一体化综合运输</li>
            <li>应需而变，为用户提供适应性服务</li>
          </ol>
          <li>智能交通的优点</li>
          <ol>
            <li>高效省时</li>
            <li>安全便捷</li>
            <li>以人为本</li>
            <li>节能环保</li>
            <li>可视可预测</li>
          </ol>
          <li>智能交通的应用</li>
          <ol>
            <li>智能交通监控系统</li>
            <li>电子收费系统</li>
            <li>智慧交通数据大屏</li>
          </ol>
          <li>智能交通的支撑技术</li>
          <ol>
            <li>目标识别技术</li>
            <li>目标计数技术</li>
            <li>目标追踪技术</li>
            <li>三维视觉技术</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>列举身边的智能交通案例</li>
          <li>为什么去深圳的科技园不能乱穿马路？</li>
          <li>智能交通对交通法规有哪些深远的影响？</li>
          <li>智能交通需要哪些基础技术？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生的数学与计算机的基础知识极其薄弱，只能介绍最基本的人工智能知识</li>
          <li>学生对身边以及网上的人工智能应用没有兴趣</li>
          <li>学生认为人工智能是选修课，也与本专业无关，学习的热情极低</li>
        </ol>
      </template>
    </Plan>
    <Plan
      keynote="自动驾驶的等级"
      difficulty="自动驾驶的关键技术"
      :week="10"
      :count="9"
      :weekday="week_day"
      topic="自动驾驶"
      :class-number="class_number"
    >
      <template #body>
        <ol>
          <li>自动驾驶的等级</li>
          <ol>
            <li>辅助驾驶</li>
            <li>部分自动驾驶</li>
            <li>条件自动驾驶</li>
            <li>高度自动驾驶</li>
            <li>完全自动驾驶</li>
          </ol>
          <li>自动驾驶的难点</li>
          <ol>
            <li>路况多种多样</li>
            <li>周边的汽车、非机动车与行人的移动路线不可预料</li>
            <li>决策时间较短</li>
            <li>事故后果严重</li>
          </ol>
          <li>自动驾驶关键技术</li>
          <ol>
            <li>环境感知</li>
            <li>高精地图</li>
            <li>路径规划</li>
            <li>控制执行</li>
          </ol>
          <li>自动驾驶的传感器</li>
          <ol>
            <li>高清摄像头</li>
            <li>激光雷达</li>
            <li>毫米波雷达</li>
            <li>三种传感器的比较</li>
          </ol>
          <li>自动驾驶的案例</li>
          <ol>
            <li>
              <a href="https://www.bilibili.com/video/BV1ko4y117HT" target="_blank">
                地平线基于征程2芯片的ADAS视觉感知demo
              </a>
            </li>
            <li>
              <a href="https://www.bilibili.com/video/BV1XN4y1P7Kr" target="_blank">
                沃尔沃的自动驾驶到底有多卷
              </a>
            </li>
            <li>
              <a href="https://www.bilibili.com/video/BV1Px4y1N7eM" target="_blank">
                上海自动驾驶
              </a>
            </li>
            <li>
              <a href="https://www.bilibili.com/video/BV1r94y1d72s" target="_blank">
                深圳疫情下自动驾驶送货
              </a>
            </li>
            <li>
              <a href="https://www.bilibili.com/video/BV19p4y1h7KP" target="_blank">
                广州高峰期自动驾驶
              </a>
            </li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>市面上常见的自动驾驶技术处于第几等级？</li>
          <li>自动驾驶尚未普及的原因有哪些？</li>
          <li>自动驾驶的哪些技术亟待加强？</li>
          <li>在感知环境这方面，激光雷达与摄像头的优点与缺点分别是什么？</li>
          <li>如何在使用自动驾驶技术的同时，避免交通事故？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生的数学与计算机的基础知识极其薄弱，只能介绍最基本的人工智能知识</li>
          <li>学生对身边以及网上的人工智能应用没有兴趣</li>
          <li>学生认为人工智能是选修课，也与本专业无关，学习的热情极低</li>
        </ol>
      </template>
    </Plan>
  </Paper>
</template>

<style scoped></style>
