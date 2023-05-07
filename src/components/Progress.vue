<script setup lang="ts">
import Paper from '@/layouts/Paper.vue'
import Taylor from '@/ee/residue/Taylor.vue'
const props = defineProps<{
  name: string
  category: '理论课'
  grading: '考试' | '考查'
  total_hour: number
  week_hour: number
  classes: string
  count: number
  textbook: string
  publisher: string
  author: string
  start_week: number
  contents: string[]
}>()
</script>

<template>
  <Paper>
    <h1>广东轻工职业技术学院教师授课计划进度表</h1>
    <div>（2022/2023学年度 第2学期）</div>
    <div class="introduction">
      <span><span class="major">工业机器人</span>专业（教研室）</span>
      <span>填表日期：2023年5月5日</span>
    </div>
    <table class="brief">
      <tbody>
        <tr>
          <td>课程名称</td>
          <td>{{ props.name }}</td>
          <td>课程类别</td>
          <td>{{ props.category }}</td>
          <td>考核方式</td>
          <td>{{ props.grading }}</td>
          <td>总学时数</td>
          <td>{{ props.total_hour }}</td>
          <td>周学时数</td>
          <td>{{ props.week_hour }}</td>
          <td>学分</td>
          <td>2</td>
        </tr>
        <tr>
          <td>主讲教师</td>
          <td>何为</td>
          <td>职称</td>
          <td>助教</td>
          <td>授课班级</td>
          <td colspan="3">{{ props.classes }}</td>
          <td>学生人数</td>
          <td colspan="3">{{ props.count }}</td>
        </tr>
        <tr>
          <td>教材名称</td>
          <td colspan="3">{{ props.textbook }}</td>
          <td>出版社</td>
          <td colspan="3">{{ props.publisher }}</td>
          <td>作者</td>
          <td colspan="3">{{ props.author }}</td>
        </tr>
      </tbody>
    </table>
    <table class="body">
      <thead>
        <tr>
          <th>周次</th>
          <th>计划学时</th>
          <th>主要教学内容</th>
          <th>授课类型</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, index) of props.contents">
          <td>{{ props.start_week + index }}</td>
          <td>{{ props.week_hour }}</td>
          <td>{{ c }}</td>
          <td>{{ props.category }}</td>
        </tr>
      </tbody>
    </table>
    <div class="signature">
      <div>教研室主任（签名）：</div>
      <div>学院教学负责人（签名）：</div>
    </div>
  </Paper>
</template>

<style scoped>
h1 {
  margin-bottom: 0;
}
.introduction {
  margin-top: 1em;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.major {
  font-weight: bold;
}
table {
  border-collapse: collapse;
}
td,
th {
  border: solid black 1px;
}
table.brief {
  width: 80%;
}
table.brief td:nth-child(2n-1),
th {
  font-family: '仿宋', sans-serif;
}
table.body {
  margin-top: 2em;
  width: 50%;
}
table.body td:not(:nth-child(3)) {
  text-align: center;
}
table.body td:nth-child(3) {
  padding-left: 1em;
}
div.signature {
  margin-top: 2em;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
