<script setup lang="ts">
const button = 'scoped slot'
</script>

<template>
  <div class="flex flex-col gap-2">
    <button>
      <slot></slot>
    </button>

    <button>
      <slot name="button"></slot>
    </button>

    <button>
      <slot name="button2" :button="button"></slot>
    </button>
  </div>
</template>
