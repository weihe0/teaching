import {EELayout} from "@/components/layouts";
import {DisplayMath, InlineMath, Slide} from "@/components/slide";
import Link from "next/link";
import {func, string} from "prop-types";
import {useEffect, useRef, useState} from "react";
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
      <svg style={{fill: "none", stroke: "black", strokeWidth: 4, width: 400, height: 400}} viewBox="0 0 600 600">
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
      <svg style={{fill: "none", stroke: "black", strokeWidth: 4, width: 400, height: 400}} viewBox="0 0 600 600">
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
      <DisplayMath tex={`${DetString([['1', '0'], ['0', '1']])}=1`}/>
      <DisplayMath tex={`${DetString([['ka_{11}', 'a_{12}'], ['ka_{21}', 'a_{22}']])}=` +
        `k${DetString([['a_{11}', 'a_{12}'], ['a_{21}', 'a_{22}']])}`}/>
      <DisplayMath tex={`${DetString([['a_{1}+b_{1}', 'c_1'], ['a_{2}+b_{2}', 'c_2']])}=` +
        `${DetString([['a_{1}', 'c_{1}'], ['a_{2}', 'c_{2}']])}+${DetString([['b_{1}', 'c_{1}'], ['b_{2}', 'c_{2}']])}`}/>
    </Slide>
    <Slide title={'行列式的性质2'}>
      <DisplayMath tex={`${DetString([['a_1', 'b_1'], ['a_2', 'b_2']])}` +
        `=-${DetString([['b_1', 'a_1'], ['b_2', 'a_2']])}`}/>
      <p>如果<InlineMath tex={'a=kb'}/>，即<InlineMath tex={'a'}/>与<InlineMath tex={'b'}/>平行，那么<DisplayMath
        tex={`${DetString([['a_1', 'b_1'], ['a_2', 'b_2']])}=0`}/>
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
    <DetByColumn/>
    <Minor/>
    <Slide title={'余子式'}>
      <ol>
      <li><InlineMath tex={'a_{43}'}/>的位置移动到<InlineMath tex={'a_{11}'}/>的位置，交换行列<InlineMath tex={'(4-1)+(3-1)=5'}/>次，符号为
        <InlineMath tex={'(-1)^5'}/></li>
        <li>对于一般的<InlineMath tex={'a_{ij}'}/>，需要交换<InlineMath tex={'(i-1)+(j-1)'}/>次行列，符号为
          <InlineMath tex={'(-1)^{(i-1)+(j-1)}'}/>，化简得到<InlineMath tex={'(-1)^{i+j}'}/></li>
        <li><InlineMath tex={'a_{ij}'}/>消去第<InlineMath tex={'i'}/>行第<InlineMath tex={'j'}/>列得到<em>余子式</em>
        ，记为<InlineMath tex={'M_{ij}'}/></li>
        <li>给余子式加上符号就得到<em>代数余子式</em>，记为<InlineMath tex={'A_{ij}'}/>，两者的关系为
          <InlineMath tex={'A_{ij}=(-1)^{i+j}M_{ij}'}/></li>
      </ol>
    </Slide>
    <Slide title={'Laplace定理'}>
      <p>设<InlineMath tex={'A=|a_{ij}|'}/>是<InlineMath tex={'n'}/>阶行列式，那么
        <DisplayMath tex={String.raw`A=\sum_{j=1}^n a_{ij}A_{ij}, i=1,2,\cdots,n`}/>
        <DisplayMath tex={String.raw`A=\sum_{i=1}^n a_{ij}A_{ij},j=1,2,\cdots,n`}/>
      </p>
    </Slide>
    <Slide title={'展开示例'}>
      4阶行列式按第3行展开
      <DisplayMath tex={String.raw`A=a_{31}A_{31}+a_{32}A_{32}+a_{33}A_{33}+a_{34}A_{34}`}/>
      4阶行列式按第2列展开
      <DisplayMath tex={String.raw`A=a_{12}A_{12}+a_{22}A_{22}+a_{32}A_{32}+a_{42}A_{42}`}/>
    </Slide>
    <Slide title={'逆序数'}>
      <ul>
        <li><DisplayMath tex={String.raw`A=\sum_p (-1)^{t(p)} a_{1 p(1)} a_{1 p(2)}\cdots a_{n p(n)}`}/></li>
        <li><InlineMath tex={'p(i)'}/>称为<em>全排列</em></li>
        <li>示例：<table className={styles.perm}>
          <tbody>
          <tr><td><InlineMath tex={'i'}/></td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
          <tr><td><InlineMath tex={'p(i)'}/></td><td>2</td><td>4</td><td>3</td><td>1</td></tr>
          </tbody>
        </table></li>
        <li><InlineMath tex={'t(p)'}/>称为<em>逆序数</em>，决定了展开项的<em>符号</em>，示例中
          <InlineMath tex={'t(p)=4'}/></li>
      </ul>
    </Slide>
  </EELayout>
}

