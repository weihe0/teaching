<script setup lang="ts">
import {onMounted, ref, watch, watchEffect} from "vue";
const show=ref(false);
let index=ref(0);
let numSlides=0;
const slideArea=ref<HTMLElement|null>(null);
onMounted(()=>{
    if(slideArea&&slideArea.value&&slideArea.value.children.length){
        numSlides=slideArea.value.children.length;
        const currentSlide=<HTMLElement>slideArea.value.children[index.value];
        currentSlide.style.display="grid";
    }
});
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
watch(index,(i, o)=>{
    if(slideArea&&slideArea.value&&slideArea.value.children.length){
        const oldSlide=<HTMLElement>slideArea.value.children[o];
        oldSlide.style.display="none";
        const newSlide=<HTMLElement>slideArea.value.children[i];
        newSlide.style.display="grid";
    }
})
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
        <main ref="slideArea">
            <slot/>
        </main>
        <div class="control">
            <button @click="previous">
                <svg width="64px" height="32px" viewBox="0 0 64 32">
                    <polyline points="0 32, 32 0, 64 32"/>
                </svg>
            </button>
            <button @click="next">
                <svg width="64px" height="32px" viewBox="0 0 64 32">
                    <polyline points="0 0, 32 32, 64 0"/>
                </svg>
            </button>
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
    background-color: antiquewhite;
    height: 100vh;
    font-size: xxx-large;
}
main{
    padding: 1em 0;
    max-height: 100vh;
    overflow: scroll;
}

.unfold{
    place-self: center;
}
.control{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.control button{
    margin: 4em 0;
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
