<script setup lang="ts">
import { provide, ref } from 'vue'
import { themeKey, type Theme } from './lesson7.vue'

const theme = ref<Theme>('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// provideでkey指定して、対象のpropsのcontextを提供する。
provide(themeKey, {
  theme,
  toggleTheme,
})
</script>

<template>
  <h2>Theme: {{ theme }}</h2>
  <!-- 子コンポーネントを挿入する。reactのchildren的な -->
  <slot />
</template>
