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
        <p><em>答案写在下划线上</em></p>
        <ol class="multiple-choices">
          <li>
            <span class="code"
              >int year=2024; printf("<Underline />", year);</span
            >
          </li>
          <Choices :choices="['%j', '%z', '%d', '%s']"> </Choices>

          <li>
            <span class="code"><Underline/> a=0;</span>
          </li>
          <Choices :choices="['unsigned int', 'inn', 'lung', 'floating']"> </Choices>

          <li>
            <span class="code">int d; scanf("%d", <Underline/>);</span>
          </li>
          <Choices :choices="['%d', '/d', '@d', '&d']"> </Choices>

          <li>
            <span class="code">float <Underline />=0.0f;</span>
          </li>
          <Choices :choices="['if', 'for', 'while', 'offset']"> </Choices>
          <PageBreak />
          <li>
            <span class="code">double b=</span><Underline />;
          </li>
          <Choices :choices="['1.5U', '1.5R', '1.5', '1.5L']"> </Choices>


          <li>
            <Underline /><span class="code"
              >huge_number=2147483647;</span
            >
          </li>
          <Choices :choices="['long', 'short', 'char', 'unsigned']"> </Choices>

          <li>
            <span class="code">float c; c=3/2;</span>那么<span
              class="code"
              >c==</span
            ><Underline />;
          </li>
          <Choices :choices="['0', '1.5', '1', '2']"> </Choices>

          <li>
            <span class="code">int n=-3;</span
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

          <li>下列程序的运行结果是<Underline/></li>
          <div class="code">
            <div>int e=1;</div>
            <div>if (e<1) {</div>
            <div class="indent">printf("floor=0");</div>
            <div>}else if(e<2){</div>
            <div class="indent">printf("floor=1");</div>
            <div>}else{</div>
            <div class="indent">printf("floor>=2");</div>
            }
          </div>
          <Choices
            :choices="['floor=0', 'floor=1', 'floor>=2', '1']"
          >
          </Choices>

          <li>下划线填哪个，输出满足i<sup>2</sup>&le;1000条件的i？</li>
          <div class="code">
            <div>int i;</div>
            <div>for (i=1;<Underline />;i++)</div>
            <SingleStatement>printf("%d ", i);</SingleStatement>
          </div>
          <Choices :choices="['i^2<=1000', 'i**2<=1000', 'i*i<=1000', 'i<=1000']">
          </Choices>
          <li>
            <span class="code"
              >int array<Underline />={5,4,3,2,1};</span
            >
          </li>
          <Choices :choices="['(5)', '[5]', '{5}', '<5>']"> </Choices>

          <li>
            <span class="code"
              >int d={2,3,5,8}; 那么<span class="code">d[1]==</span><Underline
            /></span>
          </li>
          <Choices :choices="['2', '3', '5', '8']"> </Choices>

          <li>
            <span class="code"
              >char books[3][12]={ "Sager_king", "twin_city", "Miserable" };</span
            >
            那么<span class="code">books</span>包含<Underline />个char
          </li>
          <Choices :choices="['36', '28', '31', '29']"> </Choices>

          <li>下列程序的运行结果为<Underline/></li>
          <div class="code">
            <div>int i, s=0;</div>
            <div>for(i=0;i<5;i++)</div>
            <div class="indent">s+=i;</div>
            <div>printf("s=%d", s);</div>
          </div>
          <Choices :choices="['s=10', '10', 's=15', '15']"> </Choices>
          <li>下列程序的运行结果是<Underline /></li>
          <div class="code">
            <Function function-name="multiply" parameters="int x" return-type="int">
              return x*10;
            </Function>


            <Function function-name="main" parameters="" return-type="int">
              <PageBreak />
              <div>int y=2;</div>
              <div>printf("y=%d", multiply(y));</div>
              <div>return 0;</div>
            </Function>
          </div>
          <Choices :choices="['y=20', '20', '2', 'y=2']"> </Choices>
        </ol>
        <h2 class="question-type">填空题，每题2分，共15题，合计30分</h2>
        <p><em>请写最简单的答案，例如不要写1+2，要写成3</em></p>
        <ol>
          <li>
            <span class="code">printf("%s", "DEF");</span
            >的运行结果是<Underline />
          </li>
          <li><span class="code">5/2*5==</span><Underline /></li>
          <li><span class="code">4-3%2==</span><Underline /></li>
          <li>整数类型按照范围从大到小排序：<span class="code"><Underline/>&ge;
          int &ge; short &ge; char</span> </li>
          <li>
            <span class="code"
              >int m=2; !(m&lt;1) || !(m&gt;3)==<Underline
            /></span>
          </li>
          <li>
            <span class="code">int points[][2]=&lbrace;{ 1,3 },{2,4}&rbrace; points[0][1]==</span><Underline />
          </li>
          <li>
            <span class="code">char *str="c language"; *str==</span><Underline />
          </li>
          <li>
            <span class="code">char titles[5][4];</span>那么 <span class="code"
              >titles</span
            >包含<Underline />个char
          </li>
          <li>下列程序的运行结果为<Underline /></li>
          <div class="code">
            <div>void third(int *p){ printf("%d",p[3]); }</div>
            <div>int main(){</div>
            <div class="indent">
              <div>int a[5]={1,2,3,4,5};</div>
              <div>third(a);</div>
              <div>return 0;</div>
            </div>
            }
          </div>
          <li>下列程序的运行结果是<Underline/></li>
          <div class="code">
            <div>s=0;</div>
            <div>while (s<3){</div>
            <div class="indent">s+=1;</div>
            <div>}</div>
            <div>printf("%d", s);</div>
          </div>
          <li>下列程序的运行结果是<Underline/></li>
          <div class="code">
            <div>int t=3;</div>
            <div>if (t%2!=0)</div>
            <div class="indent">puts("odd");</div>
            <div>else</div>
            <div class="indent">puts("even");</div>
          </div>
          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <Function
              function-name="inc"
              parameters="x"
              return-type="void"
            >
              *x = *x+3;
            </Function>
            <Function function-name="main" parameters="" return-type="int">
              <div>int y = 3;</div>
              <div>inc(&y);</div>
              <div>printf("%d", y);</div>
            </Function>
            <PageBreak />
          </div>
          <li>char *s="GDP"; *(s+1)==<Underline/></li>

          <li>填入正确的单词与符号，使<span class="code">s.mark==90</span></li>
