import {CLayout} from "@/components/layouts";
import Link from "next/link";
import React from "react";
import {Slide} from "@/components/slide";

export default function CContents(){
  return <CLayout>
    <Slide title={'目录'}>
      <ul>
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
    </Slide>
  </CLayout>
}
