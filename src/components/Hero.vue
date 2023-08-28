<script setup lang="ts">
defineProps({
  headline: {
    type: String,
    required: true
  },
  subHeading: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  }
})
</script>


<template>
  <section>
    <div class="bg-white">
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ headline }}</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">{{ subHeading }}</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{buttonText}}</a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn More<span
                  aria-hidden="true">→</span></a>
            </div>
            <!-- <div class=" sm:mb-8 sm:flex sm:justify-center">
              <div
                class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 ">
                <a href="#" class="font-semibold px-2 text-indigo-600"><span class="absolute inset-0"
                    aria-hidden="true"></span>LogIn</a>
                <span aria-hidden="true">/</span>
                <a href="#" class="font-semibold px-2 text-indigo-600"><span class="absolute inset-0"
                    aria-hidden="true"></span>SignUp</a>
              </div>
            </div> -->
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped></style>