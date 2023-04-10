<template>
<Slide title="注意事项">
    <ul>
        <li>语法：<span class="inline-code">类型 数组名[元素个数];</span></li>
        <li>元素个数必须是<em>非负</em>的<em>常量表达式</em></li>
        <li>使用数组的某个元素：<span class="inline-code">数组名[下标]</span></li>
        <li>如果元素个数是N，那么下标范围是0到n-1</li>
        <li>下标超出范围，会<em>通过编译</em>，但运行时会产生<em>不可预料的后果</em></li>
    </ul>
</Slide>
</template>

<script setup lang="ts">
import Slide from "../../components/Slide.vue";
</script>

<style scoped>
.inline-code{
    font-family: monospace;
    border: solid black 1px;
}
</style>
