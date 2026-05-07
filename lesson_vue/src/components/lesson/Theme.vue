<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleDark = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-container>
    <v-btn
      :prepend-icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      @click="toggleDark"
    >
      {{ theme.global.current.value.dark ? 'ライトモード' : 'ダークモード' }}
    </v-btn>

    <v-card class="mt-4" color="primary" variant="tonal">
      <v-card-title>テーマカラーのカード</v-card-title>
      <v-card-text>現在のテーマ: {{ theme.global.name.value }}</v-card-text>
    </v-card>
  </v-container>
</template>