export function Vector2(props: { mat: string, j: number }) {
  return <InlineMath
    tex={String.raw`\begin{bmatrix}${props.mat}_{1${props.j}} \\ ${props.mat}_{2${props.j}}\end{bmatrix}`}/>
}

export function Vector3(props: { mat: string, j: number }) {
  return <InlineMath tex={String.raw`\begin{bmatrix}${props.mat}_{1${props.j}} 
  \\ ${props.mat}_{2${props.j}}\\ ${props.mat}_{3${props.j}}\end{bmatrix}`}/>
}

export function Det2a() {
  return <InlineMath tex={String.raw`\begin{vmatrix}  a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}`}/>
}

export function Det3a() {
  return <InlineMath tex={String.raw`\begin{vmatrix} a_{11} & a_{12} & a_{13} \\
          a_{21} & a_{22} & a_{23} \\
          a_{31} & a_{32} & a_{33} \end{vmatrix}`}/>
}

function DetString(mat: string[][]) {
  let s = String.raw`\begin{vmatrix}`
  for (let i = 0; i < mat.length - 1; i++) {
    s += `${mat[i][0]} `
    for (let j = 1; j < mat[i].length; j++) {
      s += `& ${mat[i][j]} `
    }
    s += String.raw`\\`
  }
  s += `${mat[mat.length - 1][0]} `
  for (let j = 1; j < mat[mat.length - 1].length; j++) {
    s += `& ${mat[mat.length - 1][j]} `
  }
  s += String.raw`\end{vmatrix}`
  return s
}

const scale = 30

