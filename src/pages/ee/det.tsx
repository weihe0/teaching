import {EELayout} from "@/components/layouts";
import {Slide} from "@/components/slide";
import exp from "constants";
import Link from "next/link";

export default function Det() {
  return <EELayout>
    <Slide title="行列式">
      <ol>
        <li>二阶与三阶行列式</li>
        <li>行列式的性质</li>
        <li>行列式按列展开</li>
        <li>克拉默法则</li>
        <li>\(n\)阶行列式</li>
        <li>对换与逆序数</li>
      </ol>
    </Slide>
    <Slide title="行列式的引入">
      <svg style={{fill:"none",stroke:"black",strokeWidth:4,width:400,height:400}} viewBox="0 0 600 600">
        <polygon points="150,450 300,150 450,300"/>
        <foreignObject x={150} y={450} width={150} height={50}>
          \((x_0,y_0)\)
        </foreignObject>
        <foreignObject x={320} y={120} width={150} height={50}>
          \((x_1,y_1)\)
        </foreignObject>
        <foreignObject x={450} y={300} width={150} height={50}>
          \((x_2,y_2)\)
        </foreignObject>
      </svg>
      <p>如何用坐标计算三角形的面积？🤔</p>
    </Slide>
    <Slide title="转化为向量">
      <svg style={{fill:"none",stroke:"black",strokeWidth:4,width:400,height:400}} viewBox="0 0 600 600">
        <polygon points="150,450 300,150 600,0 450,300 "/>
        <foreignObject x={50} y={300} width={300} height={50}>
          \((x_1-x_0,y_1-y_0)\)
        </foreignObject>
        <foreignObject x={300} y={400} width={300} height={50}>
          \((x_2-x_0,y_2-y_0)\)
        </foreignObject>
      </svg>
      <p>三角形面积等于两个向量围成的<em>梯形面积</em>的一半</p>
    </Slide>
    <Slide title="线性变换与行列式介绍">
      <ul>
        <li><Link href="https://www.bilibili.com/video/BV12s411k7S5" target="_blank">线性变换</Link></li>
        <li><Link href="https://www.bilibili.com/video/BV1Qs41167bP" target="_blank">行列式</Link></li>
      </ul>
    </Slide>
    <Slide title="行列式的几何意义">
      <ol>
        <li>向量\(\begin&#123;bmatrix&#125; a_&#123;11&#125; \\ a_&#123;21&#125; \end&#123;bmatrix&#125;\)与
          \(\begin&#123;bmatrix&#125; a_&#123;12&#125; \\ a_&#123;22&#125; \end&#123;bmatrix&#125;\)围成的平行四边形的<em>带符号面积</em>为
          \(\begin&#123;vmatrix&#125;  a_&#123;11&#125; & a_&#123;12&#125; \\ a_&#123;21&#125; & a_&#123;22&#125; \end&#123;vmatrix&#125;\)
        </li>
        <li>向量\(\begin&#123;bmatrix&#125; a_&#123;11&#125; \\ a_&#123;21&#125;\\a_&#123;31&#125; \end&#123;bmatrix&#125;\),
          \(\begin&#123;bmatrix&#125; a_&#123;12&#125; \\ a_&#123;22&#125;\\a_&#123;32&#125; \end&#123;bmatrix&#125;\)与
          \(\begin&#123;bmatrix&#125; a_&#123;13&#125; \\ a_&#123;23&#125;\\a_&#123;33&#125; \end&#123;bmatrix&#125;\)
          围成的平行六面体的<em>带符号体积</em>为
          \(\begin&#123;vmatrix&#125; a_&#123;11&#125; & a_&#123;12&#125; & a_&#123;13&#125; \\
          a_&#123;21&#125; & a_&#123;22&#125; & a_&#123;23&#125; \\
          a_&#123;31&#125; & a_&#123;32&#125; & a_&#123;33&#125; \end&#123;vmatrix&#125;\)
        </li>
      </ol>
    </Slide>
    <Slide title="行列式的性质">
      <p>如何计算行列式？🤔从行列式的<em>性质</em>推导计算公式🤓</p>
      \[\begin&#123;vmatrix&#125; 1 & 0 \\ 0 & 1 \end&#123;vmatrix&#125;=1\]
      \[\begin&#123;vmatrix&#125;  ka_&#123;11&#125; & a_&#123;12&#125; \\ ka_&#123;21&#125; & a_&#123;22&#125;
      \end&#123;vmatrix&#125;=k\begin&#123;vmatrix&#125;  a_&#123;11&#125; & a_&#123;12&#125;
      \\ a_&#123;21&#125; & a_&#123;22&#125;
      \end&#123;vmatrix&#125;\]
      \[\begin&#123;vmatrix&#125; a_&#123;11&#125;+b_&#123;11&#125; & a_&#123;12&#125; \\
      a_&#123;21&#125;+b_&#123;21&#125; & a_&#123;22&#125; \end&#123;vmatrix&#125;=
      \begin&#123;vmatrix&#125; a_&#123;11&#125; & a_&#123;12&#125; \\
      a_&#123;21&#125; & a_&#123;22&#125; \end&#123;vmatrix&#125;+
      \begin&#123;vmatrix&#125; b_&#123;11&#125; & a_&#123;12&#125; \\
      b_&#123;21&#125; & a_&#123;22&#125; \end&#123;vmatrix&#125;
      \]
    </Slide>
    <Slide title="行列式的性质2">
      \[\begin&#123;vmatrix&#125;  a_&#123;11&#125; & a_&#123;12&#125;
      \\ a_&#123;21&#125; & a_&#123;22&#125;
      \end&#123;vmatrix&#125;=-\begin&#123;vmatrix&#125;  a_&#123;12&#125; & a_&#123;11&#125;
      \\ a_&#123;22&#125; & a_&#123;21&#125;
      \end&#123;vmatrix&#125;\]
      如果\(\begin&#123;bmatrix&#125; a_&#123;11&#125; \\ a_&#123;21&#125; \end&#123;bmatrix&#125;=
      k\begin&#123;bmatrix&#125; a_&#123;12&#125; \\ a_&#123;22&#125; \end&#123;bmatrix&#125;\)，即两向量平行，那么
      \[\begin&#123;vmatrix&#125;  a_&#123;11&#125; & a_&#123;12&#125;
      \\ a_&#123;21&#125; & a_&#123;22&#125;
      \end&#123;vmatrix&#125;=0\]
    </Slide>
    <Slide title="利用性质推导">
      \[\begin&#123;vmatrix&#125;  a_&#123;11&#125; & a_&#123;12&#125;
      \\ a_&#123;21&#125; & a_&#123;22&#125;
      \end&#123;vmatrix&#125;=\begin&#123;vmatrix&#125;
      \begin&#123;bmatrix&#125; a_&#123;11&#125; \\ 0 \end&#123;bmatrix&#125;
      + \begin&#123;bmatrix&#125; 0 \\ a_&#123;21&#125; \end&#123;bmatrix&#125; &
      \begin&#123;bmatrix&#125; a_&#123;12&#125; \\ 0 \end&#123;bmatrix&#125;
      + \begin&#123;bmatrix&#125; 0 \\ a_&#123;22&#125; \end&#123;bmatrix&#125;
      \end&#123;vmatrix&#125;\\
      =\begin&#123;vmatrix&#125;  a_&#123;11&#125; & a_&#123;12&#125;\\ 0 & 0
      \end&#123;vmatrix&#125;+
      \begin&#123;vmatrix&#125;  a_&#123;11&#125; & 0
      \\ 0 & a_&#123;22&#125;
      \end&#123;vmatrix&#125;+
      \begin&#123;vmatrix&#125; 0 & a_&#123;12&#125;
      \\ a_&#123;21&#125; & 0
      \end&#123;vmatrix&#125;+
      \begin&#123;vmatrix&#125;  0 & 0
      \\ a_&#123;21&#125; & a_&#123;22&#125;
      \end&#123;vmatrix&#125;\\
      =0+a_&#123;11&#125;a_&#123;22&#125;+(-a_&#123;21&#125;a_&#123;12&#125;)+0\\
      =a_&#123;11&#125;a_&#123;22&#125;-a_&#123;21&#125;a_&#123;12&#125;
      \]
    </Slide>
  </EELayout>
}

export function Space() {
  const scale=40
  const radius=5
  const half=scale*radius
  const center=[scale*radius,scale*radius]
  return <svg xmlns="http://www.w3.org/2000/svg" width={2*half} height={2*half} 
              viewBox={`${-half} ${-half} ${half} ${half}`}
              transform={`matrix(1 0 0 -1 0 0)`}
  >
    <line x1="0" y1="0" x2={`${scale}`} y2="0"/>
  </svg>
}
