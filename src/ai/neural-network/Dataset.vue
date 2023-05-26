<script setup lang='ts'>

import Slide from '@/layouts/Slide.vue'
</script>

<template>
<Slide title='神经网络的题库'>
  <table>
    <thead>
    <tr>
      <th>任务</th><th>问题</th><th>答案</th>
    </tr>
    </thead>
    <tbody>
    <tr><td>人脸识别</td><td>人脸照片</td><td>名字</td></tr>
    <tr><td>字符识别</td><td>字符照片</td><td>字符</td></tr>
    <tr><td>语音识别</td><td>语音</td><td>文字</td></tr>
    <tr><td>智能问答</td><td>提问</td><td>回答</td></tr>
    <tr><td>智能绘画</td><td>文字描述</td><td>画作</td></tr>
    <tr><td>智能写作</td><td>写作要求</td><td>文章</td></tr>
    </tbody>
  </table>
</Slide>
</template>

<style scoped>
table{
  border-collapse: collapse;
}
tr{
  border-top: solid black 1px;
  border-bottom: solid black 1px;
}
td{
  padding: 0 1em;
}
</style>
