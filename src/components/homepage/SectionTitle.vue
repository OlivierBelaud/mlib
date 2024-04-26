<template>
  <header role="banner">
    <div class="flex items-start sm:items-center gap-x-5">
      <img
        alt="My Life In a Book Cover"
        srcset="@/assets/cover-54w.png, @/assets/cover-108w.png 2x, @/assets/cover-162w.png 3x"
        src="@/assets/cover-162w.png"
        class="w-[54px] h-[86px] bg-black/50 rounded-sm shadow-[0_0_12px_0_rgba(0,0,0,0.06)] mt-2 sm:mt-0"
      >
      <div class="flex flex-col gap-y-1.5">
        <h1 class="font-serif text-3xl/tight sm:text-[35px]/normal">
          Welcome to your future book
        </h1>
        <p class="font-serif text-xl font-normal">
          You have written 12 stories out of 70
        </p>
      </div>
    </div>
  </header>
</template>
