import {CLayout} from "@/components/layouts";
import {Slide} from "@/components/slide";

export default function Function() {
  return <CLayout>
    <Slide title="第13章 函数">
      <ul>
        <li>函数的概念</li>
        <li>函数的定义</li>
        <li>函数的调用</li>
        <li>库函数</li>
      </ul>
    </Slide>
    <Slide title="程序中的函数">
      <p>
        <span>int main()&#123;</span><br/>
        <span>int a;</span><br/>
        <span>printf("a=");</span><br/>
        <span>scanf("%d", &a);</span><br/>
        <span>return 0;</span><br/>
        <span>&#125;</span>
      </p>
    </Slide>
    <Slide title="为什么使用函数">
      <p className="code">
        <span>#include&lt;stdio.h&gt;</span><br/>
        <span>#include&lt;math.h&gt;</span><br/>
        <span>int main()&#123;</span><br/>
          <span className="indent-1">double a,b;</span><br/>
          <span className="indent-1">scanf("%lf%lf",&a,&b);</span><br/>
          <span className="first-appearance"><span className="indent-1">double sum = a*a+b*b;</span><br/>
          <span className="indent-1">double c=sqrt(sum);</span><br/></span>
          <span className="indent-1">double x,y;</span><br/>
          <span className="indent-1">scanf("%lf%lf",&x,&y);</span><br/>
          <span className="second-appearance"><span className="indent-1">sum = x*x+y*y;</span><br/>
          <span className="indent-1">double z=sqrt(sum);</span><br/></span>
          <span className="indent-1">return 0;</span><br/>
          <span>&#125;</span>
      </p>
      <ul>
        <li>相似的代码出现了多次</li>
        <li>可以把相似的代码写成<em>函数</em></li>
      </ul>
    </Slide>
    <Slide title="什么是函数">
      <ul>
        <li>数学的函数f(x)代表一个含有x的<em>算式</em></li>
        <li>C语言的函数代表<em>一组</em>语句</li>
        <li>执行函数就是执行它代表的一组语句</li>
        <li>函数执行前获得的值称为<em>参数</em>，它执行的结果称为<em>返回值</em></li>
      </ul>
    </Slide>
    <Slide title="函数的定义">
      <p className="code">
        <span>// 如果函数不含有参数</span><br/>
        <span>数据类型 函数名()</span><br/>
        <span>&#123;</span><br/>
          <span className="indent-1">语句0</span><br/>
          <span className="indent-1">语句1</span><br/>
          <span className="indent-1">语句2</span><br/>
          <span className="indent-1">……</span><br/>
          <span>&#125;</span>
      </p>
      <p className="code">
        <span>// 如果函数含有参数</span><br/>
        <span>数据类型 函数名(数据类型 参数名0, 数据类型 参数名1, ……)</span><br/>
        <span>&#123;</span><br/>
          <span className="indent-1">语句0</span><br/>
          <span className="indent-1">语句1</span><br/>
          <span className="indent-1">语句2</span><br/>
          <span className="indent-1">……</span><br/>
          <span>&#125;</span>
      </p>
    </Slide>
    <Slide title="函数定义举例">
      <p className="code">
        <span>double distance(double x0, double y0, double x1, double y1)</span><br/>
        <span>&#123;</span><br/>
          <span className="indent-1">double dx = x1 - x0;</span><br/>
          <span className="indent-1">double dy = y1 - y0;</span><br/>
          <span className="indent-1">double sum = dx * dx + dy * dy;</span><br/>
          <span className="indent-1">double d = sqrt(sum);</span><br/>
          <span className="indent-1">return d;</span><br/>
          <span>&#125;</span>
      </p>
    </Slide>
    <Slide title="return语句">
      <p className="code dim">
        <span>int f(int a, int b) &#123;</span><br/>
          <span className="indent-1 highlight">return 1;</span><br/>
          <span className="indent-1">scanf("%d",&a);</span><br/>
          <span className="indent-1">scanf("%d",&b);</span><br/>
          <span>&#125;</span>
      </p>
      <ul>
        <li>函数执行到return语句直接返回</li>
        <li>return的表达式类型必须匹配或者能强制转换</li>
      </ul>
    </Slide>
    <Slide title="函数调用">
      <ul>
        <li>函数调用是一种<em>表达式</em>，作用是<em>执行函数</em></li>
        <li>调用无参数的函数：<span className="code">函数名()</span> </li>
        <li><em>函数调用不要遗漏圆括号</em></li>
        <li>调用有参数的函数：<span className="code">函数名(表达式0，表达式1, ……)</span> </li>
        <li>圆括号里表达式的数量和类型必须和函数定义<em>匹配</em>，或者能<em>强制转换</em></li>
      </ul>
    </Slide>
    <Slide title="函数调用举例">
      <p className="code">
    <span>unsigned f(unsigned n) &#123;</span><br/>
      <span className="indent-1">if(n==0||n==1)&#123;</span><br/>
      <span className="indent-2">return 1;</span><br/>
      <span className="indent-1">&#125; else &#123;</span><br/>
      <span className="indent-2">unsigned a=f(n-2);</span><br/>
      <span className="indent-2">unsigned b=f(n-1);</span><br/>
      <span className="indent-2">return a+b;</span><br/>
      <span className="indent-1">&#125;</span><br/>
        <span>&#125;</span><br/>
        <span>int main() &#123;</span><br/>
          <span className="indent-1">f(3);</span><br/>
          <span className="indent-1">return 0;</span><br/>
          <span>&#125;</span>
      </p>
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
        <thead>
        <tr>
          <td>头文件</td>
          <td>函数</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>stdio.h</td>
          <td>printf, scanf, puts, putc</td>
        </tr>
        <tr>
          <td>string.h</td>
          <td>strcpy, strcat, strlwr, strupr, strcmp</td>
        </tr>
        <tr>
          <td>math.h</td>
          <td>sin, cos, tan, exp, log</td>
        </tr>
        </tbody>
      </table>
    </Slide>
  </CLayout>
}
