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

      <v-container>
        <h2>基本グリッド</h2>
        <h2>カラム 比は12を全体としたときの比率</h2>
        <!-- 1行に 6:6 で2等分 -->
        <v-row>
          <v-col cols="6">
            <v-sheet color="blue-lighten-3" class="pa-4">左（6カラム）</v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet color="green-lighten-3" class="pa-4">右（6カラム）</v-sheet>
          </v-col>
        </v-row>
        <!-- 1行に 4:4:4 で3等分 -->
        <v-row>
          <v-col cols="4">
            <v-sheet color="red-lighten-3" class="pa-4">1/3</v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet color="orange-lighten-3" class="pa-4">1/3</v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet color="purple-lighten-3" class="pa-4">1/3</v-sheet>
          </v-col>
        </v-row>
        <!-- cols を省略すると均等分割 -->
        <v-row>
          <v-col>
            <v-sheet color="teal-lighten-3" class="pa-4">自動</v-sheet>
          </v-col>
          <v-col>
            <v-sheet color="cyan-lighten-3" class="pa-4">自動</v-sheet>
          </v-col>
          <v-col>
            <v-sheet color="lime-lighten-3" class="pa-4">自動</v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <h2>レスポンシブグリッド</h2>
        <v-row>
          <!-- モバイル: 12カラム（全幅）、md以上: 4カラム（1/3） -->
          <v-col cols="12" md="4">
            <v-sheet color="blue-lighten-3" class="pa-4">カード 1</v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet color="green-lighten-3" class="pa-4">カード 2</v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet color="red-lighten-3" class="pa-4">カード 3</v-sheet>
          </v-col>
        </v-row>
        <!-- サイドバー + メイン -->
        <v-row>
          <v-col cols="12" md="3">
            <v-sheet color="grey-lighten-2" class="pa-4" height="200">サイドバー</v-sheet>
          </v-col>
          <v-col cols="12" md="9">
            <v-sheet color="grey-lighten-4" class="pa-4" height="200">メインコンテンツ</v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <h2>配置制御</h2>
        <!-- justify: 水平方向の配置 -->
        <v-row justify="center">
          <v-col cols="4">
            <v-sheet color="blue-lighten-3" class="pa-4">中央寄せ</v-sheet>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="3">
            <v-sheet color="green-lighten-3" class="pa-4">左</v-sheet>
          </v-col>
          <v-col cols="3">
            <v-sheet color="red-lighten-3" class="pa-4">右</v-sheet>
          </v-col>
        </v-row>
        <!-- align: 垂直方向の配置 -->
        <v-row align="center" style="height: 150px; background: #f5f5f5" justify="center">
          <v-col cols="4">
            <v-sheet color="purple-lighten-3" class="pa-4">上下中央</v-sheet>
          </v-col>
        </v-row>
        <!-- no-gutters: カラム間のギャップを消す -->
        <v-row no-gutters>
          <v-col cols="6">
            <v-sheet color="orange-lighten-3" class="pa-4">ギャップなし左</v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet color="teal-lighten-3" class="pa-4">ギャップなし右</v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <h2>offset と order</h2>
        <!-- offset: 左に空白を空ける -->
        <v-row>
          <v-col cols="4" offset="4">
            <v-sheet color="blue-lighten-3" class="pa-4">offset="4" で中央に配置</v-sheet>
          </v-col>
        </v-row>
        <!-- order: 表示順を変える（レスポンシブ対応可） -->
        <v-row>
          <v-col cols="6" order="2">
            <v-sheet color="red-lighten-3" class="pa-4">コードでは1番目、表示は2番目</v-sheet>
          </v-col>
          <v-col cols="6" order="1">
            <v-sheet color="green-lighten-3" class="pa-4">コードでは2番目、表示は1番目</v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
