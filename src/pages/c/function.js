import {CLayout} from "@/components/layouts";
import {Slide} from "@/components/slide";

export default function CFunction(){
  return <CLayout>
    <Slide title="第13章 函数">
      <ul>
        <li>函数的概念</li>
        <li>函数的定义</li>
        <li>函数的调用</li>
        <li>库函数</li>
      </ul>
    </Slide>
    <Slide title="函数的注意事项">
      <ul>
        <li>不能在函数中定义函数</li>
        <li>即使函数没有参数，也不能省略函数的括号</li>
        <li>调用函数时，调用的位置的前面必须有<em>函数定义</em>或<em>函数声明</em></li>
      </ul>
    </Slide>
    <Slide title="函数声明">
      <span className="code">数据类型 函数名(数据类型 参数名0, 数据类型 参数名1, ……);</span>
    </Slide>
    <Slide title="库函数">
      <ul>
        <li>编译系统提供的函数，称为<em>库函数</em></li>
        <li>调用<em>库函数</em>需要使用#include指令</li>
        <li>#include&lt;文件名&gt;的功能是包含这个文件的内容</li>
        <li>如果自己定义的函数与库函数<em>重名</em>，将调用自己定义的函数</li>
      </ul>
    </Slide>
    <Slide title="库函数举例">
      <table>
        <thead><tr><td>头文件</td><td>函数</td></tr></thead>
        <tbody>
        <tr><td>stdio.h</td><td>printf, scanf, puts, putc</td></tr>
        <tr><td>string.h</td><td>strcpy, strcat, strlwr, strupr, strcmp</td></tr>
        <tr><td>math.h</td><td>sin, cos, tan, exp, log</td></tr>
        </tbody>
      </table>
    </Slide>
  </CLayout>
}
