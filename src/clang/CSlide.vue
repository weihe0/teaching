<template>
  <section>
    <h1>{{ props.title }}</h1>
    <div>
      <slot/>
    </div>
    <aside>
      <em>{{ name }}</em>
      <button @click="choose">摇人</button>
    </aside>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  background-color: antiquewhite;
  display: grid;
  grid-template-rows: 4em auto 2em;
  font-size: 3em;
}

h1 {
  place-self: center;
}

div {
  place-self: center;
  margin: 2em;
}

aside {
  place-self: center;
}

button {
  font-size: 1em;
}
</style>

<script setup lang="ts">
const props = defineProps<{ title: String }>();
import {ref} from "vue";

const name = ref("名字");
const names = ["陈海明",
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


function choose() {
  const array = new Uint8Array(10);
  crypto.getRandomValues(array);
  name.value = names[array[9] % names.length];
}
</script>

