import {EELayout} from "@/components/layouts";
import {DisplayMath, InlineMath, Slide} from "@/components/slide";
import Link from "next/link";
import {func, string} from "prop-types";
import {useEffect, useRef} from "react";
import styles from '@/styles/ee.module.css'

export default function Det() {
  return <EELayout>
    <Slide title="行列式">
      <ol>
        <li>二阶与三阶行列式</li>
        <li>行列式的性质</li>
        <li>克拉默法则</li>
        <li><InlineMath tex={'n'}/>阶行列式</li>
        <li>对换与逆序数</li>
        <li>行列式按列展开</li>
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
    <Slide title={'克拉默法则'}>
      <ul>
        <li>研究线性方程组</li>
        <li>给出了线性方程组的求解公式</li>
        <li>可以用<em>线性变换</em>来理解克拉默法则</li>
      </ul>
    </Slide>
    <LinearTransform/>
    <UnitTransform/>
    <XTransform/>
    <YTransform/>
    <XYTransform/>
    <XCramer/>
    <YCramer/>
    <Slide title={'限制条件'}>
      <ul>
        <li>克拉默法则不能应用在如下情形</li>
        <ul>
          <li>线性方程组的个数<em>不等于</em>未知数的个数</li>
          <li>参数矩阵的行列式为零</li>
        </ul>
      </ul>
    </Slide>
  </EELayout>
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

const scale=30

export function LinearTransform(){
  const canvasRef=useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const c=canvasRef.current!.getContext('2d')!
    c.transform(1,0,0,-1,1*scale,10*scale)
    const anime=TransformAnime(c,
      (c)=>{Grid(c,'blue')},
      [[2,1],[1,3]],60*5)
    const id=setInterval(()=>{anime.next()})

    return ()=>{
      c.setTransform(1,0,0,1,0,0)
      c.clearRect(0,0,11*scale,11*scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11*scale} height={11*scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function UnitTransform(){
  const canvasRef=useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const c=canvasRef.current!.getContext('2d')!
    c.transform(1,0,0,-1,1*scale,10*scale)
    const anime=TransformAnime(c,
      (c)=>{Rectangle(c,0,0,1,1)},
      [[2,1],[1,3]],60*5)
    const id=setInterval(()=>{anime.next()})

    return ()=>{
      c.setTransform(1,0,0,1,0,0)
      c.clearRect(0,0,11*scale,11*scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11*scale} height={11*scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function XTransform(){
  const canvasRef=useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const c=canvasRef.current!.getContext('2d')!
    c.transform(1,0,0,-1,1*scale,10*scale)
    const anime=TransformAnime(c,
      (c)=>{Rectangle(c,0,0,2,1)},
      [[2,1],[1,3]],60*5)
    const id=setInterval(()=>{anime.next()})

    return ()=>{
      c.setTransform(1,0,0,1,0,0)
      c.clearRect(0,0,11*scale,11*scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11*scale} height={11*scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}=`
        +String.raw`\begin{bmatrix}5\\5\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function YTransform(){
  const canvasRef=useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const c=canvasRef.current!.getContext('2d')!
    c.transform(1,0,0,-1,1*scale,10*scale)
    const anime=TransformAnime(c,
      (c)=>{Rectangle(c,0,0,1,3)},
      [[2,1],[1,3]],60*5)
    const id=setInterval(()=>{anime.next()})

    return ()=>{
      c.setTransform(1,0,0,1,0,0)
      c.clearRect(0,0,11*scale,11*scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11*scale} height={11*scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}1\\3\end{bmatrix}=`
        +String.raw`\begin{bmatrix}5\\10\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function XYTransform(){
  const canvasRef=useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const c=canvasRef.current!.getContext('2d')!
    c.transform(1,0,0,-1,1*scale,10*scale)
    const anime=TransformAnime(c,
      (c)=>{
        Rectangle(c,0,0,2,3)
        Rectangle(c,0,0,1,1)
      },
      [[2,1],[1,3]],60*5)
    const id=setInterval(()=>{anime.next()})

    return ()=>{
      c.setTransform(1,0,0,1,0,0)
      c.clearRect(0,0,11*scale,11*scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11*scale} height={11*scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}2\\3\end{bmatrix}=`
        +String.raw`\begin{bmatrix}5\\11\end{bmatrix}`}/>
    </div>
  </Slide>
}


export function XCramer(){
  const canvasRef=useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const c=canvasRef.current!.getContext('2d')!
    c.transform(1,0,0,-1,1*scale,10*scale)
    const anime=TransformAnime(c,
      (c)=>{
        Rectangle(c,0,0,2,1)
        Rectangle(c,0,0,1,1)
      },
      [[2,1],[1,3]],60*5)
    const id=setInterval(()=>{anime.next()})

    return ()=>{
      c.setTransform(1,0,0,1,0,0)
      c.clearRect(0,0,11*scale,11*scale)
      clearInterval(id)
    }
  })
  return <Slide title={'克拉默法则'}>
    <div className={styles.anime}>
      <canvas width={11*scale} height={11*scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}=`
        +String.raw`\begin{bmatrix}5\\5\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function YCramer(){
  const canvasRef=useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const c=canvasRef.current!.getContext('2d')!
    c.transform(1,0,0,-1,1*scale,10*scale)
    const anime=TransformAnime(c,
      (c)=>{
        Rectangle(c,0,0,1,3)
        Rectangle(c,0,0,1,1)
      },
      [[2,1],[1,3]],60*5)
    const id=setInterval(()=>{anime.next()})

    return ()=>{
      c.setTransform(1,0,0,1,0,0)
      c.clearRect(0,0,11*scale,11*scale)
      clearInterval(id)
    }
  })
  return <Slide title={'克拉默法则'}>
    <div className={styles.anime}>
      <canvas width={11*scale} height={11*scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}1\\3\end{bmatrix}=`
        +String.raw`\begin{bmatrix}5\\10\end{bmatrix}`}/>
    </div>
  </Slide>
}

function Grid(c:CanvasRenderingContext2D,strokeStyle?:string){
  c.beginPath()
  for(let x=-1;x<=10;x++){
    c.moveTo(x*scale,-1*scale)
    c.lineTo(x*scale,10*scale)
  }
  for(let y=-1;y<=10;y++){
    c.moveTo(-1*scale,y*scale)
    c.lineTo(10*scale,y*scale)
  }
  c.strokeStyle=strokeStyle===undefined?'gray':strokeStyle
  c.stroke()
}

function *TransformAnime(c:CanvasRenderingContext2D,
                         drawingFunction:(c:CanvasRenderingContext2D)=>void,a:number[][],
                         frames:number){
  let d=[[(a[0][0]-1)/frames,a[0][1]/frames],[a[1][0]/frames,(a[1][1]-1)/frames]]
  while(true){
    c.save()
    c.setTransform(1,0,0,1,0,0)
    c.clearRect(0,0,11*scale,11*scale)
    c.restore()
    Grid(c)
    drawingFunction(c)
    for(let i=0;i<120;i++){
      yield ;
    }
    for(let i=1;i<=frames;i++){
      c.save()
      c.setTransform(1,0,0,1,0,0)
      c.clearRect(0,0,11*scale,11*scale)
      c.restore()
      Grid(c)
      c.save()
      c.transform(1+i*d[0][0],i*d[1][0],i*d[0][1],1+i*d[1][1],0,0)
      drawingFunction(c)
      c.restore()
      yield ;
    }
    for(let i=0;i<120;i++){
      yield ;
    }
  }
}

function Rectangle(c:CanvasRenderingContext2D,x:number,y:number,w:number,h:number,strokeStyle?:string,fillStyle?:string){
  c.beginPath()
  c.strokeStyle=strokeStyle===undefined? 'black':strokeStyle
  c.fillStyle=fillStyle===undefined?'white':fillStyle
  c.rect(x*scale,y*scale,w*scale,h*scale)
  c.stroke()
}
