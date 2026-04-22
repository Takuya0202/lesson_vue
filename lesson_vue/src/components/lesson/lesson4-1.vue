<script setup lang="ts">
// デフォ値を持ったprops
const props = withDefaults(defineProps<{
    name?: string,
    age?: number,
}>(), {
    name : 'John',
    age : 20,
})
</script>

<template>
    <p>{{ props.name }} - {{ props.age }}</p>
</template>