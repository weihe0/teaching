import React, {ReactFragment, ReactNode, useEffect, useRef, useState} from "react";
import 'katex/dist/katex.css'
import katex from "katex";
import parse, { domToReact } from 'html-react-parser';
export function Slide(props:{title:string, children:ReactNode}) {
  return <section className="slide">
    <div className="title">
      <span>{props.title}</span>
    </div>
    <div className="body">
      {props.children}
    </div>
  </section>
}
export function DisplayMath(props:{tex:string}){
  const htmlString=katex.renderToString(props.tex,{output:'html',displayMode:true})
  return <>{parse(htmlString)}</>
}
export function InlineMath(props:{tex:string}){
  const htmlString=katex.renderToString(props.tex,{output:'html',displayMode:false})
  return <>{parse(htmlString)}</>
}
