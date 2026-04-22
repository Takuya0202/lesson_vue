<script setup lang="ts">
const emit = defineEmits<{
    increment : [number],
    decrement : [number]
}>()

const props = defineProps<{
    count : number
}>()
</script>

<template>
    <p>Count: {{ props.count }}</p>
    <button @click="emit('increment' , 1)">
        Increment
    </button>
    <button @click="emit('decrement' , 1)">
        Decrement
    </button>
</template>
