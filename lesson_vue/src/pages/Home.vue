<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h2>Home</h2>
    <p>ここがトップページです</p>
    <nav>
      <!-- Link的な -->
      <RouterLink to="/about">About へ</RouterLink>
      |
      <RouterLink to="/users/1">User 1</RouterLink>
      |
      <RouterLink to="/users/2">User 2</RouterLink>
    </nav>
  </div>
</template>
