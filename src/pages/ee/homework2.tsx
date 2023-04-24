import {DisplayMath, InlineMath} from "@/components/slide";

export default function Homework2(){
  return <ol>
    <li>哪些命题是正确的，哪些命题是错误的？（2分）</li>
    <ol>
      <li>连续函数必定是解析的</li>
      <li>解析函数必定是连续的</li>
      <li>连续但不解析的函数存在</li>
      <li>解析但不连续的函数存在</li>
    </ol>
    <li>求函数值（3分）</li>
    <ol>
      <li><InlineMath tex={'e^{2+\\frac{\\pi}{2}i}'}/></li>
      <li><InlineMath tex={'{(1+i)}^{2+i}'}/></li>
      <li><InlineMath tex={'\\cos (1+i)'}/></li>
    </ol>
    <li>求函数的导数（3分）</li>
    <ol>
      <li><InlineMath tex={'f(z)=z^3'}/></li>
      <li><InlineMath tex={'f(z)=z+\\frac{1}{z}'}/></li>
      <li><InlineMath tex={'f(z)=z+\\frac{1}{z}'}/></li>
    </ol>
    <li>计算曲线积分<DisplayMath tex={'\\oint_C \\frac{\\mathrm{d}z}{(z-z_0)^n}'}/>
      其中曲线<InlineMath tex={'C'}/>是以<InlineMath tex={'z_0'}/>为中心，<InlineMath tex={'r'}/>
      为半径的逆时针圆周， <InlineMath tex={'n'}/>为非负整数（2分）</li>
    <li>计算曲线积分<InlineMath tex={'\\int_C z^2\\mathrm{d}z'}/>，曲线<InlineMath tex={'C'}/>
      是任意一条从<InlineMath tex={'1+i'}/>出发，到<InlineMath tex={'2+3i'}/>结束的曲线。步骤如下（2分）</li>
    <ol>
      <li>求出<InlineMath tex={'z^2'}/>的原函数</li>
      <li>利用原函数计算积分</li>
    </ol>
    <li>求函数<DisplayMath tex={'f(z)=\\frac{sin z}{z^2}'}/>的洛朗级数。步骤如下（3分）</li>
    <ol>
      <li>列出<InlineMath tex={'\\sin z'}/>的泰勒级数</li>
      <li>利用泰勒级数，求出<InlineMath tex={'f(z)'}/>的洛朗级数</li>
      <li>这个洛朗级数的极点是多少级极点？</li>
    </ol>
  </ol>
}
