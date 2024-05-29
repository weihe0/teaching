<script setup lang="ts">
import Block from '@/c/components/Block.vue';

const props = defineProps<{
  returnType: string;
  functionName: string;
  parameters: string;
}>();
</script>

<template>
  <div>
    <div>
      {{ props.returnType }} {{ props.functionName }}({{ props.parameters }}){
    </div>
    <div class="indent">
      <slot />
    </div>
    <div>}</div>
  </div>
</template>

<style scoped>
.indent {
  margin-left: 4ex;
}
</style>
