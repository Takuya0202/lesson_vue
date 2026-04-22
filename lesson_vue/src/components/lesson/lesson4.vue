<script lang="ts" setup>

// propsを定義 import不要
const props = defineProps<{
    title : string,
    description : string
}>()

</script>

<template>
    <h1>{{ props.title }}</h1>
    <p>{{ props.description }}</p>
</template>