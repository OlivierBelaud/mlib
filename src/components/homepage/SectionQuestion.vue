<script setup lang="ts">
import LogoBadge from '@/components/icons/IconLogoBadge.vue'
import QuestionHeart from '@/components/icons/IconQuestionHeart.vue'
import QuestionBook from '@/components/icons/IconQuestionBook.vue'
</script>

<template>
  <section role="region" class="relative bg-primary pt-20 pb-28 sm:py-[58px] px-[46px] rounded text-white text-center">
    <div class="flex flex-col items-center gap-y-3">
      <LogoBadge />
      <p class="text-lg">
        My question of the week
      </p>
      <h2 class="font-serif text-[36px]/snug font-bold">
        Which is the first birthday you remember? How did your family celebrate birthdays?
      </h2>
      <div class="flex items-center justify-center gap-x-3">
        <div class="w-7 h-7 flex items-center justify-center bg-secondary rounded-full">
          <span class="font-serif text-secondary-dark">M</span>
        </div>
        <div class="text-secondary">
          Question asked by Marie
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-5 pt-7">
        <button type="button" class="bg-white text-primary font-serif text-lg font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition duration-150 ease-in-out">
          Answer the story
        </button>
        <button type="button" class="font-serif text-lg font-bold px-6 py-3 rounded-xl underline hover:text-white/90 transition duration-150 ease-in-out">
          Skip this story
        </button>
      </div>
    </div>
    <QuestionBook class="absolute top-0 -left-4" />
    <QuestionHeart class="absolute -bottom-4 sm:bottom-0 right-4" />
  </section>
</template>
