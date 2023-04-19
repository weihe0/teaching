import Link from "next/link";
import React, {PropsWithChildren, useState} from "react";

export function AILayout(props: PropsWithChildren) {
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

  let [show, setShow] = useState(false)
  return <>
    {show ?
      <nav className="navigation">
        <ul className="content">
          <li>目录</li>
          <li><Link href="/ai/general">项目一 总论</Link></li>
          <li><Link href="/ai/robot">项目二 智能机器人</Link></li>
          <li><Link href="/ai/drone">项目三 无人机</Link></li>
          <li><Link href="/ai/bigdata">项目四 大数据</Link></li>
          <li><Link href="/ai/ehome">项目五 智能家居</Link></li>
          <li><Link href="/ai/transport">项目六 智能交通</Link></li>
          <li><Link href="/ai/medicine">项目七 人工智能+医疗</Link></li>
        </ul>
        <button className="fold" onClick={() => setShow(!show)}>
          <svg width="32px" height="64px" viewBox="0 0 32 64">
            <polyline points="32 0,  0 32, 32 64"/>
          </svg>
        </button>
      </nav>
      : <></>}
    <div className="slide-container">
      <button className="unfold" onClick={() => setShow(!show)}>
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
  </>
}

export function CLayout(props: PropsWithChildren) {
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

  let [show, setShow] = useState(false)
  return <>
    {show ?
      <nav className="navigation">
        <ul className="content">
          <li>目录</li>
          <li><Link href="/c/basic">第1到4章 C语言基础</Link></li>
          <li><Link href="/c/data">第5章 基础数据类型</Link></li>
          <li><Link href="/c/io">第6章 输入输出</Link></li>
          <li><Link href="/c/expression">第7章 运算符与表达式</Link></li>
          <li><Link href="/c/condition">第8章 条件判断语句</Link></li>
          <li><Link href="/c/loop">第9章 循环语句</Link></li>
          <li><Link href="/c/array">第10章 数组</Link></li>
          <li><Link href="/c/string">第11章 字符串</Link></li>
          <li><Link href="/c/function">第12章 函数</Link></li>
          <li><Link href="/c/pointer">第13章 指针</Link></li>
          <li><Link href="/c/struct">第14章 结构体</Link></li>
        </ul>
        <button onClick={() => setShow(!show)} className="fold">
          <svg width="32px" height="64px" viewBox="0 0 32 64">
            <polyline points="32 0,  0 32, 32 64"/>
          </svg>
        </button>
      </nav>
      : <></>}
    <div className="slide-container">
      <button className="unfold" onClick={() => setShow(!show)}>
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
      <Lottery/>
    </div>
  </>
}

export function EELayout(props: PropsWithChildren) {
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

  let [show, setShow] = useState(false)
  return <>
    {show ?
      <nav className="navigation">
        <ul className="content">
          <li>目录</li>
          <li><Link href="/ee/field">电磁场</Link></li>
          <li><Link href="/ee/complex">复数</Link></li>
          <li><Link href="/ee/analytic">解析函数</Link></li>
          <li><Link href="/ee/integral">积分</Link></li>
          <li><Link href="/ee/series">级数</Link></li>
          <li><Link href="/ee/residue">留数</Link></li>
          <li><Link href="/ee/laplace">Laplace变换</Link></li>
          <li><Link href="/ee/det">行列式</Link></li>
        </ul>
        <button className="fold" onClick={() => setShow(!show)}>
          <svg width="32px" height="64px" viewBox="0 0 32 64">
            <polyline points="32 0,  0 32, 32 64"/>
          </svg>
        </button>
      </nav>
      : <></>}
    <div className="slide-container">
      <button className="unfold" onClick={() => setShow(!show)}>
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
  </>
}

export function Lottery() {
  let [name, setName] = useState('名字')
  const names = ["陈海明", "陈嘉炜", "陈雨婷", "冯永康", "高鸿键", "高嘉林", "关劲贤", "官志标",
    "黄鑫", "李灿", "李佳勇", "李文翔", "李文岳", "梁梓健", "林春学", "林家荣", "林凯丰", "林乔方",
    "刘泰延", "龙国宏", "罗凯然", "聂志恒", "冉斌斌", "陕千熙", "沈雁楠", "苏润达", "苏鑫乐", "孙华鑫",
    "谭媚", "谭云鹏", "王宏伟", "王开新", "王意园", "吴媚", "吴沛钢", "伍诗琪", "萧坚裕", "叶浩", "张安",
    "张锦波", "张鹏娟", "张赟", "赵允涛", "郑通叶", "周汝承",
  ]

  function startLottery() {
    let l=new Uint8Array(1)
    crypto.getRandomValues(l)
    let a = new Uint8Array(l[0]);
    crypto.getRandomValues(a);
    for (let i = 0; i < a.length; i++) {
      setName(names[a[i] % names.length])
    }
  }
  return <div className="lottery">
    <span>{name}</span>
    <button onClick={startLottery}>摇人</button>
  </div>
}
