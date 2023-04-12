<template>
<Slide title="函数定义举例">
    <p class="code">
        <span>double distance(double x0, double y0, double x1, double y1)</span><br/>
        <span>{</span><br/>
        <span class="indent-1">double dx = x1 - x0;</span><br/>
        <span class="indent-1">double dy = y1 - y0;</span><br/>
        <span class="indent-1">double sum = dx * dx + dy * dy;</span><br/>
        <span class="indent-1">double d = sqrt(sum);</span><br/>
        <span class="indent-1">return d;</span><br/>
        <span>}</span>
    </p>
</Slide>
</template>

<script setup lang="ts">

import Slide from "../../components/Slide.vue";
</script>

<style scoped>

</style>
