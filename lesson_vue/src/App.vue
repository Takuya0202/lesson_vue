<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Lesson1 from './components/lesson/lesson1.vue';
import Lesson2 from './components/lesson/lesson2.vue';
import Lesson3 from './components/lesson/lesson3.vue';
import Lesson41 from './components/lesson/lesson4-1.vue';
import Lesson4 from './components/lesson/lesson4.vue';
import Lesson42 from './components/lesson/lesson4-2.vue';
import Lesson43 from './components/lesson/lesson4-3.vue';

const count = ref(0);
function handleIncrement(value : number) {
  count.value += value;
}
function handleDecrement(value : number) {
  count.value -= value;
}

const isOpen =ref(false);
const handleOpen = () => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <!-- <HelloWorld /> -->
   <!-- <Lesson1 />
   <Lesson2 /> -->
   <Lesson3 />
   <!-- propsの渡し方は同じ。 -->
   <Lesson4
    title="Vue 学習中 — 4-1 コンポーネント分割"
    description="コンポーネント分割"
   />
   <Lesson41
    name="Jane"
    :age= "30"
   />
   <Lesson41 />
   <Lesson42
     :count="count"
     @increment="handleIncrement"
     @decrement="handleDecrement"
   />
   <Lesson43
    :isOpen="isOpen"
    @handleOpen="handleOpen"
   />
</template>
