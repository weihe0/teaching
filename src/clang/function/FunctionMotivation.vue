<template>
    <Slide title="为什么使用函数">
        <p class="code">
            <span>#include&lt;stdio.h&gt;</span><br/>
            <span>#include&lt;math.h&gt;</span><br/>
            <span>int main(){</span><br/>
            <span class="indent-1">double a,b;</span><br/>
            <span class="indent-1">scanf("%lf%lf",&a,&b);</span><br/>
            <span class="first-appearance"><span class="indent-1">double sum = a*a+b*b;</span><br/>
                <span class="indent-1">double c=sqrt(sum);</span><br/></span>
            <span class="indent-1">double x,y;</span><br/>
            <span class="indent-1">scanf("%lf%lf",&x,&y);</span><br/>
            <span class="second-appearance"><span class="indent-1">sum = x*x+y*y;</span><br/>
                <span class="indent-1">double z=sqrt(sum);</span><br/></span>
            <span class="indent-1">return 0;</span><br/>
            <span>}</span>
        </p>
        <ul>
            <li>相似的代码出现了多次</li>
            <li>可以把相似的代码写成<em>函数</em></li>
        </ul>
    </Slide>
</template>

<script setup lang="ts">

import Slide from "../../components/Slide.vue";
</script>

<style scoped>
.first-appearance{
    color: indianred;
}
.second-appearance{
    color: rebeccapurple;
}
</style>