<div class="code">
  <Structure id="student">
    <div>int id;</div>
    <div>int mark;</div>
  </Structure>
  <div>struct student s={5, 80};</div>
  <div>struct student *t=<Underline/>;</div>
  <div>t->mark=90;</div>
</div>
          <li>填入正确的单词与符号，使p指向h</li>
          <div class="code">
            <div>double h=5.5;</div>
            <div><Underline/>p=&amp;h;</div>
          </div>
        </ol>
        <h2 class="question-type">编程题，每题10分，共2题，合计20分</h2>
        <ol>
          <li>编写一个函数，传入整数m与n，计算m的n次方</li>
          <div class="code ">
            <div><Underline/> power(int m, int n) {
              //m的n次方会是很大的数，会超过int的范围</div>
            <div class="indent">
              <div>long p=<Underline/>; //m的0次方等于1</div>
              <div>while (n>0){ </div>
              <div class="indent">
                <div>p*=<Underline/>; //p乘上n</div>
                <Underline/>; //已经乘过一个p，n要减1
              </div>
              <div>}</div>
              <div>return <Underline/>; //返回乘方的结果</div>
            </div>
            <div>}</div>
          </div>
          <li>
            编写一个函数，传入指针pa与pb，交换pa与pb指向的变量的值
          </li>
          <div class="code ">
            <div><Underline/> power(int *pa, int *pb) {
              //这个函数不需要返回值</div>
            <div class="indent">
              <div><Underline/> c=*pa; //用c临时存放pa指向的变量的值</div>
              <div>*pa=<Underline/>; //由于pa指向的变量值已保存，所以pa指向的变量可以赋其他值</div>
              <div><Underline/>=<Underline/>; //临时存放的值可以派上用场了</div>
            </div>
            <div>}</div>
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
