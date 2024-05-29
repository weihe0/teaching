<script setup lang="ts">
import { inject } from 'vue';
const answer = inject<boolean>('answer');
</script>

<template>
  <h1>广东轻工职业技术学院</h1>
  <h1>2023-2024学年第2学期期末考试<template v-if="answer">答案</template></h1>
  <div class="course">
    <span>课程名称：C语言程序设计</span><span>考试方式：闭卷</span>
  </div>
  <table class="grades">
    <thead>
      <tr>
        <th class="description">题号</th>
        <th><span class="order"></span></th>
        <th><span class="order"></span></th>
        <th><span class="order"></span></th>
        <th><span class="order"></span></th>
        <th><span class="order"></span></th>
        <th><span class="order"></span></th>
        <th class="description">合计</th>
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
  <table class="graders">
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
</template>

<style scoped lang="scss">
table {
  border-collapse: collapse;
  margin: 1em;
  font-family: sans-serif;
}
.grades {
  width: 75%;
}
td,
th {
  border: solid black thin;
  min-width: 1em;
  text-align: center;
  padding: 0.5ex 1em;
}
h1 {
  font-family: sans-serif;
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
.grades {
  counter-reset: question;
  .order {
    counter-increment: question;
  }
  .order::before {
    content: counter(question, simp-chinese-informal);
  }
}
</style>
