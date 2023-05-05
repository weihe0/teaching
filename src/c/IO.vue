<template>
<CLangLayout>
  <CSlide title="scanf运行过程">
    <code>int a=0,b=0; scanf("b=%d,a=%d", &a, &b)</code>
    <p style="color: blue">{{ partial_input }}</p>
    <p style="color: red">{{ partial_format }}</p>
    <p>a=={{ a }},b=={{ b }}</p>
  </CSlide>
</CLangLayout>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
const partial_input = ref("");
const partial_format = ref("");
const a = ref(0);
const b = ref(0);

function* scanf_animation() {
  const input = "b=456,a=123";
  const format = "b=%d,a=%d";
  while (true) {
    partial_input.value = "";
    partial_format.value = "";
    a.value = 0;
    b.value = 0;
    let i = 0, j = 0;
    let v = "a";
    while (i < format.length) {
      if (format[i] === "%") {
        if (/^\d$/.test(input[j])) {
          partial_format.value += format.substring(i, i + 2);
          i += 2;
          while (j < input.length && /^\d$/.test(input[j])) {
            partial_input.value += input[j];
            j++;
            yield;
          }
          if (j < input.length) {
            if (i < format.length && format[i] === input[j]) {
              if (v === "a") {
                a.value = 456;
                v = "b";
              } else {
                b.value = 123;
              }
              partial_format.value += format[i++];
              partial_input.value += input[j++];
              yield;
              yield;
              yield;
            } else {
              break;
            }
          } else if (j === input.length) {
            if (v === "a") {
              a.value = 456;
              v = "b";
            } else {
              b.value = 123;
              yield;
              yield;
              yield;
            }
          }
        } else {
          break;
        }
      } else {
        if (format[i] === input[j]) {
          partial_format.value += format[i];
          partial_input.value += input[j];
          i++;
          j++;
          yield;
        } else {
          break;
        }
      }
    }
  }
}
onMounted(()=>{
  const scanf_anime = scanf_animation();
  setInterval(() => {
    scanf_anime.next();
  }, 1000);
})
</script>

<style scoped>

</style>
