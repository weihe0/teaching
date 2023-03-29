<template>
    <div>
        <nav>
            <ul>
                <li>第1章 复数与复变函数</li>
                <li>第2章 解析函数</li>
                <li>第3章 复变函数的积分</li>
                <li>第4章 级数</li>
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
