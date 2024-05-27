<script setup lang="ts">
import Judgements from '@/c/exams/Judgements.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Block from '@/c/components/Block.vue';
import Underline from '@/c/exams/Underline.vue';
import Choices from '@/c/exams/Choices.vue';
import Parentheses from '@/c/exams/Parentheses.vue';
import Function from '@/c/components/Function.vue';
import IfElse from '@/c/components/IfElse.vue';
import JudgeItem from '@/c/exams/JudgeItem.vue';
import PageBreak from '@/c/exams/PageBreak.vue';
</script>

<template>
  <div class="exam-paper">
    <div class="background">
      <div v-for="(_, i) in Array(4)" class="page">
        <div></div>
        <footer>第{{ i + 1 }}页</footer>
      </div>
    </div>
    <div class="front">
      <aside class="side">
        <div class="info">
          <table class="meta">


            <tr>
              <td><span>考试时间</span></td>
            </tr>
            <tr>
              <td>
                <span class="week"
                  ><span>第</span><span>18</span><span>周</span></span
                >
              </td>
            </tr>
            <tr>
              <td><span>学院</span></td>
            </tr>
            <tr>
              <td><span>机电学院</span></td>
            </tr>
            <tr>
              <td><span>班级</span></td>
            </tr>
            <tr>
              <td><span>机器人232</span></td>
            </tr>
            <tr>
              <td><span>姓名</span></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td><span>学号</span></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td><span>任课教师</span></td>
            </tr>
            <tr>
              <td><span>何为</span></td>
            </tr>
          </table>
          <div class="signature">
            <span>拟题人签名</span>
            <span>校卷人签名</span>
            <span>教研室主任</span>
            <span>系主任签名</span>
          </div>
        </div>
        <div class="seal">
          装 &cir; 订 &cir; 线 &cir; 内 &cir; 请 &cir; 勿 &cir; 答 &cir; 题
        </div>
      </aside>
      <div class="questions">
        <h1 class="college">广东轻工职业技术学院</h1>
        <h1 class="term">2023-2024学年第2学期期末考试</h1>
        <div class="course">
          <span>课程名称：C语言程序设计</span><span>考试方式：闭卷</span>
        </div>
        <table class="grades">
          <thead>
            <tr>
              <th>题号</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
              <th>合计</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>题分</td>
              <td>20</td>
              <td>30</td>
              <td>30</td>
              <td>20</td>
              <td></td>
              <td></td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
        <table class="grader-inspector">
          <thead>
            <tr>
              <th>试卷评分人</th>
              <th>试卷核分人</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p><em>试题中所有的表达式都是C语言的表达式，不是数学算式</em></p>
        <h2 class="question-type">判断题，每题2分，共10题，合计20分</h2>
        <Judgements>
          <JudgeItem>C程序从main函数开始执行</JudgeItem>
          <JudgeItem
            ><span class="code">int a=10;</span>那么<span class="code"
              >a==10</span
            ></JudgeItem
          >
          <JudgeItem
            ><span class="code">1+2*3</span>相当于<span class="code"
              >1+(2*3)</span
            >
          </JudgeItem>
          <JudgeItem
            ><span class="code">2&gt;1</span>的值为<span class="code"
              >1</span
            ></JudgeItem
          >
          <JudgeItem><span class="code">5/4==1</span></JudgeItem>
          <JudgeItem
            ><span class="code">float b;</span>那么<span class="code"
              >b==0</span
            ></JudgeItem
          >
          <JudgeItem
            ><span class="code">double c[10];</span
            ><span class="code">c[10]是c的一个元素</span></JudgeItem
          >
          <JudgeItem><span class="code">int if=3;</span>能通过编译</JudgeItem>
          <JudgeItem
            ><span class="code">int i=3;</span>那么<span class="code"
              >i<1||i>4 == 1</span
            >
          </JudgeItem>
          <JudgeItem><span class="code">8%5==1</span></JudgeItem>
        </Judgements>

        <h2 class="question-type">单选题，每题2分，共15题，合计30分</h2>
        <p><em>答案写在下划线上</em></p>
        <ol class="multiple-choices">
          <li>
            <span class="code"
              >printf("<Underline />", 2024);</span
            >
          </li>
          <Choices :choices="['%d', '%b', '%r', '%y']"> </Choices>

          <li>
            <span class="code"
              >int n; scanf("%d", <Underline />);</span
            >
          </li>
          <Choices :choices="['^n', '&n', '@n', '$n']"> </Choices>

          <li><Underline /><span class="code">i = 0;</span></li>
          <Choices :choices="['int', 'integer', 'integral', 'internet']">
          </Choices>

          <li>
            <span class="code">float <Underline />=0.0f;</span>
          </li>
          <Choices :choices="['if', 'for', 'while', 'on']"> </Choices>

          <li>
            <span class="code">double b=</span><Underline />;
          </li>
          <Choices :choices="['1.5', '1@5', '1:5', '1_5']"> </Choices>
          <PageBreak />

          <li>
            <Underline /><span class="code"
              >very_large_number=2147483647;</span
            >
          </li>
          <Choices :choices="['long', 'big', 'large', 'huge']"> </Choices>
          <li>
            <span class="code">float c=</span><Underline />;
          </li>
          <Choices :choices="['2.5f', '2.5float', '2.5afloat', '2.5floater']">
          </Choices>

          <li>

            <div class="code">
              <div>if (<Underline />)</div>
              <SingleStatement>printf("2&lt;=n&lt;=8");</SingleStatement>
            </div>
            <p>如何判断n在2到8之间？<Underline/></p>
          </li>
          <Choices
            :choices="['2<=n<=8', '2=<n=<8', 'n>=2 && n<=8', 'n>=2 || n<=8']"
          >
          </Choices>

          <li>下列程序的运行结果是<Underline/></li>
          <div class="code">
            <div>int m=2;</div>
            <div>switch (m)</div>
            <Block>
              <div>case 1: puts("m=1"); break;</div>
              <div>default: puts("m!=1"); break;</div>
            </Block>
          </div>

          <Choices :choices="['m=1', 'm!=1', 'm==1', 'm=2']"> </Choices>

          <li>下划线填哪个，能输出1到100的整数？</li>
          <div class="code">
            <div>int i;</div>
            <div>for (i=1;<Underline />;i++)</div>
            <SingleStatement>printf("%d ", i);</SingleStatement>
          </div>
          <Choices :choices="['i<100', 'i<=100', 'i=<100', 'i==100']">
          </Choices>
          <li>
            <span class="code"
              >int array<Underline />={1,2,3,4,5};</span
            >
          </li>
          <Choices :choices="['(5)', '[5]', '{5}', '<5>']"> </Choices>

          <li>
            <span class="code"
              >int d={4,3,2,1}; 那么<span class="code">d[1]==</span><Underline
            /></span>
          </li>
          <Choices :choices="['4', '3', '2', '1']"> </Choices>

          <li>
            <span class="code"
              >int e[2][3]={ {1,2,3}, {4,5,6} };</span
            >
            那么<span class="code">e[1][2]==</span><Underline />
          </li>
          <Choices :choices="['1', '3', '4', '6']"> </Choices>

          <li></li>
          <div class="code">
            <div>void twice(<Underline />)</div>
            <Block>
              <div>printf("%d", n+n);</div>
            </Block>
          </div>
          <Choices :choices="['int', 'n', 'int n', 'n:int']"> </Choices>

          <li>
            有函数原型声明<span class="code"
              >double sin(double x);</span
            >调用sin时，<span class="code">sin(<Underline />)</span>
            可以填哪个？
          </li>
          <Choices :choices="['1.57', 'else', '3.14, 2', '90\\3']"> </Choices>
        </ol>
        <PageBreak />
        <h2 class="question-type">填空题，每题2分，共15题，合计30分</h2>
        <p><em>请写最简单的答案，例如不要写1+2，要写成3</em></p>
        <ol>
          <li>
            <span class="code">printf("%c", 'A');</span
            >的运行结果是<Underline />
          </li>
          <li><span class="code">8/5*1.5==</span><Underline /></li>
          <li><span class="code">3*3%5==</span><Underline /></li>
          <li>
            <span class="code">int i=0; i++;</span>执行后<span class="code"
              >i==</span
            ><Underline />
          </li>
          <li>
            <span class="code"
              >int n=2; !(n&lt;1 || n&gt;3)==<Underline
            /></span>
          </li>
          <li>
            <span class="code">int a[]={2, 3, 4}; a[2]==</span><Underline />
          </li>
          <li>
            <span class="code">char str[]="BCD"; str[1]==</span><Underline />
          </li>
          <li>
            <span class="code">char names[5][6];</span>那么<span class="code"
              >names</span
            >包含<Underline />个char
          </li>
          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <div>int d[]= {9, 6, 3, 0};</div>
            <div>int *pd=d;</div>
            <div>printf("%d", pd[1]);</div>
          </div>
          <li>
            已知square函数定义如下，那么<span class="code"
              >square(3)==<Underline
            /></span>
          </li>
          <div class="code">
            <div>int square(int a)</div>
            <Block>return a*a;</Block>
          </div>
          <li>
            已知abs函数的定义如下，那么<span class="code">abs(-2)==</span
            ><Underline />
          </li>
          <div class="code">
            <Function function-name="abs" parameters="int m" return-type="int">
              <IfElse condition="m > 0">
                <template #ifStatement
                  ><SingleStatement>return m;</SingleStatement></template
                >
                <template #elseStatement
                  ><SingleStatement>return -m;</SingleStatement></template
                >
              </IfElse>
            </Function>
          </div>
          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <Function
              function-name="increase"
              parameters="int x"
              return-type="void"
            >
              x = x+1;
            </Function>
            <Function function-name="main" parameters="" return-type="int">
              <div>int y = 3;</div>
              <div>increase(y);</div>
              <div>printf("%d", y);</div>
            </Function>
          </div>
          <PageBreak />
          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <div>struct person</div>
            <div>{</div>
            <div class="indent">
            <div>int id;</div>
              <div>double temperature;</div>
            </div>
            <div>};</div>
            <div>struct person zhangsan={ 10, 37.1 };</div>
            <div>printf("%d", zhangsan.id);</div>
          </div>
          <li>
            <span class="code">struct person *wangwu;</span>那么<span
              class="code"
              >wangwu->id</span
            >
            相当于<span class="code">(<Underline />).id</span>
          </li>
          <li>填入正确的表达式，使pf指向f</li>
          <div class="code">
            <div>float f=1.5f;</div>
            <div>float *pf=<Underline />;</div>
          </div>
        </ol>
        <h2 class="question-type">编程题，每题10分，共2题，合计20分</h2>
        <ol>
          <li>编写一个程序，用户输入整数m，计算1+2+...+m</li>
          <div class="code">
            <div>#include&lt;stdio.h&gt;</div>
            <Function function-name="main" parameters="" return-type="int">
              <div>int m;</div>
              <div>printf("m=");</div>
              <div>scanf("%d", <Underline />); //输入整数m</div>
              <div>int s=0; //s记录总和</div>
              <div>int i;</div>
              <div>
                for (<Underline />;<Underline />;<Underline />)
                //i从1开始，递增到m，每次加1
              </div>
              <Block>
                <div>s += <Underline />;</div>
              </Block>
              printf("1+2+...+m=%d\n", s);
            </Function>
          </div>
          <li>
            编写一个函数，传入一个指针p和一个整数n，p指向数组的首个元素，n代表数组的元素个数，返回该数组的最大值。
          </li>
          <div class="code">
            <Function
              function-name="max_value"
              parameters="long *p, int n"
              return-type="long"
            >
              <div>long max=<Underline /> //假设最大值是数组的首个元素</div>
              <div>int i;</div>
              <div>for (i=0;<Underline />;i++) //检查数组的每个元素</div>
              <Block>
                <div>if (p[i]<Underline />) //如果遇到更大的元素</div>
                <SingleStatement
                  >max=<Underline />; //那么更新最大值</SingleStatement
                >
              </Block>
              <div>return <Underline />; //返回最大值</div>
            </Function>
          </div>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-type {
  display: list-item;
  list-style-type: simp-chinese-informal;
  list-style-position: inside;
}
.questions {
  font-family: serif;
}
h1,
h2,
em {
  font-family: sans-serif;
}
@page {
  size: a4;
  margin: 0.5in;
}
.code {
  font-family: 'Source Code Pro', monospace;
}
span.code {
  margin-right: 1ex;
}
em {
  font-family: initial;
  font-weight: bold;
}
ol {
  padding: 0;
  list-style-position: inside;
}
:deep(li) {
  margin: 1ex 0;
}

