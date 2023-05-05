<script setup lang='ts'>
const props=defineProps<{ items: string[], checkedIndex: number }>()
</script>

<template>
  <span class='check'>
    <span v-for='(item, index) of props.items'>
      {{item}}
      <span v-if='index===props.checkedIndex' class='checkbox'>✓</span>
      <span v-else class='checkbox'></span>
    </span>
  </span>
</template>

<style scoped>
.check > span{
    width: 5em;
    display: inline-flex;
    justify-content: end;
}
.checkbox{
    display: block;
    margin-left: 4px;
    width: 1em;
    border: solid black 1px;
    text-align: center;
}
</style>
