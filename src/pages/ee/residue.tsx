import {EELayout} from "@/components/layouts";
import React from "react";
import {InlineMath, Slide} from "@/components/slide";

export default function Residue(){
  return <EELayout>
    <Slide title={'留数'}>
      <ol>
        <li>泰勒级数</li>
        <li>洛朗级数</li>
        <li>留数定义</li>
        <li>奇点与极点</li>
        <li>留数与积分</li>
      </ol>
    </Slide>
    <Slide title="泰勒级数">
      <ul>
        <li><InlineMath tex={'\\cos z=1-\\frac{z^2}{2!}+\\frac{z^4}{4!}-\\frac{z^6}{6!}+\\frac{z^8}{8!}-\\cdots'}/></li>
        <li><InlineMath tex={'\\sin z=z-\\frac{z^3}{3!}+\\frac{z^5}{5!}-\\frac{z^7}{7!}+\\frac{z^9}{9!}-\\cdots'}/></li>
        <li><InlineMath tex={'e^z=1+z+\\frac{z^2}{2!}+\\frac{z^3}{3!}+\\frac{z^4}{4!}+\\cdots'}/></li>
        <li><InlineMath tex={'\\cdots'}/></li>
        <li>收敛半径内必须<em>解析</em></li>
      </ul>
    </Slide>
    <Slide title="洛朗级数">
      <p><InlineMath tex={'f(z)=\\cdots+c_{-n}(z-z_0)^{-n}+' +
        '\\cdots+c_{-1}(z-z_0)^{-1}+c_0+c_1(z-z_0)+\\cdots+c_n(z-z_n)^n+\\cdots'}/></p>
    </Slide>
    <Slide title="孤立奇点">
      <ul>
        <li>孤立奇点：<InlineMath tex={'f(z)'}/>在<InlineMath tex={'z_0'}/>不解析，但在
          <InlineMath tex={'0<|z-z_0|<\\delta'}/>内解析
        </li>
        <li>可去奇点：<InlineMath tex={'f(z)'}/>在<InlineMath tex={'z_0'}/>的洛朗级数不含<InlineMath tex={'z-z_0'}/>的负幂项</li>
        <li></li>
      </ul>
    </Slide>
    <Slide title="极点">
      <InlineMath tex={'m'}/>级极点：<br/>
      <InlineMath tex={'f(z)=c_{-m}(z-z_0)^{-m}+' +
        '\\cdots+c_{-1}(z-z_0)^{-1}+c_0+c_1(z-z-0)+c_2(z-z_0)^2+\\cdots'}/><br/>
      负幂次项最高项为<InlineMath tex={'(z-z_0)^{-m}'}/>
    </Slide>
  </EELayout>
}
