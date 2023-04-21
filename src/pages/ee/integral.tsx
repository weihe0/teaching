import {InlineMath, Slide} from "@/components/slide";
import {EELayout} from "@/components/layouts";
import {DisplayMath} from "@/components/slide";

export default function Integral(){
  return <EELayout>
    <IntegralDefinition/>
    <Dz/>
    <Slide title={'积分存在的条件'}>
      <ul>
        <li><InlineMath tex={'f(z)=u+iv'}/></li>
        <li><InlineMath tex={'\\mathrm{d}z=\\mathrm{d}x+i\\mathrm{d}y'}/></li>
        <li><DisplayMath
          tex={'\\int_Cf(z)\\mathrm{d}z=\\int_C(u\\mathrm{d}x-v\\mathrm{d}y)+i\\int_C(v\\mathrm{d}x+u\\mathrm{d}y)'}/></li>
        <li>等式右侧是<em>实数函数的积分</em></li>
      </ul>
    </Slide>
    <Slide title={'积分的参数形式'}>
      <DisplayMath tex={'\\int_Cf(z(t))\\mathrm{d}z(t)=\\int_0^tf(z(t))\\frac{\\mathrm{d}z}{\\mathrm{d}t}\\mathrm{d}t' +
        '=\\int_0^tf(z(t))z\'(t)\\mathrm{d}t'}/>
    </Slide>
    <Slide title={'柯西——古萨定理'}>
      <ul>
        <li>柯西<em>提出</em>定理，古萨<em>严格证明</em></li>
        <li>如果<InlineMath tex={'f(z)'}/>在单连通域<InlineMath tex={'B'}/>内解析，
          那么<InlineMath tex={'f(z)'}/>沿<InlineMath tex={'B'}/>内任意一条封闭曲线
          <InlineMath tex={'C'}/>的积分为零</li>
        <li>推论：解析函数的曲线积分，只与<em>起点</em>和<em>终点</em>相关，与<em>路径</em>无关</li>
      </ul>
    </Slide>
    <Slide title={'柯西积分'}>
      <ul>
        <li><InlineMath tex={'\\frac{f(z)}{z-z_0}'}/>在<InlineMath tex={'z=z_0'}/>处不连续</li>
        <li>但可以在<InlineMath tex={'z=z_0'}/>的<em>邻域</em>内对<em>闭合曲线</em>做积分</li>
        <li><DisplayMath tex={'f(z_0)=\\frac{1}{2\\pi i}\\oint\\frac{f(z)}{z-z_0}\\mathrm{d}z'}/></li>
        <li><DisplayMath tex={'\\frac{1}{2\\pi i}\\oint\\frac{\\sin z}{z}' +
          '\\mathrm{d}z=\\frac{1}{2\\pi i}\\oint\\frac{\\sin z}{z-0}\\mathrm{d}z=\\sin 0=0'}/></li>
      </ul>
    </Slide>
    <Slide title={'原函数'}>
      <ul>
        <li><InlineMath tex={"F\\'(z)=f(z)"}/>，<InlineMath tex={'F(z)'}/>是
          <InlineMath tex={'f(z)'}/>的<em>原函数</em></li>
        <li><DisplayMath tex={'\\int_{z_0}^{z_1} f(z)\\mathrm{d}z=F(z_1)-F(z_0)'}/></li>
      </ul>
    </Slide>
    <Slide title={'解析函数的高阶导数'}>
      <ul>
        <li>利用柯西积分计算导数</li>
        <li>证明方法：将<DisplayMath tex={"f'(z_0)=\\lim_{\\Delta z\\to 0}\\frac{f(z_0+\\Delta z)-f(z_0)}{\\Delta z}"}/>
          转化为两个<em>闭曲线积分</em>的<em>差</em></li>
        <li>高阶导数用法：将积分转化为导数</li>
      </ul>
    </Slide>
  </EELayout>
}
export function IntegralDefinition(){
  return <Slide title={'曲线积分的定义'}>
    {/*<canvas width="960" height="540" ></canvas>*/}
    <DisplayMath tex={String.raw`\begin{split}
      \int_Cf(z)\mathrm{d}z=\lim_{n\to\infty}\sum_{k=1}^n f(\zeta_k)(z_k-z_{k-1})
    =\lim_{n\to\infty}\sum_{k=1}^n f(\zeta_k)\Delta z_k\end{split}`}/>
  </Slide>
}
export function Dz(){
  return <Slide title={'Δz与dz的区别'}>
    <ul>
      <li><InlineMath tex={String.raw`\Delta z`}/>代表<em>不变</em>的复数</li>
      <li><InlineMath tex={'\\mathrm{d}z'}/>代表<em>不断接近0</em>的复数</li>
    </ul>
  </Slide>
}
export function ParametrizedCurve(){

}
export function ParametrizedCurve2(){

}
export function StraightLine(){

}
