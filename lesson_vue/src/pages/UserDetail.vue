<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'

const route = useRoute()
// pathを取得
const userId = computed(() => route.params.id)

watch(
  () => route.params.id,
  (newId) => {
    console.log('ユーザーが切り替わった:', newId)
    // ここで API 呼び出しなど
  }
)
</script>

<template>
  <div>
    <h2>User Detail</h2>
    <p>ユーザー ID: {{ userId }}</p>
    <RouterLink to="/users/1">User 1</RouterLink>
    <RouterLink to="/users/2">User 2</RouterLink>
    <RouterLink to="/">Home に戻る</RouterLink>
  </div>
</template>
