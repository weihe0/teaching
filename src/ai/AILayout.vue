<template>
  <div>
    <nav>
      <ul>
        <li>目录</li>
        <li>项目二 智能机器人与智能制造</li>
        <li>项目三 无人机</li>
        <li>项目四 大数据与人工智能</li>
        <li>项目五 智能家居</li>
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
