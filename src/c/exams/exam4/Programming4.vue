<script setup lang="ts">
import Underline from '@/c/exams/template/Underline.vue';
</script>

<template>
  <ol>
    <li>编写一个函数，传入整数m与n，计算m的n次方</li>
    <div class="code">
      <div>
        <Underline>long</Underline> power(int m, int n) {
        //m的n次方会是很大的数，会超过int的范围
      </div>
      <div class="indent">
        <div>long p=<Underline>1</Underline>; //m的0次方等于1</div>
        <div>while (n>0){</div>
        <div class="indent">
          <div>p*=<Underline>n</Underline>; //p乘上n</div>
          <Underline>n--</Underline>; //已经乘过一个p，n要减1
        </div>
        <div>}</div>
        <div>return <Underline>p</Underline>; //返回乘方的结果</div>
      </div>
      <div>}</div>
    </div>
    <li>编写一个函数，传入指针pa与pb，交换pa与pb指向的变量的值</li>
    <div class="code">
      <div>
        <Underline>void</Underline> power(int *pa, int *pb) {
        //这个函数不需要返回值
      </div>
      <div class="indent">
        <div>
          <Underline>int</Underline> c=*pa; //用c临时存放pa指向的变量的值
        </div>
        <div>
          *pa=<Underline>*pb</Underline>;
          //由于pa指向的变量值已保存，所以pa指向的变量可以赋其他值
        </div>
        <div>
          <Underline>*pb</Underline>=<Underline>c</Underline>;
          //临时存放的值可以派上用场了
        </div>
      </div>
      <div>}</div>
    </div>
  </ol>
</template>

<style scoped></style>
