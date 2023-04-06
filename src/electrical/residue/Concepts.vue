<script setup lang="ts">

import Slide from "../../components/Slide.vue";
</script>
<template>
<Slide title="孤立奇点">
    <ul>
        <li>孤立奇点：<span v-katex>f(z)</span>在<span v-katex>z_0</span>不解析，但在
            <span v-katex>0&lt;|z-z_0|&lt;\delta</span>内解析
        </li>
        <li>可去奇点：<span v-katex>f(z)</span>在<span v-katex>z_0</span>的洛朗级数不含<span v-katex>z-z_0</span>的负幂项</li>
        <li></li>
    </ul>
</Slide>
</template>

<style scoped>

</style>
