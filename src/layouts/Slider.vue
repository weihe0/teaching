<script setup lang="ts">
import { ref } from 'vue'
import type { Component } from 'vue'

const props = defineProps<{ slides: Component[]; lottery: boolean }>()
const i = ref(0)
const out = ref(false)

function prev() {
  if (!out.value && i.value > 0) {
    out.value = true
    setTimeout(() => {
      i.value--
      out.value = false
    }, 1000)
  }
}

function next() {
  if (!out.value && i.value < props.slides.length - 1) {
    out.value = true
    setTimeout(() => {
      i.value++
      out.value = false
    }, 1000)
  }
}

const shown = ref(false)

function show() {
  shown.value = true
}

function hide() {
  shown.value = false
}

const name = ref('名字')
const names = [
  '陈海明',
  '陈嘉炜',
  '陈雨婷',
  '冯永康',
  '高鸿键',
  '高嘉林',
  '关劲贤',
  '官志标',
  '黄鑫',
  '李灿',
  '李佳勇',
  '李文翔',
  '李文岳',
  '梁梓健',
  '林春学',
  '林家荣',
  '林凯丰',
  '林乔方',
  '刘泰延',
  '龙国宏',
  '罗凯然',
  '聂志恒',
  '冉斌斌',
  '陕千熙',
  '沈雁楠',
  '苏润达',
  '苏鑫乐',
  '孙华鑫',
  '谭媚',
  '谭云鹏',
  '王宏伟',
  '王开新',
  '王意园',
  '吴媚',
  '吴沛钢',
  '伍诗琪',
  '萧坚裕',
  '叶浩',
  '张安',
  '张锦波',
  '张鹏娟',
  '张赟',
  '赵允涛',
  '郑通叶',
  '周汝承'
]

function drawStudent() {
  let l = new Uint8Array(1)
  crypto.getRandomValues(l)
  let a = new Uint8Array(l[0])
  crypto.getRandomValues(a)
  for (let i = 0; i < a.length; i++) {
    name.value = names[a[i] % names.length]
  }
}
</script>

<template>
  <nav v-show="shown" class="navigation">
    <div :class="{ contents: true, show: shown }">
      <slot />
    </div>
    <aside class="button-box">
      <button @click="hide">折叠<br />目录</button>
    </aside>
  </nav>
  <main class="slider">
    <aside class="button-box">
      <button @click="show">展开<br />目录</button>
    </aside>
    <component :is="slides[i]" :class="{ fadeout: out }" />
    <aside class="control">
      <button @click="prev">
        <svg width="64px" height="32px" viewBox="0 0 64 32">
          <polyline points="0 32, 32 0, 64 32" />
        </svg>
      </button>
      <button @click="next">
        <svg width="64px" height="32px" viewBox="0 0 64 32">
          <polyline points="0 0, 32 32, 64 0" />
        </svg>
      </button>
      <div v-if="props.lottery" class="lottery">
        <span>{{ name }}</span>
        <button @click="drawStudent">摇人</button>
      </div>
    </aside>
  </main>
</template>

<style scoped>
.slider {
  width: 100vw;
  height: 100vh;
  font-size: xx-large;
  display: grid;
  grid-template-columns: 2em auto 2em;
  grid-gap: 2em;
}
.navigation {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 2;
  background-color: hsla(0, 0%, 0%, 75%);
  display: grid;
  grid-template-columns: min-content 4em;
  font-size: xx-large;
}

.contents {
  width: 12em;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.contents li) {
  margin: 0.5em;
}
.button-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.lottery > button {
  border: none;
  border-radius: 0.5em;
  background-color: dodgerblue;
  font-size: 80%;
}
.button-box > button{
    border: none;
    border-radius: 0.5em;
    background-color: dodgerblue;
    font-size: 80%;
}
button:hover {
  cursor: pointer;
}
.fadeout {
  transition: opacity 1s;
  opacity: 0;
}
.control {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.control > button {
  background-color: transparent;
  border: none;
  margin: 2em 0;
}

.control svg {
    width: 90%;
  stroke: black;
  fill: none;
  stroke-width: 4px;
}

.lottery {
  position: absolute;
  bottom: 1em;
  right: 0;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;
}
.lottery > span {
  font-size: 60%;
  text-align-last: justify;
  margin-bottom: 1em;
}
</style>
