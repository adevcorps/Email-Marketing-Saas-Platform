<template>
  <section class="relative bg-[url('@/assets/images/home/real-time/bg.png')] bg-no-repeat bg-cover bg-center">
    <!-- <img
      src="@/assets/images/home/real-time/bg.png"
      class="absolute w-full object-fill z-0 right-0 top-0 left-0"
    /> -->
    <img
      src="@/assets/images/home/bulk-email/Polygon-1.png"
      class="absolute left-0 bottom-3"
    />
    <img src="@/assets/images/home/bulk-email/poly2.png" class="absolute right-0 top-5" />
    <div class="mx-auto container">
      <div class="bg-contain justify-between relative flex flex-wrap mt-24 py-20">
        <div
          class="lg:w-5/12 prose font-primary md:w-full sm:w-full sm:mb-5 md:mb-5 z-10"
        >
          <div class="mx-auto w-9/12 pr-14 md:w-full justify-center sm:w-full">
            <div class="w-full flex items-center">
              <img src="@/assets/images/home/real-time/mail.png" />
            </div>
            <h1 class="text-4xl mb-5 text-white">Real Time Email Verification Api</h1>
            <p class="text-xl mb-10 pr-1 leading-9 text-white">
              As soon as the email is typed in the signup form, our API checks it to
              verify the origin of the email address and filters out the unnecessary ones.
            </p>
          </div>
        </div>
        <div class="lg:w-7/12 flex pl-1 justify-end md:w-full sm:w-full">
          <img src="@/assets/images/home/bulk-email/table.png" class="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import { containerMaxW } from "@/config.js";
</script>

