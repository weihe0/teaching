<template>
<section class="slide-container">
<!--  <button>上一张</button>-->
  <div></div>
  <div class="slide-item">
    <h1 class="title">{{props.title}}</h1>
    <div class="body">
      <slot/>
    </div>
  </div>
<!--  <button>下一张</button>-->
  <div></div>
</section>
</template>

<script setup lang="ts">
const props=defineProps<{title:String}>();
console.log(props.title);
</script>

<style scoped>
.slide-container{
  display: grid;
  grid-template-columns: 2em auto 2em;
  font-size: 3em;
  min-height: 100%;
  background-color: antiquewhite;
}
.slide-item{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title{
  margin: 1em;
}
.body{
  margin: 0 1em;
}
</style>
