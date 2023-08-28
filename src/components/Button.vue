<script setup lang="ts">

defineProps({
  text: {
    type: String,
    required: true
  }
})
defineEmits(['click'])

</script>

<template>
  <div>
    <button @click="$emit('onClick')"
      class="flex w-full justify-center rounded-md bg-blue-500 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ text }}</button>
  </div>
</template>

<style scoped></style>