import React, {useEffect, useRef,useState} from "react";
import renderMathInElement from "katex/contrib/auto-render";

export function Slide(props) {
  const body = useRef(null)
  useEffect(() => {
    renderMathInElement(body.current, {
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
