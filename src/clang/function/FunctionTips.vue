<template>
<Slide title="注意事项">
    <ul>
        <li>不能在函数中定义函数</li>
        <li>函数定义必须放在函数调用的<em>前面</em></li>
        <li>如果要把函数定义放在函数调用的后面，或放到其它的C文件，函数调用前必须有<em>函数声明</em></li>
        <li>函数声明的格式：<span class="code">数据类型 函数名(数据类型 参数名0, 数据类型 参数名1, ……);</span> </li>
    </ul>
</Slide>
</template>

<script setup lang="ts">

import Slide from "../../components/Slide.vue";
</script>

<style scoped>

</style>
