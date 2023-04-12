<template>
<Slide title="return语句">
    <p class="code dim">
        <span>int f(int a, int b) {</span><br/>
        <span class="indent-1 highlight">return 1;</span><br/>
        <span class="indent-1">scanf("%d",&a);</span><br/>
        <span class="indent-1">scanf("%d",&b);</span><br/>
        <span>}</span>
    </p>
    <ul>
        <li>函数执行到return语句直接返回</li>
        <li>return的表达式类型必须匹配或者能强制转换</li>
    </ul>
</Slide>
</template>

<script setup lang="ts">
import Slide from "../../components/Slide.vue";
</script>

<style scoped>
.dim{
    color: gray;
}
.highlight{
    color: black;
}
</style>
