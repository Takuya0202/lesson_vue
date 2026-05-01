<script lang="ts" setup>
import { useCounter } from '../../composable/useCounter'

const { count, increment, decrement } = useCounter(10)
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>
