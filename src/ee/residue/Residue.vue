<script setup lang="ts">
import {onMounted, onUnmounted, ref, watch, watchEffect} from "vue";
import Laurant from "./Laurant.vue";
import Taylor from "./Taylor.vue";
import Concepts from "./Concepts.vue";
import Polar from "./Polar.vue";
import Res from "./Res.vue";
const show=ref(false);

let componentList=[Taylor,Laurant,Concepts,Polar,Res];
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
</script>

<template>
  <!--    <nav v-show="show">
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
      </nav>-->
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
    font-size: xxx-large;
}
main{
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 1em;
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
