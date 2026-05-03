<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>
          {{ count }}
        </h1>
        <v-btn color="primary" @click="count++">increment</v-btn>

        <v-btn color="secondary" @click="count--" prepend-icon="mdi-minus">decrement</v-btn>

        <v-alert type="info" class="mt-4">vuetify installed!</v-alert>
      </v-container>
    </v-main>
  </v-app>
</template>
