<script setup lang="ts">

</script>

<template>
  <aside>
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
</template>

<style scoped lang="scss">
aside {
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
@media print {
  aside{
    display: grid;
  }
}
</style>