export function LinearTransform() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = canvasRef.current!.getContext('2d')!
    c.transform(1, 0, 0, -1, 1 * scale, 10 * scale)
    const anime = TransformAnime(c,
      (c) => {
        Grid(c, 'blue')
      },
      [[2, 1], [1, 3]], 60 * 5)
    const id = setInterval(() => {
      anime.next()
    })

    return () => {
      c.setTransform(1, 0, 0, 1, 0, 0)
      c.clearRect(0, 0, 11 * scale, 11 * scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11 * scale} height={11 * scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function UnitTransform() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = canvasRef.current!.getContext('2d')!
    c.transform(1, 0, 0, -1, 1 * scale, 10 * scale)
    const anime = TransformAnime(c,
      (c) => {
        Rectangle(c, 0, 0, 1, 1)
      },
      [[2, 1], [1, 3]], 60 * 5)
    const id = setInterval(() => {
      anime.next()
    })

    return () => {
      c.setTransform(1, 0, 0, 1, 0, 0)
      c.clearRect(0, 0, 11 * scale, 11 * scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11 * scale} height={11 * scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function XTransform() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = canvasRef.current!.getContext('2d')!
    c.transform(1, 0, 0, -1, 1 * scale, 10 * scale)
    const anime = TransformAnime(c,
      (c) => {
        Rectangle(c, 0, 0, 2, 1)
      },
      [[2, 1], [1, 3]], 60 * 5)
    const id = setInterval(() => {
      anime.next()
    })

    return () => {
      c.setTransform(1, 0, 0, 1, 0, 0)
      c.clearRect(0, 0, 11 * scale, 11 * scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11 * scale} height={11 * scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}=`
        + String.raw`\begin{bmatrix}5\\5\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function YTransform() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = canvasRef.current!.getContext('2d')!
    c.transform(1, 0, 0, -1, 1 * scale, 10 * scale)
    const anime = TransformAnime(c,
      (c) => {
        Rectangle(c, 0, 0, 1, 3)
      },
      [[2, 1], [1, 3]], 60 * 5)
    const id = setInterval(() => {
      anime.next()
    })

    return () => {
      c.setTransform(1, 0, 0, 1, 0, 0)
      c.clearRect(0, 0, 11 * scale, 11 * scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11 * scale} height={11 * scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}1\\3\end{bmatrix}=`
        + String.raw`\begin{bmatrix}5\\10\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function XYTransform() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = canvasRef.current!.getContext('2d')!
    c.transform(1, 0, 0, -1, 1 * scale, 10 * scale)
    const anime = TransformAnime(c,
      (c) => {
        Rectangle(c, 0, 0, 2, 3)
        Rectangle(c, 0, 0, 1, 1)
      },
      [[2, 1], [1, 3]], 60 * 5)
    const id = setInterval(() => {
      anime.next()
    })

    return () => {
      c.setTransform(1, 0, 0, 1, 0, 0)
      c.clearRect(0, 0, 11 * scale, 11 * scale)
      clearInterval(id)
    }
  })
  return <Slide title={'线性变换'}>
    <div className={styles.anime}>
      <canvas width={11 * scale} height={11 * scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}2\\3\end{bmatrix}=`
        + String.raw`\begin{bmatrix}5\\11\end{bmatrix}`}/>
    </div>
  </Slide>
}


export function XCramer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = canvasRef.current!.getContext('2d')!
    c.transform(1, 0, 0, -1, 1 * scale, 10 * scale)
    const anime = TransformAnime(c,
      (c) => {
        Rectangle(c, 0, 0, 2, 1)
        Rectangle(c, 0, 0, 1, 1)
      },
      [[2, 1], [1, 3]], 60 * 5)
    const id = setInterval(() => {
      anime.next()
    })

    return () => {
      c.setTransform(1, 0, 0, 1, 0, 0)
      c.clearRect(0, 0, 11 * scale, 11 * scale)
      clearInterval(id)
    }
  })
  return <Slide title={'克拉默法则'}>
    <div className={styles.anime}>
      <canvas width={11 * scale} height={11 * scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}=`
        + String.raw`\begin{bmatrix}5\\5\end{bmatrix}`}/>
    </div>
  </Slide>
}

export function YCramer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = canvasRef.current!.getContext('2d')!
    c.transform(1, 0, 0, -1, 1 * scale, 10 * scale)
    const anime = TransformAnime(c,
      (c) => {
        Rectangle(c, 0, 0, 1, 3)
        Rectangle(c, 0, 0, 1, 1)
      },
      [[2, 1], [1, 3]], 60 * 5)
    const id = setInterval(() => {
      anime.next()
    })

    return () => {
      c.setTransform(1, 0, 0, 1, 0, 0)
      c.clearRect(0, 0, 11 * scale, 11 * scale)
      clearInterval(id)
    }
  })
  return <Slide title={'克拉默法则'}>
    <div className={styles.anime}>
      <canvas width={11 * scale} height={11 * scale} ref={canvasRef}></canvas>
      <DisplayMath tex={String.raw`\begin{bmatrix}2&1\\1&3\end{bmatrix}\begin{bmatrix}1\\3\end{bmatrix}=`
        + String.raw`\begin{bmatrix}5\\10\end{bmatrix}`}/>
    </div>
  </Slide>
}

