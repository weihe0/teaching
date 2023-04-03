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
    width: 100%;
    display: grid;
    grid-template-rows: 4em auto;
    font-size: 200%;
}
h1{
    place-self: center;
}
div{
    place-content: center;
    margin: 2em;
}
</style>

<script setup lang="ts">
const props=defineProps<{title:String}>();
</script>

