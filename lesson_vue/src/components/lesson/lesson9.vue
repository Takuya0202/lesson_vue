<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../../../stores/counter'

const counterStore = useCounterStore()

// リアクティブな値かつ、分割代入する時にはstoreToRefsを使用する。
const { count, doubled } = storeToRefs(counterStore)

const { increment, decrement } = counterStore
</script>

<template>
  <p>Count: {{ count }}</p>
  <p>Doubled: {{ doubled }}</p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>
