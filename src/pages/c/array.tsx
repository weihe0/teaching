import {CLayout} from "@/components/layouts";
import {Slide} from "@/components/slide";
import {Fragment, useEffect, useState} from "react";
import {clearInterval} from "timers";

export default function CArray(){
  return <CLayout>
    <Slide title={'第10章 数组'}>
      <ol>
        <li>数组的定义</li>
        <li>数组的应用</li>
        <li>二维数组</li>
        <li>多维数组</li>
      </ol>
    </Slide>
    <ArrayMotivation/>
  </CLayout>
}

export function ArrayMotivation(){
  let [n,setN]=useState(1)
  function DefineVariables(){
    let variables=[] as JSX.Element[]
    for(let i=0;i<n;i++){
      variables.push(<><span>int a{i};</span><br/></>)
    }
    return variables
  }
  useEffect(()=>{
    const id=setInterval(()=>{
      if(n<10){
        setN(n+1)
      }else {
        setN(1)
      }
    },1000)
    return ()=>{
      window.clearInterval(id)
    }
  })
  return <Slide title={'数组的引入'}>
    <div className="full-width">
      <div className="code-column">
        {DefineVariables()}
      </div>
      <div className="code-column">
        <span>int a[{n}];</span>
      </div>
    </div>
  </Slide>
}
