<script setup lang="ts">
import { useFetch } from '../../composable/useFetch'

const { data, error, loading } = useFetch<{ name: string }[]>(
  'https://jsonplaceholder.typicode.com/users'
)
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <ul v-else>
    <li v-for="user in data" :key="user.name">{{ user.name }}</li>
  </ul>
</template>
