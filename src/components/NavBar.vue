<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header role="banner">
    <div class="py-[39px] px-3 sm:px-[35px] mb-[29px] max-w-[1200px] mx-auto">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-y-8">
        <RouterLink to="/">
          <img alt="My Life In a Book Logo" src="@/assets/logo.svg" width="117" height="29">
        </RouterLink>
        <nav role="navigation" class="flex items-center gap-[26px]">
          <RouterLink to="/account" class="hover:text-black/90 transition duration-150 ease-in-out">
            My account
          </RouterLink>
          <RouterLink to="/preview" class="bg-black hover:bg-black/90 text-white px-4 py-2 rounded-xl transition duration-150 ease-in-out">
            Preview & manage my book
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>
