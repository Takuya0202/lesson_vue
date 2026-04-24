<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

type User = {
  id: number
  name: string
  email: string
}

// 3秒後にレスポンスする mock API
function fetchUsersMock(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Coco', email: 'coco@example.com' },
        { id: 2, name: 'Mina', email: 'mina@example.com' },
        { id: 3, name: 'Sora', email: 'sora@example.com' },
      ])
    }, 3000)
  })
}

const users = ref<User[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

let isUnmounted = false

onMounted(async () => {
  loading.value = true
  error.value = null

  try {
    const data = await fetchUsersMock()

    // 取得完了前にアンマウントされていたら反映しない
    if (isUnmounted) return
    users.value = data
  } catch (e) {
    if (isUnmounted) return
    error.value = e instanceof Error ? e.message : '取得に失敗しました'
  } finally {
    if (isUnmounted) return
    loading.value = false
  }
})

onUnmounted(() => {
  isUnmounted = true
})
</script>

<template>
  <section style="padding: 12px; border: 1px solid #ddd; border-radius: 8px">
    <h2 style="margin-top: 0">onMounted + Mock Fetch</h2>

    <p v-if="loading">読み込み中...（3秒待機）</p>
    <p v-else-if="error" style="color: #b91c1c">エラー: {{ error }}</p>

    <ul v-else style="padding-left: 20px">
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
    </ul>
  </section>
</template>
