<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'

const firstName = ref('太郎')
const lastName = ref('山田')

// computed: 姓名を結合
// 
const fullName = computed(() => `${lastName.value} ${firstName.value}`)

// watch: firstName が変わったときだけ反応
// 第一引数に監視対象を配置する。
watch(firstName, (newVal, oldVal) => {
  console.log(`名前変更: ${oldVal} → ${newVal}`)
})

// watchEffect: 使われているすべての ref を自動追跡
watchEffect(() => {
  console.log('フルネーム:', fullName.value)
})

const users = ref([
    {
        id : 1,
        name : '山田太郎',
        age : 20,
    },
    {
        id : 2,
        name : '山田花子',
        age : 21,
    },
    {
        id : 3,
        name : '山田次郎',
        age : 22,
    },
])

const oddUsers = computed(() => users.value.filter(user => user.id % 2 === 1))
</script>

<template>
  <div>
    <input v-model="lastName" placeholder="姓" />
    <input v-model="firstName" placeholder="名" />
    <p>フルネーム: {{ fullName }}</p>
  </div>

  <div>
    <ul>
        <li v-for="user in oddUsers" :key="user.id">{{ user.name }} - {{ user.age }}</li>
    </ul>
  </div>
</template>