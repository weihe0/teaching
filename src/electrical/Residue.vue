<template>
    <ElectricalLayout>
        <ESlide title="留数">
            <ul>
                <li><span v-katex>a^2+b^2</span></li>
                <li>第一条</li>
                <li>第一条</li>
            </ul>
        </ESlide>
        <ESlide title="定理">
            <ul>
                <li><span v-katex>c^2+d^2</span></li>
                <li>第一条</li>
            </ul>
        </ESlide>
    </ElectricalLayout>
</template>

<script setup lang="ts">
import ElectricalLayout from "./ElectricalLayout.vue";
import ESlide from "./ESlide.vue";
</script>

<style scoped>

</style>
