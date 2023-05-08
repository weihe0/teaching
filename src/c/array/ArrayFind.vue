<script setup lang='ts'>
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import Slide from '@/layouts/Slide.vue'
const array=[10,20,40,30,15]
const length=array.length
const _visit=new Array<boolean>(length).fill(false)
const visit=reactive(_visit)
const index=ref<number|undefined>(undefined)
watch(index,(newIndex,oldIndex)=>{
  if(oldIndex!==undefined && oldIndex>=0 && oldIndex<visit.length){
    visit[oldIndex]=false
  }
  if(newIndex!==undefined && newIndex>=0 && newIndex<visit.length){
    visit[newIndex]=true
  }
})
const anime=(function *(){
  const target_index=3
  while(true){
    index.value=undefined
    yield
    for(index.value=0;index.value<length;index.value++){
      if(index.value===target_index){
        yield
        break
      }else {
        yield
      }
    }
  }
})()
let id:number
onMounted(()=>{
  id=setInterval(()=>{
    anime.next()
  },1000)
})
onUnmounted(()=>{
  clearInterval(id)
})
</script>

<template>
<Slide title='查找数组元素'>
  <p>如果要查找的元素是30，执行过程如下</p>
  <table>
    <tbody>
    <tr><td v-for='(element,i) of array' :class='{visit:visit[i]}'>{{element}}</td> </tr>
    </tbody>
  </table>
  <p>提示：使用break语句</p>
</Slide>
</template>

<style scoped>
.visit{
    background-color: green;
}
table{
    border-collapse: collapse;
}
table td{
    border: solid black 1px;
    padding: 0 1em;
}
</style>
