<script setup lang="ts"></script>

<template>
  <div class="office">
    <div class="paper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.office {
  display: flex;
  background-color: whitesmoke;
  justify-content: center;
  min-height: 100vh;
}
.paper {
  margin: 3em 0;
  padding: 3em 0;
  box-shadow: 0 0 6px black;
  width: 50%;
  min-width: 22em;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
