<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink :to="to" class="tablink pt-2.5 pb-1.5 mb-1 text-black/30 text-lg border-b-4 border-transparent hover:border-link hover:text-link transition duration-150 ease-in-out">
    <slot />
  </RouterLink>
</template>
