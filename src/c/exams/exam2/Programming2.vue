<script setup lang="ts">
import Function from '@/c/components/Function.vue';
import Block from '@/c/components/Block.vue';
import SingleStatement from '@/c/components/SingleStatement.vue';
import Underline from '@/c/exams/template/Underline.vue';
</script>

<template>
  <ol>
    <li>输出九九乘法表</li>
    <div class="code">
      <div>#include&lt;stdio.h&gt;</div>
      <Function function-name="main" parameters="" return-type="int">
        <div>int i, j;</div>
        <div>
          for (i=1;i<=<Underline>9</Underline>;<Underline>i++</Underline>)
          //从1到9
          <Block>
            for(j=1; j<=<Underline>9</Underline>;j++) //从1到9
            <Block>
              printf("%d*%d=%d ", i, j, <Underline>i*j</Underline>);
              //输出某个乘法
            </Block>
            printf("<Underline>\n</Underline>"); //换行
          </Block>
        </div>
        <div>return 0;</div>
      </Function>
    </div>
    <li>
      编写一个函数，传入一个指针a和一个整数n，a指向数组的首个元素，n代表数组的元素个数，返回该数组的最小值。
    </li>
    <div class="code">
      <Function
        function-name="array_min"
        parameters="int *a, int n"
        return-type="int"
      >
        <div>
          long min=<Underline>a[0]</Underline>; //假设最小值是数组的首个元素
        </div>
        <div>int i;</div>
        <div>
          for (i=0;i<Underline>&lt; n</Underline>;i++) //检查数组的每个元素
        </div>
        <Block>
          <div>
            if (a[i]<Underline>&lt; min</Underline>) //如果遇到更小的元素
          </div>
          <SingleStatement
            >min=<Underline>a[i]</Underline>; //那么更新最小值</SingleStatement
          >
        </Block>
        <div>return <Underline>min</Underline>; //返回最小值</div>
      </Function>
    </div>
  </ol>
</template>

<style scoped></style>
