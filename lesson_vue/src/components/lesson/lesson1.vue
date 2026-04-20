<script setup lang="ts">
const title = 'Vue 学習中 — 1-1 テンプレート構文'
const isDisabled = true
function handleClick() {
    alert('alert表示')
}
const isShow = true
const items = ['item1', 'item2', 'item3']
const users = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 21 },
    { name: 'Jim', age: 22 },
]
</script>

<template>
    <h1>
        <!-- {{  }} で変数を表示 -->
        {{  title  }}
    </h1>
    <!-- タグの変数埋め込みは : で行う -->
    <button :disabled="isDisabled">
        無効ボタン
    </button>

    <!-- @でイベントハンドラーを指定 -->
    <!-- nuxtの場合、ssrは無効にする必要ない。"use client"的なものはいらない・ -->
    <button @click="handleClick">
        alert表示
    </button>
    
    <!-- if文も使える。 -->
     <p v-if="isShow">
        表示される
     </p>
     <!-- endifがない代わりに、v-ifの直後にないとエラー -->
     <p v-else>
        表示されない
     </p>

     <ul>
        <!-- react,nextのようにmapにはkey属性が必要 -->
        <li v-for="item in items" :key="item">{{ item }}</li>
     </ul>

     <ul>
        <li v-for="user in users" :key="user.name">{{ user.name }} - {{ user.age }}</li>
     </ul>
</template>