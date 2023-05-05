<template>
    <Slide title="数组的初始化">
        <div class="execution">
            <div class="code">
                <span>int a[]={0,1,2,3};</span><br/>
                <span>double b[3]={0.1,0.2,0.3};</span><br/>
                <span>char c[4]={'a','b'};</span>
            </div>
            <div class="environment">
                <span>a</span>
                <table class="array">
                    <tr><td>0</td><td>1</td><td>2</td><td>3</td></tr>
                </table>
                <span>b</span>
                <table class="array">
                    <tr><td>0.1</td><td>0.2</td><td>0.3</td></tr>
                </table>
                <span>c</span>
                <table class="array">
                    <tr><td>'a'</td><td>'b'</td><td>0</td><td>0</td></tr>
                </table>
            </div>
        </div>
    </Slide>
</template>

<script setup lang="ts">
import Slide from "@/layouts/Slide.vue";
</script>

<style scoped>
.execution{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}
.code{
    border: solid black 1px;
    font-family: monospace;
}
.environment{
    padding: 1em 0;
    border: solid black 1px;
}
table.array td{
    border: solid black 1px;
    border-collapse: collapse;
    min-width: 1em;
}
table.array{
    border-collapse: collapse;
}

</style>
