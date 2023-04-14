import React, {useState} from "react";

export default function SlideContainer(props) {
  let [index, setIndex] = useState(0)

  function previous() {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  function next() {
    if (index + 1 < React.Children.count(props.children)) {
      setIndex(index + 1)
    }
  }

  return <div className="slide-container">
    <button className="unfold">
      <svg width="32px" height="64px" viewBox="0 0 32 64">
        <polyline points="0 0, 32 32, 0 64"/>
      </svg>
    </button>
    {React.Children.map(props.children, ((child, i) => {
      if (i === index) {
        return child
      } else {
        return <></>
      }
    }))}
    <div className="control">
      <button onClick={previous}>
        <svg width="64px" height="32px" viewBox="0 0 64 32">
          <polyline points="0 32, 32 0, 64 32"/>
        </svg>
      </button>
      <button onClick={next}>
        <svg width="64px" height="32px" viewBox="0 0 64 32">
          <polyline points="0 0, 32 32, 64 0"/>
        </svg>
      </button>
    </div>
  </div>
}
