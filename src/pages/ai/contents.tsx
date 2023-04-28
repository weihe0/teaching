import {Slide} from "@/components/slide";
import Link from "next/link";
import React from "react";
import {AILayout} from "@/components/layouts";

export default function AIContents() {

  return <AILayout>
    <Slide title={'人工智能概论'}>
      <ul>
        <li><Link href="/ai/general">项目一 总论</Link></li>
        <li><Link href="/ai/robot">项目二 智能机器人</Link></li>
        <li><Link href="/ai/drone">项目三 无人机</Link></li>
        <li><Link href="/ai/bigdata">项目四 大数据</Link></li>
        <li><Link href="/ai/ehome">项目五 智能家居</Link></li>
        <li><Link href="/ai/transport">项目六 智能交通</Link></li>
        <li><Link href="/ai/medicine">项目七 人工智能+医疗</Link></li>
        <li><Link href="/ai/finance">项目八 人工智能+金融</Link></li>
      </ul>
    </Slide>
  </AILayout>
}
