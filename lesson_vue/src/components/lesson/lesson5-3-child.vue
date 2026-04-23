<script setup lang="ts">
type User = {
  id: number
  name: string
  email: string
  isActive: boolean
}

const props = defineProps<{
  users: User[]
}>()
</script>

<template>
  <ul
    v-if="props.users.length > 0"
    style="display: grid; gap: 8px; padding: 0; list-style: none"
  >
    <li
      v-for="(user, index) in props.users"
      :key="user.id"
      style="border: 1px solid #ddd; border-radius: 8px; padding: 12px"
    >
      <slot name="row" :user="user" :index="index">
        <strong>{{ user.name }}</strong> ({{ user.email }})
      </slot>
    </li>
  </ul>

  <slot v-else name="empty">
    <p>ユーザーがいません</p>
  </slot>
</template>
