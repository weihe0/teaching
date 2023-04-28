import {EELayout} from "@/components/layouts";
import {Slide} from "@/components/slide";
import Link from "next/link";
import React from "react";

export default function EEContents(){
  return <EELayout>
    <Slide title={'目录'}>
      <ul>
        <li><Link href="/ee/field">电磁场</Link></li>
        <li><Link href="/ee/complex">复数</Link></li>
        <li><Link href="/ee/analytic">解析函数</Link></li>
        <li><Link href="/ee/integral">积分</Link></li>
        <li><Link href="/ee/series">级数</Link></li>
        <li><Link href="/ee/residue">留数</Link></li>
        <li><Link href="/ee/laplace">Laplace变换</Link></li>
        <li><Link href="/ee/det">行列式</Link></li>
      </ul>
    </Slide>
  </EELayout>
}
