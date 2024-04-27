<script setup lang="ts">
import Function from '@/c/components/Function.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Slide from '@/Slide.vue';
import { reactive, ref } from 'vue';
import Block from '@/c/components/Block.vue';
const context = reactive([
  { j: 0, n: 4, a: 0, b: 0, ret: 0 },
  { j: 0, n: 0, a: 0, b: 0, ret: 0 },
  { j: 0, n: 0, a: 0, b: 0, ret: 0 },
]);

function* fibonacci(i: number) {
  context[i].a = 0;
  context[i].b = 0;
  context[i].j = 1;
  yield;
  if (context[i].n == 1 || context[i].n == 2) {
    context[i].j = 2;
    yield;
    context[i].j = 0;
    context[i].ret = 1;
    return;
  } else {
    context[i].j = 3;
    yield;

    context[i].j = 4;
    yield;
    context[i + 1].n = context[i].n - 2;
    const f1 = fibonacci(i + 1);
    for (let _ of f1) yield;
    context[i].a = context[i + 1].ret;
    yield;

    context[i].j = 5;
    yield;
    context[i + 1].n = context[i].n - 1;
    const f2 = fibonacci(i + 1);
    for (let _ of f2) yield;
    context[i].b = context[i + 1].ret;
    yield;

    context[i].j = 6;
    yield;
    context[i].j = 0;
    context[i].ret = context[i].a + context[i].b;
    return;
  }
}
const fibGen = (function* () {
  for (;;) {
    context[0].n = 4;
    const f = fibonacci(0);
    for (let _ of f) yield;
  }
})();
function next() {
  fibGen.next();
}
</script>

<template>
  <Slide topic="相同函数的不同实例">
    <div class="execution">
      <div class="code stack">
        <div
          v-for="(_, i) of Array(3)"
          class="context"
          v-show="i === 0 || context[i].j > 0"
        >
          <Function function-name="fibonacci" parameters="n" return-type="int">
            <div :class="{ running: context[i].j === 1 }">
              if (n==1 || n==2)
            </div>
            <SingleStatement :class="{ running: context[i].j === 2 }"
              >return 1;</SingleStatement
            >
            <div :class="{ running: context[i].j === 3 }">else</div>
            <Block>
              <div :class="{ running: context[i].j === 4 }">
                int a=fibonacci(n-2);
              </div>
              <div :class="{ running: context[i].j === 5 }">
                int b=fibonacci(n-1);
              </div>
              <div :class="{ running: context[i].j === 6 }">return a+b;</div>
            </Block>
          </Function>
          <div class="environment">
            <div>n=={{ context[i].n }}</div>
            <div v-show="context[i].j > 4">a=={{ context[i].a }}</div>
            <div v-show="context[i].j > 5">b=={{ context[i].b }}</div>
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
  gap: 3em;
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
.stack > :nth-child(2) {
  position: relative;
  top: 1em;
  left: 1em;
}
.stack > :nth-child(3) {
  position: relative;
  top: 2em;
  left: 2em;
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
