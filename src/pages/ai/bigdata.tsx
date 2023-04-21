import {AILayout} from "@/components/layouts";
import {Slide} from "@/components/slide";

export default function Bigdata(){
  return <AILayout>
    <Slide title={'项目四 大数据'}>
      <ul>
        <li>理解大数据</li>
        <li>大数据的应用领域</li>
        <li>大数据技术应用的壁垒</li>
      </ul>
    </Slide>
    <Slide title={'大数据的特征'}>
      <ul>
        <li>Volume：容量大</li>
        <li>Variety：种类多</li>
        <li>Velocity：速度快</li>
        <li>Veracity：真实度高</li>
      </ul>
    </Slide>
    <Slide title={'某某县房地产大数据'}>
      <ul>
        <li><del>某某县房地产大数据</del></li>
        <li><del>行业企业大数据</del></li>
        <li><a href="https://www.thepaper.cn/newsDetail_forward_5980996" target="_blank">上海战“疫”精准防疫，大数据如何大显身手？</a> </li>
        <li><a href="https://xueqiu.com/4548706173/245054081" target="_blank"><del>3月21日大数据复盘：82%个股上涨
          成交额0.89万亿</del></a> </li>
      </ul>
    </Slide>
    <Slide title={'数据科学与大数据'}>
      <ul>
        <li>数据科学是一门基于数据处理的科学</li>
        <li>互联网巨头驱动</li>
        <li>
          <style jsx>{`
            .inline {
              display: inline;
              height: 1em;
            }
          `}</style>
          <img src="/meta-logo.png" className="inline" alt="Meta Logo"/>Meta（原Facebook）
          <img src="/google-log.webp" className="inline" alt="Google Logo"/>oogle
          <img src="/alibaba-logo.jpg" className="inline" alt="Alibaba Logo"/>阿里巴巴集团</li>
        <li>理论部分：统计学、机器学习、数据可视化</li>
        <li>应用部分：大数据加工、大数据计算、大数据管理</li>
      </ul>
    </Slide>
    <Slide title={'大数据的方向'}>
      <ul>
        <li>数据平台：稳定、安全的大数据平台</li>
        <li>数据采集：从网页、数据库、传感器获取数据</li>
        <li>数据仓库：实现海量数据的存储</li>
        <li>数据处理：清洗或处理数据</li>
        <li>数据分析、数据挖掘、机器学习：从大数据中发现有用的信息</li>
      </ul>
    </Slide>
    <Slide title={'大数据处理基本流程'}>
      <ol>
        <li>数据采集</li>
        <li>数据清洗，<em>最重要的阶段</em></li>
        <li>数据存储</li>
        <li>数据处理</li>
      </ol>
    </Slide>
    <Slide title={'大数据技术应用的壁垒'}>
      <ul>
        <li>成本壁垒：手机或购买数据的成本高，处理流程复杂，存储与计算成本高</li>
        <li>信息交流壁垒：政府、企业之间存在信息壁垒</li>
      </ul>
    </Slide>
    <Slide title={'认识大数据时代'}>
      <ul>
        <li>数据成为生产要素</li>
        <li>数据成为为时代发展的“新石油”</li>
        <li>市场将重组</li>
        <li>数据服务业将影响国家竞争力</li>
      </ul>
    </Slide>
    <Slide title={'大数据与社会生活'}>
      <ul>
        <li>大数据提升政府的服务能力</li>
        <li>凭借对数据的有效分析来治理国家</li>
        <li>消除部门间的数据隔阂，为顶层设计提供建议</li>
      </ul>
    </Slide>
    <Slide title={'大数据与伦理'}>
      <ul>
        <li>谁先拥有大数据，谁就能够在竞争中处于优势地位</li>
        <li>网络变得不再虚拟</li>
        <li>数据交易的灰色地带</li>
      </ul>
    </Slide>
    <Slide title={'大数据思维的特点'}>
      <ul>
        <li>量化一切的认知思维</li>
        <li>如何量化？给数据贴标签</li>
      </ul>
      <img src="/word-net.jpg" alt="词云" />
    </Slide>
    <Slide title={'数据驱动的决策思维'}>
      <ul>
        <li>数据&rightarrow;信息&rightarrow;决策</li>
        <li>决策举例：
          <ul>
            <li>专升本、考研还是找工作？</li>
            <li>什么发展方向有前景？</li>
            <li>个人最适合哪个方向？</li>
          </ul>
        </li>
      </ul>
    </Slide>
    <Slide title={'大数据的应用'}>
      <ul>
        <li>医疗大数据：建立针对疾病以及病人特点的治疗方案</li>
        <li>生命大数据：对自身和生物体进行基因分析</li>
        <li>金融大数据：精准营销、风险管控、决策支持、产品设计</li>
        <li>零售大数据：精准营销、进货管理</li>
        <li>教育大数据：分析学生的行为与成绩，及教师的教学效果</li>
        <li>交通大数据：了解通行密度，规划交通路线</li>
      </ul>
    </Slide>
  </AILayout>
}
