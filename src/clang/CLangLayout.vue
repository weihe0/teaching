<template>
  <div>
    <nav>
      <ul>
        <li>目录</li>
        <li>
          <router-link to="/clang/fundamental">第1到4章 C语言基础</router-link>
        </li>
        <li>
          <router-link to="/clang/data">第5章 基础数据类型</router-link>
        </li>
        <li>
          <router-link to="/clang/io">第6章 输入输出</router-link>
        </li>
        <li>
          <router-link to="/clang/expression">第7章 运算符与表达式</router-link>
        </li>
        <li>
          <router-link to="/clang/branch">第8章 分支结构</router-link>
        </li>
      </ul>
    </nav>
    <main class="carousel">
      <slot/>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
div{
  display: grid;
  grid-template-columns: 1fr 4fr;
}
nav{
  background-color: wheat;
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
  margin: 1em;
  font-size: 1.5em;
  font-family: sans-serif;
}
.carousel {
}
</style>
