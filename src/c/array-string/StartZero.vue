<template>
<Slide title="为什么下标从0开始？">
    <div class="question">
        <p>一人匀速爬到4楼需要12分钟，他匀速爬到6楼需要多少分钟</p>
        <div>
            <table class="floor">
                <tr><td>6</td><td><span :style="{display:display[5]}">🧑‍🔧</span></td></tr>
                <tr><td>5</td><td><span :style="{display:display[4]}">🧑‍🔧</span></td></tr>
                <tr><td>4</td><td><span :style="{display:display[3]}">🧑‍🔧</span></td></tr>
                <tr><td>3</td><td><span :style="{display:display[2]}">🧑‍🔧</span></td></tr>
                <tr><td>2</td><td><span :style="{display:display[1]}">🧑‍🔧</span></td></tr>
                <tr><td>1</td><td><span :style="{display:display[0]}">🧑‍🔧</span></td></tr>
            </table>
        </div>
        <p>{{time}}分钟</p>
        <p>爬每层楼的时间=12分钟/(4-1)=4分钟，到6楼的时间=4分钟*(6-1)=20分钟</p>
    </div>
</Slide>
</template>

<script setup lang="ts">
import Slide from "@/layouts/Slide.vue";
import {onMounted, onUnmounted, ref} from "vue";
const display=ref(["none","none","none","none","none","none",])
const time=ref(0)
let id:number
onMounted(()=>{
    const animation=(function *(){
        while (true){
            time.value=0
            display.value[5]="none"
            display.value[0]="unset"
            yield
            for(let floor=1;floor<=5;floor++){
                display.value[floor-1]="none"
                display.value[floor]="unset"
                time.value+=4
                yield
            }
        }
    })()
    id=setInterval(()=>{
        animation.next()
    },1000)
})
onUnmounted(()=>{
    clearInterval(id)
})
</script>

<style scoped>
.question{
    display: flex;
    flex-direction: column;
    align-items: center;
}
table.floor{
    border-collapse: collapse;
}
table.floor td:first-child{
    border: none;
}
table.floor td{
    border: solid black 1px;
    min-width: 2em;
    text-align: center;
}
</style>
