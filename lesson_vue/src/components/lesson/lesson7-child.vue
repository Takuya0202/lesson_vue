<script lang="ts" setup>
import { inject } from 'vue'
import { themeKey } from './lesson7.vue'

const themeContext = inject(themeKey)

// provideでラップされていなかった場合、
if (!themeContext) {
  throw new Error('themeContext is not provided')
}
</script>

<template>
  <button @click="themeContext.toggleTheme">change theme</button>
</template>
