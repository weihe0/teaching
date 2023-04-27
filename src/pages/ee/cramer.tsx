import {EELayout} from "@/components/layouts";
import {DisplayMath, Slide} from "@/components/slide";
import {useEffect, useRef} from "react";
import styles from "@/styles/ee.module.css";
export default function Cramer(){
  return<EELayout>
    <LinearTransform/>
    <UnitTransform/>
    <XTransform/>
    <YTransform/>
    <XYTransform/>
    <XCramer/>
    <YCramer/>
  </EELayout>
}
const scale=40
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
