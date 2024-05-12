<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'ボタン',
  },
  bgColor: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

defineEmits([
  'clickButton',
])
</script>

<template>
  <button :style="`background-color: ${bgColor}`" :disabled="disabled" @click="$emit('clickButton')">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width: fit-content;
  padding: 4px 12px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 4px;
}

button:hover {
  opacity: 0.5;
}

button:disabled {
  background-color: #aaaaaa !important;
  opacity: 1;
}
</style>