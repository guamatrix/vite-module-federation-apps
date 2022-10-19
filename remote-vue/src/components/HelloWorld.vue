<script setup>
import { ref } from 'vue'
import viteLogo from '/vite.svg'
import vueLogo from '../assets/vue.svg'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="stack">
    <h2>Stack: </h2>
    <img :src=viteLogo alt="vite logo">
    <img :src=vueLogo alt="vuew logo">
  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.stack {
  display: flex;
  align-items: center;
}
</style>
