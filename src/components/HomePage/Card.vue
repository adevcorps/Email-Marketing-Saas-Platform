<template>
  <div
    class="my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex justify-center mt-8">
      <img class="rounded-t-lg" src="@/assets/images/home/services.png" alt="" />
    </div>
    <div class="p-5">
      <h5
        class="mb-2 text-2xl font-primary font-semibold tracking-tight text-gray-900 dark:text-white text-center"
      >
        {{ title }}
      </h5>
      <p class="mb-3 font-primary text-gray-700 dark:text-gray-400 text-center">
       {{ content }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
        props: ['title', 'content']
    }
</script>