h1 {
  text-align: center;
  margin: 0.4em;
  font-size: x-large;
}
.course {
  font-family: initial;
  display: flex;
  justify-content: space-between;
  font-size: larger;
  font-weight: bold;
}
.exam-paper {
  display: grid;
}
.exam-paper > * {
  grid-area: 1/1/2/2;
}
.questions {
  padding: 0 1ex;
}
.page {
  page-break-after: always;
  display: grid;
  grid-template-rows: auto min-content;
  > div {
    height: 95vh;
    border: solid black thin;
  }
  > footer {
    text-align: center;
    font-family: serif;
  }
}
table {
  border-collapse: collapse;
  font-family: initial;
}
.grades {
  width: 75%;
  margin: 1ex;
}
.grader-inspector {
  margin: 1ex;
}
td,
th {
  border: solid black thin;
  min-width: 1em;
  text-align: center;
  padding: 0.5ex 1em;
}
.side {
  float: left;
  display: none;
  grid-template-columns: max-content min-content;
  height: 95vh;
  padding-right: 1ex;
}
.info {
  display: grid;
  grid-template-rows: max-content auto;
  border-right: dotted black thin;
}
.meta td {
  border-top: none;
  border-bottom: dotted black thin;
  border-left: none;
  border-right: none;
  > span {
    display: inline-block;
    width: 100%;
    text-align-last: justify;
  }
  > span.week {
    display: inline-flex;
    justify-content: space-between;
  }
}
.signature {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > span {
    margin-bottom: 2em;
  }
}
.seal {
  writing-mode: vertical-lr;
  text-align: center;
  padding: 0 1ex;
  border-right: dotted black thin;
}
.background {
  display: none;
}
@media print {
  .background {
    display: unset;
  }
  .side {
    display: grid;
  }
}
.indent{
  margin-left: 4ex;
}
</style>
