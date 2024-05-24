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
import Structure from '@/c/components/Structure.vue'
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
                  ><span>第</span><span>19</span><span>周</span></span
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
          <JudgeItem><span class="code">1+1==2</span></JudgeItem>
          <JudgeItem
            ><span class="code">int a=3;</span>那么<span class="code"
              >a==3</span
            ></JudgeItem
          >
          <JudgeItem
          ><span class="code">double b[10];</span
          ><span class="code">b[0]是b的一个元素</span></JudgeItem
          >

          <JudgeItem
            ><span class="code">2000>3000*7.25</span>的值为<span class="code"
              >0</span
            ></JudgeItem
          >
          <JudgeItem><span class="code">4%2==0</span></JudgeItem>
          <JudgeItem
            ><span class="code">int c; 2=c;</span>可以通过编译</JudgeItem
          >

          <JudgeItem
            ><span class="code">int double=2;</span>可以通过编译</JudgeItem
          >
          <JudgeItem
            ><span class="code">int i=5;</span>那么<span class="code"
              >!(i<1 || i>9)==0</span
            >
          </JudgeItem>
          <JudgeItem><span class="code">3/4==0.75</span></JudgeItem>
          <JudgeItem
          ><span class="code">4/5/6</span>相当于<span class="code"
          >4/(5/6)</span
          >
          </JudgeItem>
        </Judgements>

        <h2 class="question-type">单选题，每题2分，共15题，合计30分</h2>
        <p><em>答案写在每题开头的圆括号内</em></p>
        <ol class="multiple-choices">
          <li>
            <Parentheses /><span class="code"
              >int year=2024; printf("<Underline />", year);</span
            >
          </li>
          <Choices :choices="['%j', '%z', '%d', '%s']"> </Choices>

          <li>
            <Parentheses /><span class="code"><Underline/> a=0;</span>
          </li>
          <Choices :choices="['unsigned int', 'inn', 'lung', 'floating']"> </Choices>

          <li>
            <Parentheses /><span class="code">int d; scanf("%d", <Underline/>);</span>
          </li>
          <Choices :choices="['%d', '/d', '@d', '&d']"> </Choices>

          <li>
            <Parentheses /><span class="code">float <Underline />=0.0f;</span>
          </li>
          <Choices :choices="['if', 'for', 'while', 'offset']"> </Choices>
          <PageBreak />
          <li>
            <Parentheses /><span class="code">double b=</span><Underline />;
          </li>
          <Choices :choices="['1.5U', '1.5R', '1.5', '1.5L']"> </Choices>


          <li>
            <Parentheses /><Underline /><span class="code"
              >huge_number=2147483647;</span
            >
          </li>
          <Choices :choices="['long', 'short', 'char', 'unsigned']"> </Choices>

          <li>
            <Parentheses /><span class="code">float c; c=3/2;</span>那么<span
              class="code"
              >c==</span
            ><Underline />;
          </li>
          <Choices :choices="['0', '1.5', '1', '2']"> </Choices>

          <li>
            <Parentheses /><span class="code">int n=-3;</span
            >那么<Underline />==1
          </li>
          <Choices
            :choices="[
              '-5<=n<=-1',
              'n>=-5 && n<=-1',
              'n>=-5 ** n<=-1',
              'n>=-5 || n<=-1',
            ]"
          >
          </Choices>

          <li><Parentheses /></li>
          <div class="code">
            <div>int item_id=257;</div>
            <div>switch (item_id)</div>
            <Block>
              <div>case 256: puts("iron_shovel"); break;</div>
              <div>case 257: puts("iron_pickaxe"); break;</div>
              <div>case 258: puts("iron_axe"); break;</div>
              <div>default: puts("others"); break;</div>
            </Block>
          </div>
          <div>运行结果是</div>
          <Choices
            :choices="['iron_shovel', 'iron_pickaxe', 'iron_axe', 'others']"
          >
          </Choices>

          <li><Parentheses />下划线填哪个，能输出1到99的整数？</li>
          <div class="code">
            <div>int i;</div>
            <div>for (i=1;<Underline />;i++)</div>
            <SingleStatement>printf("%d ", i);</SingleStatement>
          </div>
          <Choices :choices="['i<=99', 'i<=100', 'i=<101', 'i==102']">
          </Choices>
          <li>
            <Parentheses /><span class="code"
              >int array<Underline />={5,4,3,2,1};</span
            >
          </li>
          <Choices :choices="['(5)', '[5]', '{5}', '<5>']"> </Choices>

          <li>
            <Parentheses /><span class="code"
              >int d={8,4,2,0}; 那么<span class="code">d[2]==</span><Underline
            /></span>
          </li>
          <Choices :choices="['4', '3', '2', '1']"> </Choices>

          <li>
            <Parentheses /><span class="code"
              >char languages[3][5]={ "Java", "C", "C++" };</span
            >
            那么<span class="code">languages</span>包含<Underline />个char
          </li>
          <Choices :choices="['15', '9', '11', '8']"> </Choices>

          <li>
            <Parentheses />执行<span class="code">triple(1)</span
            >，运行结果为<Underline />
          </li>
          <div class="code">
            <div>void triple(int n)</div>
            <Block>
              <div>printf("%d", n+n+n);</div>
            </Block>
          </div>
          <Choices :choices="['1', '3', '6', '9']"> </Choices>
          <li><Parentheses />如下程序的运行结果是<Underline /></li>
          <div class="code">
            <Function function-name="add" parameters="int x" return-type="int">
              return x+1;
            </Function>


            <Function function-name="main" parameters="" return-type="int">
              <PageBreak />
              <div>int y=2;</div>
              <div>printf("y=%d", add(y));</div>
              <div>return 0;</div>
            </Function>
          </div>
          <Choices :choices="['y=3', '3', '2', 'y=2']"> </Choices>
        </ol>
        <h2 class="question-type">填空题，每题2分，共15题，合计30分</h2>
        <p><em>请写最简单的答案，例如不要写1+2，要写成3</em></p>
        <ol>
          <li>
            <span class="code">printf("%s", "ABC");</span
            >的运行结果是<Underline />
          </li>
          <li><span class="code">3/2*1.5==</span><Underline /></li>
          <li><span class="code">4-5%2==</span><Underline /></li>
          <li>
            <span class="code">int j=1; i++;</span>执行后<span class="code"
              >j==</span
            ><Underline />
          </li>
          <li>
            <span class="code"
              >int m=2; !(m&lt;1) && !(m&gt;3)==<Underline
            /></span>
          </li>
          <li>
            <span class="code">int a[][2]=&lbrace;{ 1,3 },{2,4}&rbrace; a[1][1]==</span><Underline />
          </li>
          <li>
            <span class="code">char str[]="QWERT"; str[1]==</span><Underline />
          </li>
          <li>
            <span class="code">char titles[3][4];</span>那么<span class="code"
              >names</span
            >包含<Underline />个char
          </li>
          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <div>int d[]= {1,3,5,7};</div>
            <div>int *pd=d;</div>
            <div>printf("%d", pd[3]);</div>
          </div>
          <li>
            已知half函数定义如下，那么<span class="code"
              >half(5)==<Underline
            /></span>
          </li>
          <div class="code">
            <div>int half(int a)</div>
            <Block>return a/2;</Block>
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
              function-name="inc"
              parameters="x"
              return-type="void"
            >
              *x = *x+1;
            </Function>
            <Function function-name="main" parameters="" return-type="int">
              <div>int y = 3;</div>
              <div>inc(&y);</div>
              <div>printf("%d", y);</div>
            </Function>
            <PageBreak />
          </div>
          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <Structure id="student">
              <div>int id;</div>
              <div>int mark;</div>
            </Structure>
            <div>struct student lisi={ 10, 87 };</div>
            <div>printf("%d", lisi.mark);</div>
          </div>
          <li>下列程序的执行结果为<Underline /></li>
