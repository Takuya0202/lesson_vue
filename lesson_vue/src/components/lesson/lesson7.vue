<script setup lang="ts">
import type { InjectionKey, Ref } from 'vue'

export type Theme = 'light' | 'dark'

export type ThemeContext = {
  theme: Ref<Theme>
  toggleTheme: () => void
}

export const themeKey: InjectionKey<ThemeContext> = Symbol('theme')
</script>
