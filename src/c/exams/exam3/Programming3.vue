<script setup lang="ts">
import Function from '@/c/components/Function.vue';
import Block from '@/c/components/Block.vue';
import Underline from '@/c/exams/template/Underline.vue';
</script>

<template>
  <ol>
    <li>
      编写一个函数，参数为整数n，计算1<sup>2</sup>+2<sup>2</sup>+...+n<sup
        >2</sup
      >
    </li>
    <div class="code">
      <Function
        function-name="squared_sum"
        parameters="int n"
        return-type="int"
      >
        <div>int i, n;</div>
        <div>int s=<Underline>0</Underline>; //假设总和为0</div>
        <div>
          for (i=1;i<=<Underline>n</Underline>;<Underline>i++</Underline>)
          //从1到n
        </div>
        <div class="indent">
          s+=<Underline>i*i</Underline>; //i<sup>2</sup>=i&times;i
        </div>
        <div>return <Underline>s</Underline>; //返回总和</div>
      </Function>
    </div>
    <li>
      编写一个函数，传入一个字符指针str和一个字符ch，str指向一个字符串的首个字符。
      如果ch包含在str指向的字符串中，返回1，否则返回0
    </li>
    <div class="code">
      <Function
        function-name="contains"
        parameters="char *str, char ch"
        return-type="int"
      >
        <div>int i;</div>
        <div>
          for (<Underline>i=0</Underline>; str[i]<Underline>!='\0'</Underline>;
          <Underline>i++</Underline>) //检查字符串的每个字符
        </div>
        <Block>
          <div>
            if (str[i]==<Underline>ch</Underline>) //如果发现某个字符等于ch
          </div>
          <div class="indent">return <Underline>1</Underline>; //那么返回1</div>
        </Block>
        <div>return 0; //没找到ch，返回0</div>
      </Function>
    </div>
  </ol>
</template>

<style scoped></style>
