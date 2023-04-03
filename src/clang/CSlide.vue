<script setup lang="ts">
const props=defineProps<{title:String}>();
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
    width: 100%;
    height: 100%;
    display: none;
    grid-template-rows: 2em auto;
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
