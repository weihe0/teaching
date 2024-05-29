<script setup lang="ts">
import '@/global.scss';
import '../components/style.scss';
import Function from '@/c/components/Function.vue';
import Block from '@/c/components/Block.vue';
</script>

<template>
  <h1>俄罗斯方块</h1>
  <section>
    <ul>
      <li>提交程序与<em>十秒左右的运行录像</em></li>
      <li>实名提交</li>
      <li>一人一份，不得代交</li>
      <li>
        <em
          >抄袭得零分。老师已经浏览过几个编程网站的俄罗斯方块程序，请勿抱有侥幸心理</em
        >
      </li>
    </ul>
  </section>
  <h2>配置软件环境</h2>
  <section>
    <p>
      编写俄罗斯方块的的软件环境已配置好，直接在群文件下载Dev-C++.7z，然后解压缩即可。不懂解压缩的请自行搜索网络教程。
      <em>请使用老师配好的Dev-C++版本，使用其他版本会出错</em>。
      解压缩后，里面有两个名为devcpp的文件，其中一个类型为应用程序，另一个为 ICO
      文件。运行<em>应用程序</em>devcpp， 才能看到编辑界面。
    </p>
    <p>
      程序项目模板在群文件下载，名称为Tetris.zip。 也可以点击<a
        href="https://www.gitee.com/hewei99/tetris"
        target="_blank"
        >这里</a
      >获得最新的程序。
      解压Tetris.zip到某个目录里，接着运行devcpp，然后将Tetris.dev<em>拖进</em>devcpp的窗口里，就能打开这个项目了。
      补全项目里的game.cpp文件，完成俄罗斯方块。<em
        >不要擅自修改其他文件，一定要联系老师协助修改。</em
      >
    </p>
  </section>
  <h2>数据结构</h2>
  <section>
    <div class="code">
      <div>struct box</div>
      <Block>int x, y</Block>
    </div>
    <p>表示某个方格的x与y坐标。</p>
    <p>正在下落的形状用struct box的数组表示，例如</p>
    <div class="code">
      <div>struct box current_shape[4] =</div>
      <div>
        &lbrace;&lbrace;0,-1&rbrace;&comma; &lbrace;0,0&rbrace;&comma;
        &lbrace;0,1&rbrace;&comma; &lbrace;1,1&rbrace;&rbrace;&semi;
      </div>
    </div>
    <p>表示的方块如下</p>
    <table class="shape">
      <tbody>
        <tr>
          <td class="box">0,-1</td>
          <td></td>
        </tr>
        <tr>
          <td class="box">0,0</td>
          <td></td>
        </tr>
        <tr>
          <td class="box">0,1</td>
          <td class="box">1,1</td>
        </tr>
      </tbody>
    </table>
    <p>
      这些坐标都是相对于旋转中心的坐标。加上偏移量dx,dy才能放在游戏的画面内。假如dx=4,dy=1，那么方块的实际位置如下图所示
    </p>
    <figure class="shift">
      <table class="shape">
        <tbody>
          <tr>
            <td class="box">0,-1</td>
            <td></td>
          </tr>
          <tr>
            <td class="box">0,0</td>
            <td></td>
          </tr>
          <tr>
            <td class="box">0,1</td>
            <td class="box">1,1</td>
          </tr>
        </tbody>
      </table>
      <p class="big-text">+</p>
      <table class="big-text">
        <tbody>
          <tr>
            <td>dx</td>
            <td>dy</td>
          </tr>
          <tr>
            <td>4</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      <p class="big-text">=</p>
      <table class="layout">
        <thead>
          <tr>
            <th></th>
            <th v-for="(_, i) in Array(10)">{{ i }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="y">0</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="box"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="y">1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="box"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="y">2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="box"></td>
            <td class="box"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </figure>
    <p>
      所以下落形状的第i个格子的实际位置是<span class="code"
        >x = current_shape[i].x+dx, y = current_shape[i].y+dy</span
      >。
    </p>
    <p>
      向上旋转方块的方法：设x0,y0表示旋转前相对于旋转中心的坐标，x1,y1表示旋转后的坐标。那么x0,y0与x1,y1的关系为
      <span class="code">x1=y0, y1=-x0</span>。示意图如下
    </p>
    <figure class="shift">
      <table class="shape">
        <tbody>
          <tr>
            <td class="box">0,-1</td>
            <td></td>
          </tr>
          <tr>
            <td class="box">0,0</td>
            <td></td>
          </tr>
          <tr>
            <td class="box">0,1</td>
            <td class="box">1,1</td>
          </tr>
        </tbody>
      </table>
      <p class="big-text">&#x21BB;</p>
      <table class="shape">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td class="box">1,-1</td>
          </tr>
          <tr>
            <td class="box">-1,0</td>
            <td class="box">0,0</td>
            <td class="box">1,0</td>
          </tr>
        </tbody>
      </table>
      <p class="big-text">+(dx,dy)</p>
      <p class="big-text">=</p>
      <table class="layout">
        <thead>
          <tr>
            <th></th>
            <th v-for="(_, i) in Array(10)">{{ i }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="y">0</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="box"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="y">1</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="box"></td>
            <td class="box"></td>
            <td class="box"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="y">2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </figure>
    <p>
      <em
        >特别注意：田字形方块不可旋转。所以在旋转前，一定要检查是否为田字形方块。如果是，直接忽略旋转操作。</em
      >
    </p>
    <p>
      所有可能的形状用all_shapes表示，all_shapes[i]表示第i个形状。创建下落的形状时，要把all_shapes[i]复制给current_shape。
    </p>
    <p>
      <span class="code">const int Width = 10, Height = 20;</span
      >中，Width与Height分别表示游戏界面的宽度与高度。
    </p>
    <p>
      游戏内x,y处的方格用二维数组field[x][y]表示，x的范围为0&le;x&lt;Width，y的范围为0&le;y&lt;Height。
      另外<span class="code">numbers[y]</span
      >表示第y横行的方块数量，numbers[y]用于检查该行是否填满。两者的示意图如下
    </p>
    <table class="game-world">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td v-for="(_, i) in Array(10)" class="field-i">
            field[<span class="upright"> {{ i }}</span
            >]
          </td>
        </tr>
        <tr class="memory" v-for="(_, i) in Array(17)">
          <td>height[{{ i }}]</td>
          <td>0</td>
          <td>{{ i }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="memory">
          <td>height[17]</td>
          <td>1</td>
          <td>17</td>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="memory">
          <td>height[18]</td>
          <td>5</td>
          <td>18</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="memory">
          <td>height[19]</td>
          <td>10</td>
          <td>19</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </section>
  <h2>可用函数</h2>
  <p>game.cpp内可以使用如下函数</p>
  <p>
    set_size(int
    size)，将方块的边长设置为size，只在prepare()函数里调用才生效，<em
      >在其他函数内调用无效</em
    >
  </p>
  <p>
    draw_shape(struct box *shape, int dx, int dy)，绘制某个形状，shape指向struct
    box的数组， 而struct
    box用于记录相对于旋转中心的坐标，实际坐标还要加上(dx,dy)。
  </p>
  <p>
    erase_shape：抹掉(dx,dy)处的形状。<em
      >移动某个形状时，一定要先用erase_shape抹掉，再用draw_shape绘制，
      否则有拖影</em
    >
  </p>
  <figure class="movement">
    <table class="layout">
      <thead>
        <tr>
          <th></th>
          <th v-for="(_, i) in Array(10)">{{ i }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="y">0</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="box"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="y">1</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="box"></td>
          <td class="box"></td>
          <td class="box"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="y">2</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="box"></td>
          <td class="box"></td>
          <td class="box"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>
    <figcaption>没有用erase_shape抹掉之前的形状，导致出现拖影</figcaption>
    <table class="layout">
      <thead>
        <tr>
          <th></th>
          <th v-for="(_, i) in Array(10)">{{ i }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="y">0</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="box"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="y">1</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="box"></td>
          <td class="box"></td>
          <td class="box"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="y">2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>
    <figcaption>用erase_shape抹掉之前的形状</figcaption>
  </figure>
  <p>draw_box(x,y)：在(x,y)处绘制方块</p>
  <p>erase_box(x,y)：在(x,y)处绘制方块</p>
  <p>clear_all：清除整个游戏画面</p>
  <p>
    <em
      >特别注意：调用draw_shape, erase_shape, draw_box, erase_box,
      clear_all函数前，一定要调用begin_draw()，
      之后一定要调用end_draw()，否则出错！</em
    >
  </p>
  <div>
    <div class="code">
      <div>
        begin_draw(); //调用各种绘制函数前一定要调用begin_draw，否则出错
      </div>
      <div>for(int x=0;x&lt;Width;x++){</div>
      <div class="indent">draw_box(x,0);</div>
      <div>draw_shape(current_shape, 4, 1);</div>
      <div>
        end_draw(); //调用各种绘制函数后一定要调用end_draw，否则看不到画面
      </div>
    </div>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
table.shape td.box {
  border: solid black thin;
  width: 4em;
  height: 4em;
  text-align: center;
}
figure.shift {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}
table.game-world td {
  width: 3em;
  height: 3em;
  text-align: center;
}
figure.shift .big-text {
  font-size: x-large;
}
tr.memory td:nth-child(2),
tr.memory td:nth-child(n + 4) {
  border: solid black thin;
}
table.layout td {
  border: dashed gray thin;
  width: 2em;
  height: 2em;
}
table.layout td.box {
  background: black;
}
table.layout td.y {
  border: unset;
}
td.field-i {
  writing-mode: vertical-lr;
  height: 5em !important;
}
span.upright {
  text-orientation: upright;
}
.movement {
  display: grid;
  grid-auto-flow: column;
  grid-template: auto auto/auto auto;
  place-items: center;
  justify-items: center;
}
</style>
