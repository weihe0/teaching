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
          <JudgeItem><span class="code">2+3==5</span></JudgeItem>
          <JudgeItem
            ><span class="code">int a=2;</span>那么<span class="code"
              >a==2</span
            ></JudgeItem
          >
          <JudgeItem><span class="code">int b=3;</span>那么<span class="code">!(b>2) == 0</span> </JudgeItem>
          <JudgeItem
            ><span class="code">(1+1&gt;2) == 0</span>
            </JudgeItem
          >
          <JudgeItem><span class="code">1/2/3 == (1/2)/3</span></JudgeItem>
          <JudgeItem
            ><span class="code">double float=1.0;</span>可以通过编译</JudgeItem
          >
          <JudgeItem
            ><span class="code">double c[5];</span
            ><span class="code">c[6]是c的一个元素</span></JudgeItem
          >
          <JudgeItem
            >C程序从start函数开始运行</JudgeItem
          >
          <JudgeItem
            ><span class="code">int i=5;</span>那么<span class="code"
              >i>=1&&i<=9 == 0</span
            >
          </JudgeItem>
          <JudgeItem><span class="code">4%2 != 0</span></JudgeItem>
        </Judgements>

        <h2 class="question-type">单选题，每题2分，共15题，合计30分</h2>
        <p><em>答案写在每题开头的圆括号内</em></p>
        <ol class="multiple-choices">
          <li>
            <Parentheses /><span class="code"
              >printf("<Underline />", "2024");</span
            >
          </li>
          <Choices :choices="['%s', '%c', '%d', '%f']"> </Choices>

          <li>
            <Parentheses /><span class="code">int n; scanf("%d", <Underline/>);</span>
          </li>

          <Choices :choices="['@n', '&n', '^n', '#n']"> </Choices>

          <li>
            <Parentheses /><span class="code"><Underline/> a=0;</span>
          </li>
          <Choices :choices="['int', 'inn', 'into', 'index']"> </Choices>

          <li>
            <Parentheses /><span class="code">double <Underline />=0.0;</span>
          </li>
          <Choices :choices="['if', 'for', 'while', 'origin']"> </Choices>
          <PageBreak />

          <li>
            <Parentheses /><span class="code">double b=</span><Underline />;
          </li>
          <Choices :choices="['2.5U', '2.5UL', '2.5', '2.5L']"> </Choices>

          <li>
            <Parentheses /><Underline /><span class="code"
              >huge_number=2147483647;</span
            >选择最恰当的选项
          </li>
          <Choices :choices="['long', 'short', 'char', 'signed']"> </Choices>

          <li>
            <Parentheses /><Underline /><span class="code"
          >ch = 'A';</span
          >选择最恰当的选项
          </li>
          <Choices :choices="['long', 'double', 'char', 'float']"> </Choices>

          <li>
            <Parentheses /><Underline /><span class="code"
          >pi=3.1415926535897932384626433;</span
          >选择最恰当的选项
          </li>
          <Choices :choices="['long', 'int', 'double', 'float']"> </Choices>

          <li>
            <Parentheses /><span class="code">int n=-4;</span
            >那么<Underline />==1
          </li>
          <Choices
            :choices="[
              '-4<=n<=-1',
              'n>=-4 && n<=-1',
              'n>=-4 ** n<=-1',
              'n>=-4 || n<=-1',
            ]"
          >
          </Choices>

          <li><Parentheses />下列程序的运行结果是<Underline/></li>
          <div class="code">
            <div>int p=5, q=3*p+2;</div>
            <div>printf("%d", q%3);</div>
          </div>
          <Choices
            :choices="['0', '2', '3', '5']"
          >
          </Choices>

          <li><Parentheses />下列程序的运行结果是<Underline/></li>
          <div class="code">
            <div>int m=20000;</div>
            <div>if (m<=10000) {</div>
            <div class="indent">puts("low");</div>
            <div>} else if (m<=20000) {</div>
            <div class="indent">puts("medium");</div>
            <div>} else {</div>
            <div class="indent">puts("high");</div>
            <div>}</div>
          </div>
          <Choices
            :choices="['low', 'medium', 'high', 'ultra']"
          >
          </Choices>
          <li><Parentheses />填哪个数，使该程序运行结果为even</li>
          <div class="code">
            <div>int n=<Underline/>;</div>
            <div>if (n%2 == 1) {</div>
            <div class="indent">puts("odd");</div>
            <div>}else{</div>
            <div class="indent">puts("even");</div>
            <div>}</div>
          </div>
          <Choices :choices="['4', '1', '3', '5']">
          </Choices>
          <li>
            <Parentheses /><span class="code"
              >int coordinate[2]=<Underline/>;</span
            >
          </li>
          <Choices :choices="['{3,4}', '[3,4]', '(3,4)', '<3,4>']"> </Choices>

          <li>
            <Parentheses /><span class="code"
              >int d={1,4,5,3}; 那么<span class="code">d[3]==</span><Underline
            /></span>
          </li>
          <Choices :choices="['4', '3', '5', '1']"> </Choices>

          <li>
            <Parentheses /><span class="code"
              >char languages[3][10]={ "Chinese", "English", "Japanese" };</span
            >
            那么<span class="code">languages</span>包含<Underline />个char
          </li>
          <Choices :choices="['30', '22', '25', '23']"> </Choices>


        </ol>
        <h2 class="question-type">填空题，每题2分，共15题，合计30分</h2>
        <p><em>请写最简单的答案，例如不要写1+2，要写成3</em></p>
        <ol>
          <li>
            <span class="code">printf("%d", 1+2);</span
            >的运行结果是<Underline />
          </li>
          <li><span class="code">5/2*2==</span><Underline /></li>
          <li><span class="code">10%3+1==</span><Underline /></li>
          <li>表达式 <span class="code">'A'=='B'</span>的值为<Underline/></li>
          <li>strlen("ABCD")==<Underline/></li>
          <li><span class="code">long a[]={6L, 4L, 5L, 9L};</span>那么a包含<Underline/>个元素</li>

          <li>
            <span class="code">char str[]="YEAR"; str[3]==</span><Underline />
          </li>
          <li>
            <span class="code">char titles[3][4];</span>那么<span class="code"
              >titles</span
            >包含<Underline />个char
          </li>
          <li>
            <span class="code">int matrix[2][2]=&lbrace;{ 2,4 },{3,6}&rbrace;; matrix[0][1]==</span><Underline />;
          </li>
          <li><span class="code">triple</span>的定义如下，那么<span class="code">triple(2)==<Underline/></span> </li>
          <div class="code">
            <div>int triple(int n){</div>
              <div class="indent">return 3*n;</div>
            <div>}</div>
          </div>

          <li>下列程序的运行结果为<Underline /></li>
          <div class="code">
            <div>int d[]= {8,9,7,5};</div>
            <div>int *pd=d;</div>
            <div>printf("%d", pd[2]);</div>
          </div>

          <li>下列程序的运行结果为<Underline /></li>
          <div class="code">
            <Function function-name="plus" parameters="int x" return-type="void">
              <div>x=x+2;</div>
            </Function>


            <Function function-name="main" parameters="" return-type="int">
              <PageBreak />
              <div>int n=2;</div>
              <div>plus(n);</div>
              <div>printf("%d", n);</div>
              <div>return 0;</div>
            </Function>
          </div>


          <li>
            已知suffix函数的定义如下，那么<span class="code">suffix(3)</span
            >的调用结果为<Underline />
          </li>
          <div class="code">
            <Function function-name="suffix" parameters="int n" return-type="void">
              <div>switch(n) {</div>
              <div class="indent">
                <div>case 1: printf("1st"); break;</div>
                <div>case 2: printf("2nd"); break;</div>
                <div>case 3: printf("3rd"); break;</div>
                <div>default: printf("%dth", n);</div>
              </div>
            </Function>
          </div>


          <li>下列程序的运行结果为<Underline /></li>
          <div class="code">
            <Structure id="point">
              <div>int x;</div>
              <div>int y;</div>
            </Structure>
            <div>struct point p={ 4, 6 };</div>
            <div>printf("%d", p.x+p.y);</div>
          </div>

          <li>填入正确的表达式，使p指向g</li>
          <div class="code">
            <div>float g=9.8f;</div>
            <div>float *p=<Underline />;</div>
          </div>
        </ol>
        <h2 class="question-type">编程题，每题10分，共2题，合计20分</h2>
        <ol>
          <li>编写一个函数，参数为整数n，计算1<sup>2</sup>+2<sup>2</sup>+...+n<sup>2</sup></li>
          <div class="code">
            <Function function-name="squared_sum" parameters="int n" return-type="int">
              <div>int i, n;</div>
              <div>int s=<Underline/>; //假设总和为0</div>
              <div>for (i=1;i<=<Underline />;<Underline />) //从1到n</div>
              <div class="indent">s+=<Underline/>; //i<sup>2</sup>=i&times;i</div>
              <div>return <Underline/>; //返回总和</div>
            </Function>
          </div>
          <li>
            编写一个函数，传入一个字符指针str和一个字符ch，str指向一个字符串的首个字符。
            如果ch包含在str指向的字符串中，返回1，否则返回0
          </li>
          <div class="code">
            <Function
              function-name="contains"
              parameters="char *str, char ch"
              return-type="int"
            >
              <div>int i;</div>
              <div>for (<Underline/>;str[i]<Underline />;i++) //检查字符串的每个字符</div>
              <Block>
                <div>if (str[i]==<Underline/>) //如果发现某个字符等于ch</div>
                <div class="indent">return <Underline/>; //那么返回1</div>
              </Block>
              <div>return <Underline/>; //没找到ch，返回0</div>
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
