<script setup>
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from "../../i18n";
import { useRoute } from "vue-router";
import { computed } from "vue";
import router from "@/router";

const route = useRoute();
const path = computed(() => route.path);

const { locale } = useI18n({ useScope: "global" });
watch(locale, (val) => {
  setI18nLanguage(val);
});

const handleLocation = (locale) => {
  localStorage.setItem("lang", locale);
  setI18nLanguage(locale);
};
</script>

<template>
  <div class="shadow-lg sticky top-0 bg-white z-30">
    <div class="mx-auto container">
      <div class="max-w-screen-2xl mx-auto flex flex-row flex-wrap justify-between">
        <div class="py-5">
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
                    class="menu-hover text-base font-primary font-bold flex items-center text-header-selected"
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
                    class="my-1 block border-b border-gray-100 py-1 font-primary text-primary lg:mx-4 hover:text-hover md:mx-2"
                    >Domain Verifier</a
                  >

                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-primary lg:mx-4 text-primary hover:text-hover md:mx-2"
                    >Email Verifier</a
                  >
                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-primary lg:mx-4 text-primary hover:text-hover md:mx-2"
                    >Bulk Email Verifier
                  </a>
                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-primary lg:mx-4 text-primary hover:text-hover md:mx-2"
                    >Integration
                  </a>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="/">
            <div class="w-full items-center justify-center bg-gray-200">
              <div class="group cursor-pointer">
                <div class="flex items-center justify-between space-x-5 bg-white px-4">
                  <a
                    class="menu-hover text-base font-primary font-bold text-primary flex items-center"
                    onClick=""
                  >
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
                    class="my-1 block border-b border-gray-100 py-1 font-primary text-primary lg:mx-4 hover:text-hover md:mx-2"
                    >Document</router-link
                  >

                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-primary text-primary lg:mx-4 text-gray-500 hover:text-hover md:mx-2"
                    >API Integration</a
                  >
                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-primary text-primary lg:mx-4 text-gray-500 hover:text-hover md:mx-2"
                    >FAQ
                  </a>
                </div>
              </div>
            </div>
          </router-link>
          <router-link to="/pricing"
            ><span class="p-5 font-primary font-bold text-header-selected">{{
              $t("header.pricing")
            }}</span></router-link
          >
          <router-link to="/contact"
            ><span class="font-primary font-bold text-header-selected p-5">{{
              $t("header.contact")
            }}</span></router-link
          >
          <router-link to="/" class="">
            <div class="w-full items-center justify-center">
              <div class="group cursor-pointer">
                <div class="flex items-center justify-between space-x-5 bg-white px-4">
                  <a
                    class="menu-hover text-base font-primary font-bold flex items-center text-header-selected"
                    onClick=""
                  >
                    {{ $t("languages.en") }} &nbsp;
                    <span>
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1v18M1 3.652v9c5.6-5.223 8.4 2.49 14-.08v-9c-5.6 2.57-8.4-5.143-14 .08Z"
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
                    @click="handleLocation('en')"
                    >English</a
                  >

                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-gray-500 hover:text-header-selected md:mx-2"
                    @click="handleLocation('pt')"
                    >Português</a
                  >
                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-gray-500 hover:text-header-selected md:mx-2"
                    @click="handleLocation('es')"
                    >Español
                  </a>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="py-5">
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
  </div>
</template>
