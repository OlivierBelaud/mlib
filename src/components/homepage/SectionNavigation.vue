<script lang="ts" setup>
import TabLink from '@/components/TabLink.vue'

const links = [
  { text: 'Question of the week', to: '/' },
  { text: 'Next questions', to: '/next' },
  { text: 'Answered', to: '/answered' },
  { text: 'Skipped', to: '/skipped' },
  { text: 'All questions', to: '/all' },
]
</script>

<template>
  <div class="overflow-x-auto whitespace-nowrap">
    <nav role="navigation" class="flex flex-row gap-7.5">
      <TabLink v-for="link in links" :key="link.text" :to="link.to">
        {{ link.text }}
      </TabLink>
    </nav>
  </div>
</template>
