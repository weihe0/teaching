<script setup lang="ts">
import Function from '@/c/components/Function.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Slide from '@/Slide.vue';
import { reactive, ref } from 'vue';

const main = reactive({ j: 0, x: 0, y: 0, max: 0 });
const max2 = reactive({ j: 0, a: 0, b: 0, ret: 0 });
function* max2Function() {
  max2.j = 1;
  yield;
  if (max2.a > max2.b) {
    max2.j = 2;
    yield;
    max2.ret = max2.a;
    max2.j = 0;
    return;
  } else {
    max2.j = 3;
    yield;
    max2.j = 4;
    yield;
    max2.ret = max2.b;
    max2.j = 0;
    return;
  }
}
function* mainFunction() {
  let r = new Uint8Array(2);
  crypto.getRandomValues(r);
  main.x = r[0] % 100;
  main.y = r[1] % 100;
  main.j = 1;
  yield;
  main.j = 2;
  yield;
  main.x = 2;
  main.j = 3;
  yield;
  main.y = 3;

  main.j = 4;
  yield;
  max2.a = main.x;
  max2.b = main.y;
  const m = max2Function();
  for (let _ of m) yield;
  main.max = max2.ret;
  yield;

  main.j = 5;
  yield;
  main.j = 6;
  yield;
  main.j = 0;
  yield;
}

const execution = (function* () {
  for (;;) {
    const m = mainFunction();
    for (let _ of m) yield;
  }
})();
function next() {
  execution.next();
}
</script>

<template>
  <Slide topic="函数调用的执行过程">
    <div class="execution">
      <div class="code stack">
        <div class="context">
          <Function function-name="main" parameters="void" return-type="int">
            <div :class="{ running: main.j === 1 }">int x, y;</div>
            <div :class="{ running: main.j === 2 }">
              printf("请输入整数1："); scanf("%d", &x);
            </div>
            <div :class="{ running: main.j === 3 }">
              printf("请输入整数2："); scanf("%d", &y);
            </div>
            <div :class="{ running: main.j === 4 }">int max = max2(x, y);</div>
            <div :class="{ running: main.j === 5 }">
              printf("最大值=%d\n", max);
            </div>
            <div :class="{ running: main.j === 6 }">return 0;</div>
          </Function>
          <div class="environment">
            <div>x=={{ main.x }}</div>
            <div>y=={{ main.y }}</div>
            <div v-show="main.j > 4">max=={{ main.max }}</div>
          </div>
        </div>

        <div class="context" v-show="max2.j > 0">
          <Function
            function-name="max2"
            parameters="int a, int b"
            return-type="int"
          >
            <div :class="{ running: max2.j === 1 }">if (a &lt; b)</div>
            <SingleStatement :class="{ running: max2.j === 2 }"
              >return a;</SingleStatement
            >
            <div :class="{ running: max2.j === 3 }">else</div>
            <SingleStatement :class="{ running: max2.j === 4 }"
              >return b;</SingleStatement
            >
          </Function>
          <div class="environment">
            <div>a=={{ max2.a }}</div>
            <div>b=={{ max2.b }}</div>
          </div>
        </div>
      </div>
      <button class="next-button" type="button" title="下一步" @click="next">
        下一步
      </button>
    </div>
  </Slide>
</template>

<style scoped>
.execution {
  display: grid;
  grid-template-columns: auto auto;
  gap: 1em;
}
.stack {
  display: grid;
}
.stack > * {
  grid-area: 1/1/2/2;
  background: wheat;
  place-self: center;
  border: solid black 2px;
}
.context {
  display: grid;
  grid-template-columns: auto auto;
}
.environment {
  border-left: solid black 2px;
  padding: 0 1ex;
  background: burlywood;
}
.next-button {
  font-size: 80%;
  writing-mode: tb;
}
</style>
