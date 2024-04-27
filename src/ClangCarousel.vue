<script setup lang="ts">
import '@fontsource-variable/source-code-pro';
import { type ComponentPublicInstance, reactive } from 'vue';
import './global.scss';
import '@/c/components/style.scss';
const slots = defineSlots<{ default(): ComponentPublicInstance[] }>();
const slides = slots.default();
const state = reactive({ i: 0, name: '姓名' });
function next() {
  if (state.i < slides.length - 1) {
    state.i++;
  }
}

function prev() {
  if (state.i > 0) {
    state.i--;
  }
}
const names = [
  '曾梓升',
  '陈锐淳',
  '陈润',
  '陈志翔',
  '陈子祈',
  '陈梓鹏',
  '邓睿希',
  '邓泽明',
  '范凯龙',
  '胡家荣',
  '黄嘉峻',
  '黄锦秋',
  '黄源昌',
  '黄卓威',
  '霍炯燊',
  '赖巧文',
  '黎昊',
  '李程就',
  '李锦建',
  '李宗炎',
  '梁苗',
  '廖志涛',
  '林衍彤',
  '凌炳燊',
  '刘炜楠',
  '骆永珅',
  '时梦钦',
  '温习儒',
  '吴步基',
  '吴浩珲',
  '吴祥',
  '吴宇鹏',
  '肖哲',
  '严扬满',
  '杨浩文',
  '叶春程',
  '叶林佳',
  '余柏坚',
  '张景晨',
  '张煜',
  '张喆瀚',
  '郑坚焕',
  '郑健聪',
  '卓埸初',
];
function shuffle(array: any[]) {
  let randomNumbers = new Uint32Array(array.length - 1);
  crypto.getRandomValues(randomNumbers);
  for (let i = array.length - 1; i > 0; i--) {
    // pick array[j] from array[0..i)
    const j = randomNumbers[i - 1] % i;
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const randomName = (function* () {
  for (;;) {
    shuffle(names);
    for (let name of names) yield name;
  }
})();
function pick() {
  state.name = randomName.next().value;
}
</script>

<template>
  <div class="carousel">
    <component :is="slides[state.i]" />
    <aside>
      <button type="button" title="上一页" class="graph" @click="prev">
        <svg viewBox="0 0 100 50">
          <path d="M 0 50 l 50 -50 l 50 50" />
        </svg>
      </button>
      <button type="button" title="下一页" class="graph" @click="next">
        <svg viewBox="0 0 100 50">
          <path d="M 0 0 l 50 50 l 50 -50" />
        </svg>
      </button>
      <span class="name">{{ state.name }}</span>
      <button type="button" @click="pick" class="pick">
        &#x1f446;&#xfe0f;
      </button>
    </aside>
  </div>
</template>

<style scoped></style>
