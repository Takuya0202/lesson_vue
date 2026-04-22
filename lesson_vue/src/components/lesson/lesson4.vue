<script lang="ts" setup>

// propsを定義 import不要
const props = defineProps<{
    title : string
    description ?: string
}>

</script>

<template>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
</template>