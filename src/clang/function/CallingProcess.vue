<template>
<Slide title="函数调用过程">
<div class="process">
    <div style="width: 50%">
    <img src="/src/assets/call-process.svg"  alt="调用过程" />
    </div>
    <p>每次函数调用都会产生一个新的函数<em>实例</em>，每个实例拥有<em>自己的</em>变量和参数</p>
</div>
</Slide>
</template>

<script setup lang="ts">

import Slide from "../../components/Slide.vue";
</script>

<style scoped>
.process{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
