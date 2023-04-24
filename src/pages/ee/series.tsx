import {EELayout} from "@/components/layouts";
import React from "react";
import {DisplayMath, InlineMath, Slide} from "@/components/slide";

export default function Series(){
  return <EELayout>
    <Slide title={'根号2就是数列的极限'}>
      <DisplayMath tex={'a_1=1.4'}/>
      <DisplayMath tex={'a_1=1.41'}/>
      <DisplayMath tex={'a_1=1.414'}/>
      <DisplayMath tex={'a_1=1.4142'}/>
      <DisplayMath tex={'a_1=1.41421'}/>
      <DisplayMath tex={'\\cdots'}/>
      <DisplayMath tex={'\\sqrt{2}'}/>
    </Slide>
    <Slide title={'复数列的极限'}>
      <p>设<InlineMath tex={'\\alpha_n=a_n+ib_n'}/>为一<em>复数列</em><br/>当<InlineMath tex={'N(\\varepsilon)'}/>足够大，
      <InlineMath tex={'|\\alpha_n-\\alpha|'}/>可以任意小，即<InlineMath tex={'|\\alpha_n-\\alpha|&lt;\\varepsilon'}/>，
      其中<InlineMath tex={'\\varepsilon'}/>为任意正数。我们称<InlineMath tex={'\alpha_n'}/><em>收敛</em></p>
    </Slide>
    <Slide title={'极限示例'}>
      <DisplayMath tex={'\\alpha_1=10^8,\\alpha_n=\\frac{1}{2}' +
        '\\Big(\\alpha_{n-1}+\\frac{2}{\\alpha_{n-1}}\\Big),\\lim_{n\\to\\infty}\\alpha_n=\\sqrt{2}'}/>
    </Slide>
    <Slide title={'极限收敛的充要条件'}>
      <ul>
        <li>写出<em>实部</em>与<em>虚部</em><InlineMath tex={'\\alpha_n=a_n+ib_n'}/></li>
        <li><DisplayMath tex={'\\lim_{n\\to\\infty}\\alpha_n=\\lim_{n\\to\\infty}(a_n+ib_n)=a+ib'}/></li>
      </ul>
    </Slide>
  </EELayout>
}