function Grid(c: CanvasRenderingContext2D, strokeStyle?: string) {
  c.beginPath()
  for (let x = -1; x <= 10; x++) {
    c.moveTo(x * scale, -1 * scale)
    c.lineTo(x * scale, 10 * scale)
  }
  for (let y = -1; y <= 10; y++) {
    c.moveTo(-1 * scale, y * scale)
    c.lineTo(10 * scale, y * scale)
  }
  c.strokeStyle = strokeStyle === undefined ? 'gray' : strokeStyle
  c.stroke()
}

function* TransformAnime(c: CanvasRenderingContext2D,
                         drawingFunction: (c: CanvasRenderingContext2D) => void, a: number[][],
                         frames: number) {
  let d = [[(a[0][0] - 1) / frames, a[0][1] / frames], [a[1][0] / frames, (a[1][1] - 1) / frames]]
  while (true) {
    c.save()
    c.setTransform(1, 0, 0, 1, 0, 0)
    c.clearRect(0, 0, 11 * scale, 11 * scale)
    c.restore()
    Grid(c)
    drawingFunction(c)
    for (let i = 0; i < 120; i++) {
      yield;
    }
    for (let i = 1; i <= frames; i++) {
      c.save()
      c.setTransform(1, 0, 0, 1, 0, 0)
      c.clearRect(0, 0, 11 * scale, 11 * scale)
      c.restore()
      Grid(c)
      c.save()
      c.transform(1 + i * d[0][0], i * d[1][0], i * d[0][1], 1 + i * d[1][1], 0, 0)
      drawingFunction(c)
      c.restore()
      yield;
    }
    for (let i = 0; i < 120; i++) {
      yield;
    }
  }
}

function Rectangle(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, strokeStyle?: string, fillStyle?: string) {
  c.beginPath()
  c.strokeStyle = strokeStyle === undefined ? 'black' : strokeStyle
  c.fillStyle = fillStyle === undefined ? 'white' : fillStyle
  c.rect(x * scale, y * scale, w * scale, h * scale)
  c.stroke()
}

function DetStr(det: string[][]) {
  const n = det.length
  let arrayStr = ""
  arrayStr += det[0][0]
  for (let j = 1; j < n; j++) {
    arrayStr += `&${det[0][j]}`
  }
  for (let i = 1; i < n; i++) {
    arrayStr += String.raw`\\${det[i][0]}`
    for (let j = 1; j < n; j++) {
      arrayStr += `&${det[i][j]}`
    }
  }
  return String.raw`\begin{vmatrix}${arrayStr}\end{vmatrix}`
}

function DetByColumn() {
  const n = 4
  let arrayStr = Array<string[]>(n)
  for (let i = 0; i < n; i++) {
    arrayStr[i] = Array<string>(n)
    for (let j = 0; j < n; j++) {
      arrayStr[i][j] = `a_{${i + 1}${j + 1}}`
    }
  }
  let [detStr, setDetStr] = useState(DetStr(arrayStr))

  let id: NodeJS.Timer
  let [anime, setAnime] = useState(false)

  function Start() {
    let columnAnime = ColumnAnimation(arrayStr, 2)
    id = setInterval(() => {
      let optionalDetStr = columnAnime.next()
      if (optionalDetStr.done) {
        columnAnime = ColumnAnimation(arrayStr, 2)
      } else {
        setDetStr(optionalDetStr.value)
      }
    }, 1000)
    setAnime(true)
  }

  function Stop() {
    clearInterval(id)
    setDetStr(DetStr(arrayStr))
    setAnime(false)
  }

  return <Slide title={'行列式按列展开'}>
    <DisplayMath tex={`${detStr}`}/>
    {anime ? <button onClick={Stop}>停止</button> : <button onClick={Start}>展开</button>}
  </Slide>
}

