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
    display: grid;
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
    align-self: start;
    justify-self: center;
}
</style>
