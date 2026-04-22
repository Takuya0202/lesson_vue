<script setup lang="ts">  

const emit = defineEmits<{
    handleOpen : []
}>()

const props = defineProps<{
    isOpen : boolean
}>()
</script>

<template>
    <div v-if="props.isOpen" class="modal">
        <p>Modal is open</p>
    </div>
    <button @click="emit('handleOpen')">
        Open Modal
    </button>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    margin: auto;
    border-radius: 10px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>