<div class="code">
  <div>struct student s={5, 90};</div>
  <div>struct student *t=&amp;s;</div>
  <div>t->mark=96;</div>
  <div>printf("%d", s.mark);</div>
</div>
          <li>填入正确的表达式，使ph指向h</li>
          <div class="code">
            <div>double h=5.5;</div>
            <div>double *ph=<Underline />;</div>
          </div>
        </ol>
        <h2 class="question-type">编程题，每题10分，共2题，合计20分</h2>
        <ol>
          <li>输出九九乘法表</li>
          <div class="code">
            <div>#include&lt;stdio.h&gt;</div>
            <Function function-name="main" parameters="" return-type="int">
              <div>int i, j;</div>
              <div>
                for (i=1;i<=<Underline />;<Underline />) //从1到9
                <Block>
                  for(j=1; j<=<Underline />;j++) //从1到9
                  <Block>
                    printf("%d*%d=%d ", i, j, <Underline/>); //输出某个乘法
                  </Block>
                  printf("<Underline/>"); //换行
                </Block>
              </div>
              <div>return 0;</div>
            </Function>
          </div>
          <li>
            编写一个函数，传入一个指针a和一个整数n，a指向数组的首个元素，n代表数组的元素个数，返回该数组的最小值。
          </li>
          <div class="code">
            <Function
              function-name="array_min"
              parameters="int *a, int n"
              return-type="int"
            >
              <div>long min=<Underline /> //假设最小值是数组的首个元素</div>
              <div>int i;</div>
              <div>for (i=0;<Underline />;i++) //检查数组的每个元素</div>
              <Block>
                <div>if (a[i]<Underline />) //如果遇到更小的元素</div>
                <SingleStatement
                  >min=<Underline />; //那么更新最小值</SingleStatement
                >
              </Block>
              <div>return <Underline />; //返回最小值</div>
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
