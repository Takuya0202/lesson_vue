<!-- setupは使わないで、script lang="ts"で型定義する。 -->
<!-- setupはexportができない。 -->
<script lang="ts">
import type { InjectionKey, Ref } from 'vue'

export type Theme = 'light' | 'dark'

export type ThemeContext = {
  // リアクティブなのでRef<>で型定義
  theme: Ref<Theme>
  toggleTheme: () => void
}

// symbolのkeyは一意である必要がある。
export const themeKey: InjectionKey<ThemeContext> = Symbol('theme')
</script>
