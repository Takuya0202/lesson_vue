<script setup lang="ts">
import { reactive, ref } from 'vue';
// useState => ref
// Ref<number> => number型のrefを作成。
const count = ref(0)

// valueでアクセス。
function increment() {
    count.value += 1
}

function decrement() {
    count.value -= 1
}

// 配列、オブジェクトに対してはreactiveを使用する。
const user = reactive({
    name : 'John',
    age : 20,
    email : 'john@example.com',
})

function updateUser() {
    user.name = 'Jane'
    user.age = 21
    user.email = 'jane@example.com'
}

// 分割代入するとリアクティブにならない。
const { name } = user
</script>

<template>
    <!-- template内では、countでアクセス。 -->
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

    <p>User: {{ user.name }} - {{ user.age }} - {{ user.email }}</p>
    <button @click="updateUser">Update User</button>
</template>