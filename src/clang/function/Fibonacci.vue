<template>
<Slide title="函数调用举例">
<p class="code">
    <span>unsigned f(unsigned n) {</span><br/>
    <span class="indent-1">if(n==0||n==1){</span><br/>
    <span class="indent-2">return 1;</span><br/>
    <span class="indent-1">} else {</span><br/>
    <span class="indent-2">unsigned a=f(n-2);</span><br/>
    <span class="indent-2">unsigned b=f(n-1);</span><br/>
    <span class="indent-2">unsigned b=f(n-1);</span><br/>
    <span class="indent-1">}</span><br/>
    <span>}</span><br/>
    <span>int main() {</span><br/>
    <span class="indent-1">f(3);</span><br/>
    <span class="indent-1">return 0;</span><br/>
    <span>}</span>
</p>
</Slide>
</template>

<script setup lang="ts">

import Slide from "../../components/Slide.vue";
</script>

<style scoped>

</style>
