<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// nextとほぼ一緒
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div>
    <h2>About</h2>
    <p>プログラムによる画面遷移のデモ</p>
    <button @click="goHome">Home に戻る</button>
  </div>
</template>
