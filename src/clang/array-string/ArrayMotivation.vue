<template>
<Slide title="为什么使用数组">
    <div class="full-width">
        <div class="code-column" v-html="variables">
        </div>
        <div class="code-column">
            <span>int a[{{n}}];</span>
        </div>
    </div>
</Slide>
</template>

<script setup lang="ts">
import Slide from "../../components/Slide.vue";
import {onMounted, onUnmounted, ref} from "vue";
const variables=ref("<span>int a0;</span><br/>")
const n=ref(1);
let id:number
onMounted(()=>{
    const animation=(function *(){
        while(true){
            variables.value="<span>int a0;</span><br/>"
            n.value=1;
            yield
            for (let num=2;num<=10;num++){
                variables.value += `<span>int a${n.value};</span><br/>`
                n.value=num
                yield
            }
        }
    })()
    id=setInterval(()=>{
        animation.next()
    },1000)
})
onUnmounted(()=>{clearInterval(id)})
</script>

<style scoped>
.full-width{
    width: 100%;
    display: flex;
}
.code-column{
    padding: 1em;
    font-family: monospace;
    border: solid black 1px;
    margin: 1em;
}

</style>
