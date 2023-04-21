import React, {ReactFragment, ReactNode, useEffect, useRef, useState} from "react";
import 'katex/dist/katex.css'
import katex from "katex";

export function Slide(props:{title:string, children:ReactNode}) {
  const body = useRef<HTMLDivElement>(null)

  return <section className="slide">
    <div className="title">
      <h1>{props.title}</h1>
    </div>
    <div className="body" ref={body}>
      {props.children}
    </div>
  </section>
}
export function DisplayMath(props:{tex:string}){
  return <div dangerouslySetInnerHTML={{
    __html:katex.renderToString(props.tex,{output:'html',displayMode:true})}}></div>
}
export function InlineMath(props:{tex:string}){
  return <span dangerouslySetInnerHTML={{
    __html:katex.renderToString(props.tex,{output:'html',displayMode:false})}}></span>
}