function Minor() {
  const n = 4;
  let arrayStr = Array<string[]>(n)
  for (let i = 0; i < n; i++) {
    arrayStr[i] = Array<string>(n)
    for (let j = 0; j < n; j++) {
      if (j === 2 && i !== 3) {
        arrayStr[i][j] = ""
      } else {
        arrayStr[i][j] = `a_{${i + 1}${j + 1}}`
      }
    }
  }
  let [detStr, setDetStr] = useState(DetStr(arrayStr))
  let id: NodeJS.Timer

  function Start() {
    let anime = MinorAnimation(arrayStr, 3, 2)
    setInterval(() => {
      let optionalDetStr = anime.next()
      if (optionalDetStr.done) {
        clearInterval(id)
      } else {
        setDetStr(optionalDetStr.value)
      }
    }, 2000)
  }

  return <Slide title={'余子式'}>
    <DisplayMath tex={`${detStr}`}/>
    <button onClick={Start}>开始</button>
  </Slide>
}

function* ColumnAnimation(arrayStr: string[][], j: number) {
  const n = arrayStr.length
  let frameArray = Array<string[]>(n)
  for (let i = 0; i < n; i++) {
    frameArray[i] = Array<string>(n)
    for (let j = 0; j < n; j++) {
      frameArray[i][j] = arrayStr[i][j].slice()
    }
  }
  let col = Array<string>(n)
  for (let i = 0; i < n; i++) {
    col[i] = frameArray[i][j].slice()
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      frameArray[i][j] = i === k ? col[k] : ""
    }
    yield DetStr(frameArray)
  }
}

function* MinorAnimation(arrayStr: string[][], i1: number, j1: number) {
  let newArray = Clone(arrayStr)
  for (let j = j1; j > 0; j--) {
    newArray = SwapCol(newArray, j, j - 1)
    yield DetStr(newArray)
  }
  for (let i = i1; i > 0; i--) {
    newArray = SwapRow(newArray, i, i - 1)
    yield DetStr(newArray)
  }
  newArray=ClearFirstRow(newArray)
  yield DetStr(newArray)
}

function SwapCol(arrayStr: string[][], j0: number, j1: number) {
  const n = arrayStr.length
  let newArray = Array<string[]>(n)
  for (let i = 0; i < n; i++) {
    newArray[i] = Array<string>(n)
    for (let j = 0; j < n; j++) {
      if (j === j0) {
        newArray[i][j] = arrayStr[i][j1].slice()
      } else if (j === j1) {
        newArray[i][j] = arrayStr[i][j0].slice()
      } else {
        newArray[i][j] = arrayStr[i][j].slice()
      }
    }
  }
  console.log(newArray)
  return newArray
}

function SwapRow(arrayStr: string[][], i0: number, i1: number) {
  const n = arrayStr.length
  let newArray = Array<string[]>(n)
  for (let i = 0; i < n; i++) {
    newArray[i] = Array<string>(n)
    for (let j = 0; j < n; j++) {
      if (i === i0) {
        newArray[i][j] = arrayStr[i1][j].slice()
      } else if (i === i1) {
        newArray[i][j] = arrayStr[i0][j].slice()
      } else {
        newArray[i][j] = arrayStr[i][j].slice()
      }
    }
  }
  return newArray
}

function ClearFirstRow(arrayStr:string[][]){
  let newArray=Clone(arrayStr)
  for(let j=1;j<arrayStr.length;j++){
    newArray[0][j]=""
  }
  return newArray
}
function Clone(arrayStr: string[][]) {
  const n = arrayStr.length
  let newArray = Array<string[]>(n)
  for (let i = 0; i < n; i++) {
    newArray[i] = Array<string>(n)
    for (let j = 0; j < n; j++) {
      newArray[i][j] = arrayStr[i][j].slice()
    }
  }
  return newArray
}
