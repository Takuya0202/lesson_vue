<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Lesson1 from './components/lesson/lesson1.vue'
import Lesson2 from './components/lesson/lesson2.vue'
import Lesson3 from './components/lesson/lesson3.vue'
import Lesson41 from './components/lesson/lesson4-1.vue'
import Lesson4 from './components/lesson/lesson4.vue'
import Lesson42 from './components/lesson/lesson4-2.vue'
import Lesson43 from './components/lesson/lesson4-3.vue'
import Lesson5Pararent from './components/lesson/lesson5-pararent.vue'
import Lesson52Pararent from './components/lesson/lesson5-2-pararent.vue'
import Lesson53Pararent from './components/lesson/lesson5-3-pararent.vue'
import Lesson6 from './components/lesson/lesson6.vue'
import Lesson61 from './components/lesson/lesson6-1.vue'

const count = ref(0)
function handleIncrement(value: number) {
  count.value += value
}
function handleDecrement(value: number) {
  count.value -= value
}

const isOpen = ref(false)
const handleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <Lesson5Pararent />
  <Lesson52Pararent />
  <Lesson53Pararent />
  <Lesson6 />
  <Lesson61 />
</template>
