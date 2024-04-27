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
      {{ props.returnType }} {{ props.functionName }}({{ props.parameters }})
    </div>
    <Block>
      <slot />
    </Block>
  </div>
</template>

<style scoped></style>
