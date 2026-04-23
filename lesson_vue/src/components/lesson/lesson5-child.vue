<script setup lang="ts">
type User = {
  name: string
  role: string
}

const user: User = {
  name: 'Coco',
  role: 'Frontend Engineer',
}
</script>

<template>
  <section style="border: 1px solid #ddd; border-radius: 8px; padding: 12px">
    <header style="margin-bottom: 8px">
      <!-- 名前付きスロット -->
      <slot name="header">デフォルトヘッダー</slot>
    </header>

    <main style="margin-bottom: 8px">
      <!-- デフォルトスロット -->
      <slot>デフォルト本文</slot>
    </main>

    <footer>
      <!-- スコープドスロット（子 -> 親へデータを渡す） -->
      <slot name="footer" :user="user">デフォルトフッター</slot>
    </footer>
  </section>
</template>
