<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'ボタン',
  },
  color: {
    type: String,
    default: '',
  },
})

defineEmits([
  'clickButton',
])
</script>

<template>
  <button :style="`background-color: ${color}`" @click="$emit('clickButton')">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  padding: 2px 12px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 2px;
}

button:hover {
  opacity: 0.5;
}
</style>