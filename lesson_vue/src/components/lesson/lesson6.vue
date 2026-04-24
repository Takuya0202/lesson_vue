<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const now = ref('')
let timerId: number | null = null

onMounted(() => {
  // 初回マウント時に開始（React の useEffect(..., []) 相当）
  now.value = new Date().toLocaleTimeString()
  timerId = window.setInterval(() => {
    now.value = new Date().toLocaleTimeString()
  }, 1000)
})

// unmountedでクリーンアップする。開始した処理に対しての破壊
onUnmounted(() => {
  // 破棄時にクリーンアップ
  if (timerId !== null) {
    clearInterval(timerId)
  }
})
</script>

<template>
  <section>
    <h2>Lifecycle Hooks</h2>
    <p>現在時刻: {{ now }}</p>
  </section>
</template>
