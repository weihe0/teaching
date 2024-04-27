<script setup lang="ts">
import Function from '@/c/components/Function.vue';
import IfElse from '@/c/components/IfElse.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Slide from '@/Slide.vue';
import { reactive, ref } from 'vue';
const context = reactive([
  { j: 0, x: 0 },
  { j: 0, x: 0 },
]);
function* mainFunction(i: number) {
  context[i].j = 1;
  yield;
  context[i].x = 1;
  context[i].j = 2;
  yield;
  const a = add(i + 1);
  for (let _ of a) yield;
  context[i].j = 3;
  yield;
  context[i].j = 4;
  yield;
  context[i].j = 0;
  yield;
}
function* add(i: number) {
  context[i].j = 1;
  yield;
  context[i].x = 2;
  context[i].j = 2;
  yield;
  context[i].j = 0;
  yield;
}
const execution = (function* () {
  for (;;) {
    const m = mainFunction(0);
    for (let _ of m) yield;
  }
})();
function next() {
  execution.next();
}
</script>

<template>
  <Slide topic="函数调用实例的变量是不同的">
    <div class="execution">
      <div class="code stack">
        <div class="context">
          <Function function-name="main" parameters="void" return-type="int">
            <div :class="{ running: context[0].j === 1 }">int x = 1;</div>
            <div :class="{ running: context[0].j === 2 }">add();</div>
            <div :class="{ running: context[0].j === 3 }">
              printf("x=%d\n", x);
            </div>
            <div :class="{ running: context[0].j === 4 }">return 0;</div>
          </Function>
          <div class="environment">
            <div>x=={{ context[0].x }}</div>
          </div>
        </div>

        <div class="context frame-1" v-show="context[1].j > 0">
          <Function function-name="add" parameters="" return-type="void">
            <div :class="{ running: context[1].j === 1 }">int x = 2;</div>
            <div :class="{ running: context[1].j === 2 }">
              printf("x=%d\n", x);
            </div>
          </Function>
          <div class="environment">
            <div>x=={{ context[1].x }}</div>
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
.frame-1 {
  position: relative;
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
