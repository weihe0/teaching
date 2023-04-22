import {CLayout} from "@/components/layouts";
import {Slide} from "@/components/slide";
import styles from '@/styles/c.module.css'
import {useState} from "react";

export default function Pointer() {
  return <CLayout>
    <Slide title="第14章 指针">
      <ul>
        <li>指针的引入</li>
        <li>指针的定义</li>
        <li>指针的引用</li>
        <li>指针与参数</li>
        <li>指针与数组</li>
      </ul>
    </Slide>
    <Slide title="指针的引入">
      <p className="code">
        <span>int a = 1;</span><br/>
        <span>scanf("%d",<span style={{color: "blue"}}>&a</span>);</span>
      </p>
      <p>&a就是a的<em>指针</em></p>
    </Slide>
    <Slide title="为什么使用指针">
      <p className="code">
        <span>void swap(int x, int y) &#123;</span><br/>
        <span className="indent-1">int z=x;</span><br/>
        <span className="indent-1">x=y;</span><br/>
        <span className="indent-1">y=z;</span><br/>
        <span>&#125;</span><br/>
        <span>int main()&#123;</span><br/>
        <span className="indent-1">int a=1;</span><br/>
        <span className="indent-1">int b=2;</span><br/>
        <span className="indent-1">swap(a,b);</span><br/>
        <span className="indent-1">printf("a=%d,b=%d\n",a,b);</span><br/>
        <span className="indent-1">return 0;</span><br/>
        <span>&#125;</span>
      </p>
      <p>swap函数能否交换a和b的值🤔</p>
    </Slide>
    <Slide title="指针的解释">
      <p className="code">
        <span>char ch = 'A';</span><br/>
        <span>double a = 2.5;</span><br/>
        <span>int b = 100;</span><br/>
      </p>
      <table className={styles.memory}>
        <tbody>
        <tr>
          <td colSpan={4}>ch</td>
          <td colSpan={8}>a</td>
          <td colSpan={4}>b</td>
        </tr>
        <tr>
          <td>16</td><td>17</td><td>18</td><td>19</td>
          <td>20</td><td>21</td><td>22</td><td>23</td>
          <td>24</td><td>25</td><td>26</td><td>27</td>
          <td>28</td><td>29</td><td>30</td><td>31</td>
        </tr>
        <tr>
          <td>'A'</td>
          <td></td>
          <td></td>
          <td></td>
          <td colSpan={8}>2.5</td>
          <td colSpan={4}>100</td>
        </tr>
        </tbody>
      </table>
      <ul>
        <li>绝大部分类型的变量都有<em>地址</em>，类似于储物箱的编号</li>
        <li><em>指针</em>是一种<em>数据类型</em>，它的值就是变量的<em>地址</em></li>
        <li>a的指针的值是多少？🤔</li>
      </ul>
    </Slide>
    <Slide title="什么是指针">
      <ul>
        <li>指针是一种<em>数据类型</em>，它的值是<em>地址</em></li>
        <li>绝大多数类型的变量<em>都</em>可以获得它的<em>指针</em></li>
        <li>获得变量的指针的运算：<span className="code">&变量</span>，例如<span className="code">&a</span> </li>
        <li>指针<span className="code">&a</span><em>指向</em>变量a </li>
      </ul>
      <div style={{display:"flex",alignItems:"end"}}>
        <p>&a&#8594;</p>
        <table className={styles.memory}>
          <tbody>
          <tr><td colSpan={4}>a</td> </tr>
          <tr><td>20</td><td>21</td><td>22</td><td>23</td>
            <td>24</td><td>25</td><td>26</td><td>27</td></tr>
          <tr><td colSpan={8}>2.5</td> </tr>
          </tbody>
        </table>
      </div>
    </Slide>
    <Slide title="获取指向的变量">
      <li>语法：<span className="code">*指针</span>，例如<span className="code">*(&a)</span>或
        <span className="code">*&a</span> </li>
      <li>*运算符只能作用于<em>指针</em>，否则<em>不能编译</em></li>
      <li>*运算符获得的变量可以参与<em>表达式</em>的运算</li>
      <li>例如<span className="code">*&a = *&a + 1;</span>，这里的<span className="code">*&a</span>相当于变量
      <span className="code">a</span>
      </li>
    </Slide>
    <Slide title="存放指针的变量">
      <li>语法：<span className="code">数据类型 * 指针名</span></li>
      <li>例如<span className="code">int * pa</span>表示<span className="code">pa</span>是一个存放<em>指针</em>的<em>变量</em>，
        指向<span className="code">int</span>类型的变量</li>
      <li><span className="code">int a=1;float b=2;int * pa=&#38;a;<del style={{color:"red"}}>int * pa= &#38;b;</del></span> </li>
      <li>如果pa&#8594;a，那么<span className="code">*pa</span>运算就获得了变量<span className="code">a</span> </li>
      <li><strong>特别注意：<span className="code">int *pa, pb;</span>表示pa是指针，而pb是int型变量</strong></li>
    </Slide>
    <Slide title="引用运算&与解引用运算*">
      <ul>
        <li><span className="code">int a=1; int *pa = &#38;a;</span> </li>
        <li>指向关系：<span className="code">pa</span>&#8594;<span className="code">a</span> </li>
        <li>引用运算：&a<span style={{color:"gray"}}>&#8594;<span className="code">a</span></span>  </li>
        <li>解引用运算：<span style={{color:"gray"}}>
          <span className="code">pa</span>&#8594;</span><span className="code">*pa</span></li>
      </ul>
    </Slide>
    <Slide title={'用指针改变函数的局部变量'}>
      <p className={'code'}>
        <span>void increase(int *x)&#123;</span><br/>
        <span className={'indent-1'}>*x += 1;</span><br/>
        <span>&#125;</span><br/>
        <span>int main() &#123;</span><br/>
        <span className={'indent-1'}>int a=2;</span><br/>
        <span className={'indent-1'}>increase(&a);</span><br/>
        <span className={'indent-1'}>printf("a=%d\n", a);</span><br/>
        <span className={'indent-1'}>return 0;</span><br/>
        <span>&#125;</span>
      </p>
    </Slide>
    <Slide title="如何使用指针改写swap函数？🤔">
      <RewriteSwap/>
    </Slide>
    <Slide title={'指针与数组'}>
      <div className={styles.explanation}>
        <p className={'code'}>
          <span>int a[5] = &#123;1,2,3,4,5&#125;</span><br/>
          <span>int *p = a;</span>
        </p>
        <table>
          <tbody>
          <tr>
            <td colSpan={5}>p</td>
          </tr>
          <tr>
            <td colSpan={5}>&#8595;</td>
          </tr>
          <tr>
            <td>a[0]</td>
            <td>a[1]</td>
            <td>a[2]</td>
            <td>a[3]</td>
            <td>a[4]</td>
          </tr>
          <tr className={styles.array}>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          </tbody></table>
      </div>
      <p>p指向哪个元素？🤔</p>
    </Slide>
    <Slide title={'用指针访问数组元素'}>
      <p className={'code'}>
        <span>int a[5] = &#123;1,2,3,4,5&#125;</span><br/>
        <span>int *p = a;</span>
      </p>
      <p>如果<span className={'code'}>p</span>被赋值为<span className={'code'}>a</span>，
        那么<span className={'code'}>p[i]</span><em>相当于</em><span className={'code'}>a[i]</span> </p>
      <table>
        <tr>
          <td>p[0]</td>
          <td>p[1]</td>
          <td>p[2]</td>
          <td>p[3]</td>
          <td>p[4]</td>
        </tr>
        <tr className={styles.array}>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>a[0]</td>
          <td>a[1]</td>
          <td>a[2]</td>
          <td>a[3]</td>
          <td>a[4]</td>
        </tr>
      </table>
    </Slide>
    <Slide title={'函数参数中的指针'}>
      <p className={'code'}>
        <span>float average_number(float *a, int n) &#123;</span><br/>
        <span className={'indent-1'}>float sum = 0;</span><br/>
        <span className={'indent-1'}>int i;</span><br/>
        <span className={'indent-1'}>for(i=0;i&#60;n;i++)&#123;</span><br/>
        <span className={'indent-2'}>sum += a[i];</span><br/>
        <span className={'indent-1'}>&#125;</span><br/>
        <span className={'indent-1'}>return sum/n;</span><br/>
        <span>&#125;</span><br/>
        <span>int main() &#123;</span><br/>
        <span className={'indent-1'}>float array[5] = &#123;1.5, 3.5, 2.5, 5.5, 4.5&#125;</span><br/>
        <span className={'indent-1'}>float average = average_number(array, 5);</span><br/>
        <span className={'indent-1'}>printf("average=%f\n", average);</span><br/>
        <span>&#125;</span>
      </p>
      <p>为什么<span className={'code'}>average_number</span>函数要传入两个参数？🤔</p>
    </Slide>
    <Slide title={'指针与字符串'}>
      <p className={'code'}>
        <span>int is_identifier_or_keyword(char *str) &#123;</span><br/>
        <span className={'indent-1'}>if (!(isalpha(str[0]) || str[0]=='_')) return 0;</span><br/>
        <span className={'indent-1'}>int i;</span><br/>
        <span className={'indent-1'}>for (i=1;str[i]!='\0';i++) &#123;</span><br/>
        <span className={'indent-2'}>if (!(isalnum(str[i]) || str[i]=='_')) return 0;</span><br/>
        <span className={'indent-1'}>&#125;</span><br/>
        <span className={'indent-1'}>return 1;</span><br/>
        <span>&#125;</span><br/>
        <span>int main() &#123;</span><br/>
        <span className={'indent-1'}>char str0[]="sum";</span><br/>
        <span className={'indent-1'}>char str1[]="123";</span><br/>
        <span className={'indent-1'}>printf("%d\n", is_identifier_or_keyword(str0));</span><br/>
        <span className={'indent-1'}>printf("%d\n", is_identifier_or_keyword(str1));</span><br/>
        <span>&#125;</span>
      </p>
      <p>为什么<span className={'code'}>is_identifier_or_keyword</span>函数只需一个参数？🤔</p>
    </Slide>
  </CLayout>
}

function RewriteSwap(){
  let [show,setShow]=useState(false)
  function toggle(){
    setShow(!show)
  }
  let codeStyle=show?{color:"black"}:{color:"white"}
  return <><p>提示：scanf函数如何给变量赋值</p>
    <p style={codeStyle} className="code">
    <span>void swap(int *x, int *y) &#123;</span><br/>
    <span className="indent-1">int z=*x;</span><br/>
    <span className="indent-1">*x=*y;</span><br/>
    <span className="indent-1">*y=z;</span><br/>
    <span>&#125;</span><br/>
    <span>int main()&#123;</span><br/>
    <span className="indent-1">int a=1;</span><br/>
    <span className="indent-1">int b=2;</span><br/>
    <span className="indent-1">swap(&a,&b);</span><br/>
    <span className="indent-1">printf("a=%d,b=%d\n",a,b);</span><br/>
    <span className="indent-1">return 0;</span><br/>
    <span>&#125;</span>
  </p>
    <button style={{border:"unset",backgroundColor:"unset",background:"gray"}} onClick={toggle}>{show?"隐藏答案":"显示答案"}</button>
  </>
}
