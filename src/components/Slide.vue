<template>
  <section>
    <h1>{{props.title}}</h1>
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
section{
  height: 100vh;
  background-color: antiquewhite;
  display: grid;
  grid-template-rows: 4em auto 2em;
  font-size: 3em;
}
h1{
  place-self: center;
}
div{
  place-self: center;
  margin: 2em;
}
</style>

<script setup lang="ts">
const props=defineProps<{title:String}>();
</script>

