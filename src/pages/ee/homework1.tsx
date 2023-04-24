import {InlineMath} from "@/components/slide";

export default function Homework1(){
  return <ol>
    <li>设<InlineMath tex={'\\theta=\\frac{\\pi}{4}\\)，计算\\(e^{i\\theta}'}/>，要算出结果中的所有三角函数值</li>
    <li><InlineMath tex={'w_1=\\frac{\\sqrt{3}}{2}+\\frac{1}{2}i, w_2=\\frac{1}{2}+\\frac{\\sqrt{3}}{2}i'}/>
      <ol>
        <li>写出<InlineMath tex={'w_1,w_2'}/>的三角形式以及指数形式</li>
        <li>计算<InlineMath tex={'w_1+w_2,w_1-w_2,w_1w_2,w_1/w_2'}/></li>
      </ol>
    </li>

    <li>已知虚数单位的定义为<InlineMath tex={'i^2=-1'}/>，那么有多少个复数<InlineMath tex={'w'}/>满足<InlineMath tex={'w^2=i'}/>？
      找出所有这样的<InlineMath tex={'w'}/></li>
    <li>复数<InlineMath tex={'w=3+4i'}/>
      <ol>
        <li>它的模是多少？</li>
        <li>在复平面上将<InlineMath tex={'w'}/>按逆时针旋转<InlineMath tex={'\\frac{\\pi}{2}'}/>，
          得到<InlineMath tex={'z'}/>，求出<InlineMath tex={'z'}/></li>
      </ol>
    </li>
    <li>设<InlineMath tex={'z'}/>与<InlineMath tex={'w'}/>的关系为<InlineMath tex={'w=z^3'}/>，
      那么<InlineMath tex={'z'}/>是<InlineMath tex={'w'}/>的单值函数还是多值函数？</li>

  </ol>
}
