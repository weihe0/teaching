<script setup lang="ts">
import {onMounted} from "vue";
import renderMathInElement from "katex/contrib/auto-render";

const props=defineProps<{title:String}>();
onMounted(()=>{renderMathInElement(document.body)})
</script>

<template>
    <section>
        <div class="title">
          <h1>{{props.title}}</h1>
        </div>
        <div class="body">
            <slot />
        </div>
    </section>
</template>

<style scoped>
section{
  margin: 1em;
    width: 100%;
    display: grid;
    grid-template-rows: 2em auto;
    grid-gap: 1em;
    overflow: hidden;
}
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid black 1px;
}

.body{
    display: flex;
    justify-content: center;
}
</style>
