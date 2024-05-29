<script setup lang="ts"></script>

<template>
  <aside>
    <table class="meta">
      <tr>
        <td><span>考试时间</span></td>
      </tr>
      <tr>
        <td>
          <div class="week">
            <div>第</div>
            <div>18</div>
            <div>周</div>
          </div>
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
      <span class="hewei">何为</span>
      <span>校卷人签名</span>
      <span class="duliang0">杜亮</span>
      <span>教研室主任</span>
      <span class="duliang1">杜亮</span>
      <span>系主任签名</span>
      <span class="hewei">&nbsp;</span>
    </div>
    <div class="seal">装&cir;订&cir;线&cir;内&cir;请&cir;勿&cir;答&cir;题</div>
  </aside>
</template>

<style scoped lang="scss">
aside {
  float: left;
  display: grid;
  grid-template: min-content auto / auto auto;
  grid-auto-flow: column;
  height: calc(100vh - 2em);
  padding-right: 1em;
}
.meta td {
  border-bottom: dotted black thin;
  padding: 0.5ex 1em;
  span {
    display: inline-block;
    width: 100%;
    text-align-last: justify;
  }
  .week {
    display: flex;
    justify-content: space-between;
  }
}
.signature {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    margin: 0.5ex;
  }
}
.hewei {
  font-family: '方正硬笔楷书简体', cursive;
  font-size: x-large;
  letter-spacing: 0.5ex;
}
.duliang0 {
  font-family: '方正字迹-洪俊硬笔行草简体', cursive;
  text-align: justify;
  letter-spacing: 0.4ex;
  font-size: x-large;
}
.duliang1 {
  font-family: '方正舒体', cursive;
  font-size: x-large;
}
.seal {
  grid-area: 1/2 / span 2/3;
  writing-mode: vertical-lr;
  text-align: center;
  letter-spacing: 1ex;
  padding: 0 1ex;
  border-left: dotted black thin;
  border-right: dotted black thin;
}
@media print {
  aside {
    display: grid;
  }
}
</style>
