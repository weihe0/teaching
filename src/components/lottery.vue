<template>
<div class="slide">
  <em>{{name}}</em>
  <button @click="choose">摇人</button>
</div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const name=ref("名字");
const names=["陈海明",
  "陈嘉炜",
  "陈雨婷",
  "冯永康",
  "高鸿键",
  "高嘉林",
  "关劲贤",
  "官志标",
  "黄鑫",
  "李灿",
  "李佳勇",
  "李文翔",
  "李文岳",
  "梁梓健",
  "林春学",
  "林家荣",
  "林凯丰",
  "林乔方",
  "刘泰延",
  "龙国宏",
  "罗凯然",
  "聂志恒",
  "冉斌斌",
  "陕千熙",
  "沈雁楠",
  "苏润达",
  "苏鑫乐",
  "孙华鑫",
  "谭媚",
  "谭云鹏",
  "王宏伟",
  "王开新",
  "王意园",
  "吴媚",
  "吴沛钢",
  "伍诗琪",
  "萧坚裕",
  "叶浩",
  "张安",
  "张锦波",
  "张鹏娟",
  "张赟",
  "赵允涛",
  "郑通叶",
  "周汝承",
];
import random from 'random';

function choose(){
  name.value=names[random.int(0, names.length-1)];
}
</script>

<style scoped>
button{
  font-size: 2em;
  margin: 1em;
}
em{
  font-size: 2em;
}
</style>
