<template>
<nav>
  <ul>
    <li><router-link to="/clang/fundamental">第1到4章 C语言基础</router-link></li>
    <li><router-link to="/clang/data">第5章 基础数据类型</router-link></li>
    <li><router-link to="/clang/io">第6章 输入输出</router-link></li>
    <li><router-link to="/clang/expression">第7章 运算符与表达式</router-link></li>
    <li><router-link to="/clang/branch">第8章 分支结构</router-link></li>
<!--    <li><router-link to="/clang/loop"></router-link></li>
    <li><router-link to="/clang/expression"></router-link></li>
    <li><router-link to="/clang/expression"></router-link></li>
    <li><router-link to="/clang/expression"></router-link></li>-->
  </ul>
</nav>
  <slot/>
</template>

<script setup lang="ts">
</script>

<style scoped>
nav{
  display: block;
  width: 32em;
  font-size: 2em;
  background-color: wheat;
}
</style>