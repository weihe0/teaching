<template>
    <Slide title="字符串">
        <div class="execution">
            <div class="code">
                <span>char str[]="hello"</span>
                <p>在最后一个字符后添加0号字符'\0'</p>
                <p>str是含有6个字符的数组</p>
            </div>
            <div class="environment">
                <span>str</span>
                <table class="array">
                    <tr><td>'h'</td><td>'e'</td><td>'l'</td><td>'l'</td><td>'o'</td><td>'\0'</td></tr>
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
