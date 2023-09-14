<script setup>
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from "../../i18n";

const { locale } = useI18n({ useScope: "global" });
watch(locale, (val) => {
  setI18nLanguage(val);
});
</script>

<template>
  <div
    class="shadow-xl sticky top-0 bg-white"
  >
    <div class="max-w-screen-2xl mx-auto flex flex-row flex-wrap justify-between">
      <div class="p-5">
        <router-link to="/"
          ><img src="@/assets/images/logo.png" class="h-12 w-36 cursor-pointer" alt=""
        /></router-link>
      </div>
      <div
        class="flex flex-row flex-wrap items-center justify-between p-5 text-header-secondary"
      >
        <router-link to="/"
          ><span class="font-primary font-bold p-5 px-10 text-header-selected">{{
            $t("header.home")
          }}</span></router-link
        >
        <router-link to="/" class="">
          <div class="w-full items-center justify-center">
            <div class="group cursor-pointer">
              <div class="flex items-center justify-between space-x-5 bg-white px-4">
                <a
                  class="menu-hover text-base font-medium flex items-center hover:text-header-selected"
                  onClick=""
                >
                  {{ $t("header.products") }} &nbsp;
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-3 w-3 mt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div
                class="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                onClick=""
              >
                <a
                  class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 hover:text-header-selected md:mx-2"
                  >Domain Verifier</a
                >

                <a
                  class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-gray-500 hover:text-header-selected md:mx-2"
                  >Email Verifier</a
                >
                <a
                  class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-gray-500 hover:text-header-selected md:mx-2"
                  >Bulk Email Verifier
                </a>
                <a
                  class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-gray-500 hover:text-header-selected md:mx-2"
                  >Integration
                </a>
              </div>
            </div>
          </div>
        </router-link>

        <router-link to="/resources">
          <div class="w-full items-center justify-center bg-gray-200">
            <div class="group cursor-pointer">
              <div class="flex items-center justify-between space-x-5 bg-white px-4">
                <a class="menu-hover text-base font-medium flex items-center" onClick="">
                  {{ $t("header.resources") }} &nbsp;
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-3 w-3 mt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div
                class="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                onClick=""
              >
                <router-link
                  to="/document"
                  class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 hover:text-header-selected md:mx-2"
                  >Document</router-link
                >

                <a
                  class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-gray-500 hover:text-header-selected md:mx-2"
                  >API Integration</a
                >
                <a
                  class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-gray-500 hover:text-header-selected md:mx-2"
                  >FAQ
                </a>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/pricing"
          ><span class="font-medium p-5 hover:text-header-selected">{{ $t("header.pricing") }}</span></router-link
        >
        <router-link to="/contact"
          ><span class="font-medium p-5 hover:text-header-selected">{{ $t("header.contact") }}</span></router-link
        >
      </div>
      <div class="p-5">
        <button
          class="p-5 font-bold font-primary hover:text-primary delay-150 duration-300"
        >
          {{ $t("header.login") }}
        </button>
        <button class="p-2 px-8 bg-[#E24949] text-white rounded-full font-bold">
          {{ $t("header.register") }}
        </button>
      </div>
    </div>
  </div>
</template>
