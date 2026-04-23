<script setup lang="ts">
import Lesson5Child from './lesson5-child.vue'
</script>

<template>
  <Lesson5Child>
    <!-- 名前付きスロット -->
    <template #header>
      <h2>カスタムヘッダー</h2>
    </template>

    <!-- デフォルトスロット -->
    <p>これは親から渡した本文です。</p>

    <!-- スコープドスロット -->
    <template #footer="{ user }">
      <small>{{ user.name }} / {{ user.role }}</small>
    </template>
  </Lesson5Child>
</template>
