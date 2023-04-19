import React, {ReactFragment, ReactNode, useEffect, useRef, useState} from "react";
import renderMathInElement from "katex/contrib/auto-render";
import 'katex/dist/katex.css'

export function Slide(props:{title:string, children:ReactNode}) {
  const body = useRef<HTMLDivElement>(null)
  useEffect(() => {
    renderMathInElement(body.current!, {
      output: 'html',
    })
  })
  return <section className="slide">
    <div className="title">
      <h1>{props.title}</h1>
    </div>
    <div className="body" ref={body}>
      {props.children}
    </div>
  </section>
}
