import {EELayout} from "@/components/layouts";
import {DisplayMath, InlineMath, Slide} from "@/components/slide";
import Link from "next/link";
import {func, string} from "prop-types";

export default function Det() {
  return <EELayout>
    <Slide title="行列式">
      <ol>
        <li>二阶与三阶行列式</li>
        <li>行列式的性质</li>
        <li>行列式按列展开</li>
        <li>克拉默法则</li>
        <li><InlineMath tex={'n'}/>阶行列式</li>
        <li>对换与逆序数</li>
      </ol>
    </Slide>
    <Slide title="行列式的引入">
      <svg style={{fill:"none",stroke:"black",strokeWidth:4,width:400,height:400}} viewBox="0 0 600 600">
        <polygon points="150,450 300,150 450,300"/>
        <foreignObject x={150} y={450} width={150} height={50}>
          <InlineMath tex={'(x_0,y_0)'}/>
        </foreignObject>
        <foreignObject x={320} y={120} width={150} height={50}>
          <InlineMath tex={'(x_1,y_1)'}/>
        </foreignObject>
        <foreignObject x={450} y={300} width={150} height={50}>
          <InlineMath tex={'(x_2,y_2)'}/>
        </foreignObject>
      </svg>
      <p>如何用坐标计算三角形的面积？🤔</p>
    </Slide>
    <Slide title="转化为向量">
      <svg style={{fill:"none",stroke:"black",strokeWidth:4,width:400,height:400}} viewBox="0 0 600 600">
        <polygon points="150,450 300,150 600,0 450,300 "/>
        <foreignObject x={50} y={300} width={300} height={50}>
          <InlineMath tex={'(x_1-x_0,y_1-y_0)'}/>
        </foreignObject>
        <foreignObject x={300} y={400} width={300} height={50}>
          <InlineMath tex={'(x_2-x_0,y_2-y_0)'}/>
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
        <li>向量<Vector2 mat={'a'} j={1}/>与<Vector2 mat={'a'} j={2}/>围成的平行四边形的<em>带符号面积</em>为<Det2a/>
        </li>
        <li>向量<Vector3 mat={'a'} j={1}/>，<Vector3 mat={'a'} j={2}/>，<Vector3 mat={'a'} j={3}/>
          围成的平行六面体的<em>带符号体积</em>为<Det3a/>
        </li>
      </ol>
    </Slide>
    <Slide title="行列式的性质">
      <p>如何计算行列式？🤔从行列式的<em>性质</em>推导计算公式🤓</p>
      <DisplayMath tex={`${DetString([['1','0'],['0','1']])}=1`}/>
      <DisplayMath tex={`${DetString([['ka_{11}','a_{12}'],['ka_{21}','a_{22}']])}=`+
      `k${DetString([['a_{11}','a_{12}'],['a_{21}','a_{22}']])}`}/>
      <DisplayMath tex={`${DetString([['a_{1}+b_{1}','c_1'],['a_{2}+b_{2}','c_2']])}=`+
      `${DetString([['a_{1}','c_{1}'],['a_{2}','c_{2}']])}+${DetString([['b_{1}','c_{1}'],['b_{2}','c_{2}']])}`}/>
    </Slide>
    <Slide title={'行列式的性质2'}>
      <DisplayMath tex={`${DetString([['a_1','b_1'],['a_2','b_2']])}`+
        `=-${DetString([['b_1','a_1'],['b_2','a_2']])}`}/>
      <p>如果<InlineMath tex={'a=kb'}/>，即<InlineMath tex={'a'}/>与<InlineMath tex={'b'}/>平行，那么<DisplayMath
        tex={`${DetString([['a_1','b_1'],['a_2','b_2']])}=0`}/>
      </p>
    </Slide>
    <Slide title={'利用性质推导'}>
      <DisplayMath tex={String.raw`\begin{vmatrix}  a_{11} & a_{12}
      \\ a_{21} & a_{22}
      \end{vmatrix}=\begin{vmatrix}
      \begin{bmatrix} a_{11} \\ 0 \end{bmatrix}
      + \begin{bmatrix} 0 \\ a_{21} \end{bmatrix} &
      \begin{bmatrix} a_{12} \\ 0 \end{bmatrix}
      + \begin{bmatrix} 0 \\ a_{22} \end{bmatrix}
      \end{vmatrix}\\
      =\begin{vmatrix}  a_{11} & a_{12}\\ 0 & 0
      \end{vmatrix}+
      \begin{vmatrix}  a_{11} & 0
      \\ 0 & a_{22}
      \end{vmatrix}+
      \begin{vmatrix} 0 & a_{12}
      \\ a_{21} & 0
      \end{vmatrix}+
      \begin{vmatrix}  0 & 0
      \\ a_{21} & a_{22}
      \end{vmatrix}\\
      =0+a_{11}a_{22}+(-a_{21}a_{12})+0\\
      =a_{11}a_{22}-a_{21}a_{12}`}/>
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
export function Vector2(props:{mat:string,j:number}){
  return <InlineMath
    tex={String.raw`\begin{bmatrix}${props.mat}_{1${props.j}} \\ ${props.mat}_{2${props.j}}\end{bmatrix}`}/>
}
export function Vector3(props:{mat:string,j:number}){
  return <InlineMath tex={String.raw`\begin{bmatrix}${props.mat}_{1${props.j}} 
  \\ ${props.mat}_{2${props.j}}\\ ${props.mat}_{3${props.j}}\end{bmatrix}`}/>
}
export function Det2a(){
  return <InlineMath tex={String.raw`\begin{vmatrix}  a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}`}/>
}
export function Det3a(){
  return <InlineMath tex={String.raw`\begin{vmatrix} a_{11} & a_{12} & a_{13} \\
          a_{21} & a_{22} & a_{23} \\
          a_{31} & a_{32} & a_{33} \end{vmatrix}`}/>
}
function DetString(mat:string[][]) {
  let s=String.raw`\begin{vmatrix}`
  for(let i=0;i<mat.length-1;i++){
    s+=`${mat[i][0]} `
    for(let j=1;j<mat[i].length;j++){
      s+=`& ${mat[i][j]} `
    }
    s+=String.raw`\\`
  }
  s+=`${mat[mat.length-1][0]} `
  for(let j=1;j<mat[mat.length-1].length;j++){
    s+=`& ${mat[mat.length-1][j]} `
  }
  s+=String.raw`\end{vmatrix}`
  return s
}
