<script setup lang="ts">
import Function from '@/c/components/Function.vue';
import Block from '@/c/components/Block.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Underline from '@/c/exams/template/Underline.vue';
</script>

<template>
  <ol>
    <li>编写一个程序，用户输入整数m，计算1+2+...+m</li>
    <div class="code">
      <div>#include&lt;stdio.h&gt;</div>
      <Function function-name="main" parameters="" return-type="int">
        <div>int m;</div>
        <div>printf("m=");</div>
        <div>scanf("%d", <Underline>&m</Underline>); //输入整数m</div>
        <div>int s=0; //s记录总和</div>
        <div>int i;</div>
        <div>
          for
          (<Underline>i=1</Underline>;<Underline>i<=m</Underline>;<Underline>i++</Underline>)
          //i从1开始，递增到m，每次加1
        </div>
        <Block>
          <div>s += <Underline>i</Underline>;</div>
        </Block>
        printf("1+2+...+m=%d\n", s);
      </Function>
    </div>
    <li>
      编写一个函数，传入一个指针p和一个整数n，p指向数组的首个元素，n代表数组的元素个数，返回该数组的最大值。
    </li>
    <div class="code">
      <Function
        function-name="max_value"
        parameters="long *p, int n"
        return-type="long"
      >
        <div>
          long max=<Underline>p[0]</Underline>; //假设最大值是数组的首个元素
        </div>
        <div>int i;</div>
        <div>
          for (i=0;<Underline>i&lt;n</Underline>; i++) //检查数组的每个元素
        </div>
        <Block>
          <div>
            if (p[i]<Underline>&gt;max</Underline>) //如果遇到更大的元素
          </div>
          <SingleStatement
            >max=<Underline>p[i]</Underline>; //那么更新最大值</SingleStatement
          >
        </Block>
        <div>return <Underline>max</Underline>; //返回最大值</div>
      </Function>
    </div>
  </ol>
</template>

<style scoped></style>
