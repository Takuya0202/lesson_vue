<script setup lang="ts">
import Lesson53Child from './lesson5-3-child.vue'

type User = {
  id: number
  name: string
  email: string
  isActive: boolean
}

const users: User[] = [
  { id: 1, name: 'Coco', email: 'coco@example.com', isActive: true },
  { id: 2, name: 'Mina', email: 'mina@example.com', isActive: false },
]
</script>

<template>
  <Lesson53Child :users="users">
    <template #row="{ user, index }">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        "
      >
        <div>
          <p style="margin: 0; font-weight: 700">{{ index + 1 }}. {{ user.name }}</p>
          <p style="margin: 0; color: #666">{{ user.email }}</p>
        </div>

        <div style="display: flex; align-items: center; gap: 8px">
          <span
            :style="{
              padding: '2px 8px',
              borderRadius: '999px',
              backgroundColor: user.isActive ? '#dcfce7' : '#fee2e2',
              color: user.isActive ? '#166534' : '#991b1b',
            }"
          >
            {{ user.isActive ? '有効' : '停止中' }}
          </span>
          <button type="button">詳細</button>
        </div>
      </div>
    </template>

    <template #empty>
      <p>検索条件に一致するユーザーがいません</p>
    </template>
  </Lesson53Child>
</template>
