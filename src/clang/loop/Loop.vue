<script setup lang="ts">
import {onMounted, onUnmounted, ref, watch, watchEffect} from "vue";
import ForLoop from "./ForLoop.vue";
import WhileLoop from "./WhileLoop.vue";
import DoWhileLoop from "./DoWhileLoop.vue";
const show=ref(false);

let componentList=[WhileLoop,DoWhileLoop,ForLoop];
const index=ref(0);
const numSlides=componentList.length;
function previous(){
    if(index.value-1>=0){
        index.value--;
    }
}
function next(){
    if(index.value+1<numSlides){
        index.value++;
    }
}

const name = ref("名字");
const names = ["陈海明", "陈嘉炜", "陈雨婷", "冯永康", "高鸿键", "高嘉林", "关劲贤", "官志标",
    "黄鑫", "李灿", "李佳勇", "李文翔", "李文岳", "梁梓健", "林春学", "林家荣", "林凯丰", "林乔方",
    "刘泰延", "龙国宏", "罗凯然", "聂志恒", "冉斌斌", "陕千熙", "沈雁楠", "苏润达", "苏鑫乐", "孙华鑫",
    "谭媚", "谭云鹏", "王宏伟", "王开新", "王意园", "吴媚", "吴沛钢", "伍诗琪", "萧坚裕", "叶浩", "张安",
    "张锦波", "张鹏娟", "张赟", "赵允涛", "郑通叶", "周汝承",
];
const lotteryProcess = (function *(){
    let a= new Uint8Array(64);
    while(true){
        crypto.getRandomValues(a);
        for(let i=0;i<a.length;i++){
            name.value=names[a[i] % names.length];
            yield ;
        }
    }
})();
let id=0;
function startLottery(){
    id=setInterval(()=>{
        lotteryProcess.next();
    }, 100);
}
function stopLottery(){
    clearInterval(id);
    id=0;
}

</script>

<template>
    <nav v-show="show">
        <ul>
            <li>目录</li>
            <li>
                <router-link to="/clang/fundamental">第1到4章 C语言基础</router-link>
            </li>
            <li>
                <router-link to="/clang/data">第5章 基础数据类型</router-link>
            </li>
            <li>
                <router-link to="/clang/io">第6章 输入输出</router-link>
            </li>
            <li>
                <router-link to="/clang/expression">第7章 运算符与表达式</router-link>
            </li>
            <li>
                <router-link to="/clang/condition">第8章 条件判断语句</router-link>
            </li>
            <li>
                <router-link to="/clang/loop">第9章 循环语句</router-link>
            </li>
        </ul>
        <button @click="show=!show">
            <svg width="32px" height="64px" viewBox="0 0 32 64">
                <polyline points="32 0,  0 32, 32 64"/>
            </svg>
        </button>
    </nav>
    <div class="slide-container">
        <button class="unfold" @click="show=!show">
            <svg width="32px" height="64px" viewBox="0 0 32 64">
                <polyline points="0 0, 32 32, 0 64"/>
            </svg>
        </button>
        <main>
            <Component :is="componentList[index]" />
        </main>
        <div class="control">
            <div class="first">
                <button @click="previous">
                    <svg width="64px" height="32px" viewBox="0 0 64 32">
                        <polyline points="0 32, 32 0, 64 32"/>
                    </svg>
                </button>
            </div>
            <div class="second">
                <button @click="next">
                    <svg width="64px" height="32px" viewBox="0 0 64 32">
                        <polyline points="0 0, 32 32, 64 0"/>
                    </svg>
                </button>
                <div class="lottery">
                    <span>{{name}}</span>
                    <button @mouseenter="startLottery"
                            @mouseleave="stopLottery"
                    >摇人</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
nav{
    position: absolute;
    height: 100vh;
    background-color: wheat;
    display: grid;
    grid-template-columns: auto 4em;
}

nav > ul{
    place-self: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
li{
    margin: 1em;
    font-size: 150%;
    font-family: sans-serif;
}
nav > button{
    place-self: center;
}
.slide-container{
    display: grid;
    grid-template-columns: 2em auto 2em;
    grid-gap: 1em;
    background-color: antiquewhite;
    height: 100vh;
    font-size: xx-large;
}
main{
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: scroll;
}

.unfold{
    place-self: center;
}
.control{
    display: grid;
    grid-template-rows: 1fr 1fr;
}
.first{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1em 0;
}
.second{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    font-size: 80%;
}
.lottery{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;
}
.lottery > span{
    font-size: 80%;
    margin-bottom: 0.5em;
}
.lottery > button{
    background-color: skyblue;
    width: 100%;
    border-radius: 8px;
    font-size: 80%;
}
.lottery > button:hover{
    background-color: deepskyblue;
    cursor: grab;
}
button{
    border: none;
    background-color: transparent;
}
svg{
    stroke: black;
    fill: none;
    stroke-width: 4px;
}
svg:hover{
    stroke: blue;
    cursor: pointer;
}
</style>
