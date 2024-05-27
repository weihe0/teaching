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
          <JudgeItem>'A'!='B'</JudgeItem>
          <JudgeItem
            ><span class="code">int a=2;</span>那么<span class="code"
              >a==2</span
            ></JudgeItem
          >
          <JudgeItem
            ><span class="code">a+b/2>0</span>相当于<span class="code"
              >(a+(b/2))>0</span
            >
          </JudgeItem>
          <JudgeItem
            ><span class="code">6>4</span>的值为<span class="code"
              >1</span
            ></JudgeItem
          >
          <JudgeItem><span class="code">5/2==2</span></JudgeItem>
          <JudgeItem
            ><span class="code">1+2=3;</span>可以通过编译</JudgeItem
          >
          <JudgeItem
            ><span class="code">double c[5]={1,2,3,4,5};</span
            >那么<span class="code">c[1]==1</span></JudgeItem
          >
          <JudgeItem
            ><span class="code">unsigned u=-1;</span>那么<span class="code"
              >u<0</span
            ></JudgeItem
          >
          <JudgeItem
            ><span class="code">int a,b;</span>那么<span class="code"
              >ab</span>相当于<span class="code">a*b</span>
          </JudgeItem>
          <JudgeItem><span class="code">2/5==0.4</span></JudgeItem>
        </Judgements>

        <h2 class="question-type">单选题，每题2分，共15题，合计30分</h2>
        <p><em>答案写在下划线上</em></p>
        <ol class="multiple-choices">
          <li>
            <span class="code"
              >printf("<Underline />", 2020+4.0);</span
            >
          </li>
          <Choices :choices="['%f', '%a', '%z', '%j']"> </Choices>

          <li>
            <span class="code">int i<Underline />0;</span>
          </li>
          <Choices :choices="['=', '==', '=>', '<=']"> </Choices>

          <li>
            <span class="code">int a; scanf("%d", <Underline/>);</span>
          </li>

          <Choices :choices="['a', '&a', '*a', '^a']"> </Choices>

          <li>
            <span class="code">double <Underline />=0.0;</span>
          </li>
          <Choices :choices="['if', 'for', 'do', 'to']"> </Choices>

          <li>
            <span class="code">float b=</span><Underline />;
          </li>
          <Choices :choices="['2.5f', '2.5g', '2.5h', '2.5i']"> </Choices>

          <PageBreak />
          <li>
            <Underline /><span class="code"
              >big_number=2147483647;</span
            >选择最合适的选项
          </li>
          <Choices :choices="['float', 'long', 'char', 'short']"> </Choices>

          <li><span class="code"><Underline/> ch='1';</span>选择最合适的选项</li>
          <Choices :choices="['long double', 'double', 'char', 'float']"/>

          <li><span class="code"><Underline/> d=3.0f;</span>选择最合适的选项</li>
          <Choices :choices="['float', 'int', 'double', 'long']"/>

          <li>
            <span class="code">(double)3/2==<Underline /></span>
          </li>
          <Choices :choices="['0', '1.5', '1', '2']"> </Choices>

          <li>
            <span class="code">int n=-2;</span
            >那么<Underline />==1
          </li>
          <Choices
            :choices="[
              '-5<=n<=0',
              'n>=-5 && n<=0',
              'n>=-5 ** n<=0',
              'n>=-5 %% n<=0',
            ]"
          >
          </Choices>

          <li>下列程序的运行结果是<underline/></li>
          <div class="code">
            <div>int start(){</div>
            <div class="indent">printf("start "); return 0;</div>
            <div>}</div>
            <div>int main(){</div>
            <div class="indent">printf("main "); return 0;</div>
            <div>}</div>
          </div>
          <Choices
            :choices="['main ', 'start ', 'start main ', 'main start ']"
          >
          </Choices>

          <li>下列程序的运行结果是<underline/></li>
          <div class="code">
            <div>int s=20000;</div>
            <div>if (s<5000){</div>
            <div class="indent">puts("low");</div>
            <div>}else if(s<20000){</div>
            <div class="indent">puts("middle");</div>
            <div>}else{</div>
            <div class="indent">puts("high");</div>
            <div>}</div>
          </div>
          <Choices :choices="['low', 'middle', 'high', 'extra']">
          </Choices>

          <li>下列程序的运行结果是<Underline/></li>
          <div class="code">
            <div>int i;</div>
            <div>for(i=0;i<3;i++)</div>
            <div class="indent"> putchar('a');</div>
          </div>
          <Choices :choices="['a','aa','aaa','aaaa']"/>

          <li>下列程序的运行结果是<Underline/></li>
          <div class="code">
            <div>int m=2;</div>
            <div>switch (m){</div>
            <div class="indent">
              <div>case 0: puts("zero"); break;</div>
              <div>case 1: puts("one"); break;</div>
              <div>case 2: puts("two"); break;</div>
              <div>default: puts("not learned");</div>
            </div>
            <div>}</div>
          </div>
          <Choices :choices="['zero', 'one', 'two', 'not learned']" />


          <li>
            <span class="code"
              >int point[2]=<Underline/>;</span
            >
          </li>
          <Choices :choices="['{1,1}', '[1,1]', '(1,1)', '<1,1>']"> </Choices>

        </ol>
        <PageBreak/>
        <h2 class="question-type">填空题，每题2分，共15题，合计30分</h2>
        <p><em>请写最简单的答案，例如不要写1+2，要写成3</em></p>
        <ol>
          <li>
            <span class="code">printf("%c", '0');</span
            >的运行结果是<Underline />
          </li>
          <li><span class="code">5/2*4==</span><Underline /></li>
          <li><span class="code">10/3-10%3==</span><Underline /></li>
          <li>
            <span class="code">int j=1; j+=2;</span>执行后<span class="code"
              >j==</span
            ><Underline />
          </li>
          <li>
            <span class="code"
              >int m=5; !(m<1 && m>9)==<Underline
            /></span>
          </li>
          <li>
            <span class="code">int a[]={5,4,3,2,1}; a[1]==</span><Underline />
          </li>
          <li>
            <span class="code">char *str="BCD"; *str==</span><Underline />
          </li>
          <li><span class="code">int tetris=&lbrace;{-1,0},{0,0},{1,0},{2,0}&rbrace;;
          tetris[0][1]==<Underline/></span></li>
          <li>
            <span class="code">char d[5][4];</span>那么<span class="code"
              >d</span
            >包含<Underline />个char
          </li>
          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <div>int second(int *p){</div>
            <div class="indent">return p[2];</div>
            <div>}</div>
            <div>int main(){</div>
            <div class="indent">
              <div>int a[4]={0,2,4,8};</div>
              <div>second(a);</div>
              <div>return 0;</div>
            </div>
            <div>}</div>
          </div>
          <li>
            已知one_half函数定义如下，那么<span class="code"
              >one_half(5)==<Underline
            /></span>
          </li>
          <div class="code">
            <div>int one_half(int a)</div>
            <Block>return a+a/2;</Block>
          </div>

          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <Function
              function-name="inc"
              parameters="int *x"
              return-type="void"
            >
              *x = *x+10;
            </Function>
            <Function function-name="main" parameters="" return-type="int">
              <div>int y = 2;</div>
              <div>inc(&y);</div>
              <div>printf("%d", y);</div>
            </Function>

          </div>
          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <Structure id="student">
              <div>int id;</div>
              <div>int mark;</div>
            </Structure>
            <div>struct student s={ 20, 80 };</div>
            <div>printf("%d", s.id);</div>
          </div>

          <PageBreak />
          <li>下列程序的执行结果为<Underline /></li>
          <div class="code">
            <div>struct coordinate{</div>
            <div class="indent">int x;</div>
            <div class="indent">int y;</div>
            <div>};</div>
            <div>struct coordinate p={2,1};</div>
            <div>struct coordinate *q=&amp;p;</div>
            <div>q->y=3;</div>
            <div>printf("(%d,%d)", p.x, p.y);</div>
          </div>
          <li>填入正确的单词，使p指向g</li>
          <div class="code">
            <div>float g=9.8f;</div>
            <div><Underline/> *p=&amp;g;</div>
          </div>
        </ol>
        <h2 class="question-type">编程题，每题10分，共2题，合计20分</h2>
        <ol>
          <li>编写函数prime，传入整数n。如果n是素数，返回1，否则返回0。素数的标准是n&ge;2，
            而且n不能被大于1小于n的整数整除。</li>
          <div class="code">
            <Function function-name="prime" parameters="int n" return-type="int">
              <div>if(<Underline/>) return 0; //如果不满足n&ge;2，直接返回0</div>
              <div>int i;</div>
              <div>for(<Underline/>;<Underline/>;i++){ //逐个检查满足1&lt;i&lt;n的整数i</div>
              <div class="indent">
                <div>if(<Underline/>) return 0; //如果发现n能被某个i整除，直接返回0</div>
              </div>
              <div>return <Underline/>; //通过检查，返回1</div>
            </Function>
          </div>
          <li>
            编写一个函数，传入字符指针str，str指向字符串的首个字符，计算字符串的长度（'\0'不计入长度）。
          </li>
          <div class="code">
            <Function function-name="length" parameters="char *str" return-type="int">
              <div>int i;</div>
              <div>int len=<Underline/>; //len记录字符串长度。检查字符串前，长度为0</div>
              <div>for(<Underline/>;str[i]<Underline/>; i++){ //逐个检查字符串的字符，直到遇到空字符</div>
              <div class="indent"><Underline/> //每检查一个字符，长度都要加1</div>
              <div>return <Underline/>; //返回字符串的长度</div>
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
