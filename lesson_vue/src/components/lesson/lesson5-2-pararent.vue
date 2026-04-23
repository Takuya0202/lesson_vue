<script setup lang="ts">
import Lesson52Child from './lesson5-2-child.vue'
</script>

<template>
  <Lesson52Child>
    <p>デフォスロットのボタン</p>
    <template #button>
      <p>scopedスロットのボタン</p>
    </template>
    <template #button2="{ button }">
      <p>{{ button }}</p>
    </template>
  </Lesson52Child>
</template>
