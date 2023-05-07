<script setup lang="tsx">
import CheckList from '@/components/CheckList.vue'
const props = defineProps<{
  count: number
  week: number
  weekday: number
  classNumber: number
  topic: string
  keynote: string
  difficulty: string
}>()
function sinicizeNumber(n: number) {
  n = Math.round(n)
  const sinoDigit = '零一二三四五六七八九十'
  if (n >= 0 && n <= 10) {
    return sinoDigit[n]
  } else if (n < 20) {
    return '十' + sinoDigit[n - 10]
  } else {
    throw new RangeError('只支持20以内的数')
  }
}
const sinicizedCount = sinicizeNumber(props.count)
const sinicizedWeekday = sinicizeNumber(props.weekday)
</script>

<template>
  <div class="title">
    <h1>第{{ sinicizedCount }}次课的整体教学安排</h1>
  </div>
  <div class="plan">
    <div class="time">
      <div class="head">授课时间</div>
      <div>
        第{{ props.week }}周周{{ sinicizedWeekday }}第{{ props.classNumber }}-{{
          props.classNumber + 1
        }}节
      </div>
      <div class="head">课时安排</div>
      <div>2</div>
    </div>
    <div>
      <span class="head">授课题目：</span><br />
      <span>{{ props.topic }}</span>
    </div>
    <div class="body">
      <span class="head">教学内容：</span><br />
      <span class="head">基本内容：</span><br />
      <slot name="body"></slot>
      <span class="head">重点：</span><span>{{ props.keynote }}</span
      ><br />
      <span class="head">难点：</span><span>{{ props.difficulty }}</span
      ><br />
    </div>
    <div>
      <span class="head">讨论、思考题、作业：</span><br />
      <slot name="question"></slot>
    </div>
    <div>
      <span class="head">实施情况及分析</span><br />
      <slot name="result"></slot>
    </div>
    <div>
      <span class="head">教学过程设计： </span
      >复习10分钟，授新课40分钟，安排讨论10分钟，布置作业20分钟
    </div>
    <div>
      <span class="head">授课类型： </span
      ><CheckList :items="['理论课', '讨论课', '实验课', '练习课', '其它']" :checkedIndex="0" />
    </div>
    <div>
      <span class="head">教学方式： </span
      ><CheckList :items="['讲授', '讨论', '指导', '其它']" :checkedIndex="0" />
    </div>
    <div>
      <span class="head">教学资源： </span
      ><CheckList :items="['多媒体', '模型', '实物', '挂图', '音像', '其它']" :checkedIndex="0" />
    </div>
  </div>
</template>

<style scoped>
.plan {
  width: 80%;
  margin-bottom: 2em;
  border: solid black 2px;
}
.plan > :not(:first-child) {
  border-top: solid black 1px;
  padding: 4px;
}
.head {
  font-family: '仿宋', serif;
}
.time {
  display: grid;
  grid-template-columns: 2fr 4fr 2fr 1fr;
}
.time > * {
  text-align: center;
  padding: 4px 0;
}
.time > :not(:first-child) {
  border-left: solid black 1px;
}
.check > div {
  width: 6em;
  display: inline-flex;
  justify-content: end;
}
.checkbox {
  display: block;
  margin-left: 4px;
  width: 1em;
  border: solid black 1px;
  text-align: center;
}
.body > ol {
  list-style-type: cjk-ideographic;
}
.plan ol ol {
  padding: 0;
}
</style>
