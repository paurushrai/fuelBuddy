<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router'

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const isLoggendIn = ref(false);
const router = useRouter();

let auth = getAuth();
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user', user);
      isLoggendIn.value = true;
    } else {
      console.log('user', user);
      isLoggendIn.value = false;
    }
  });
})
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/login');
    // Sign-out successful.
    console.log('Sign-out successful.');
  }).catch((error) => {
    // An error happened.
    console.log('An error happened.', error);
  });
}

</script>

<template>
  <nav class="bg-gray-600">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <RouterLink to="/"><img class="h-8 w-auto" src="../assets/logo_new.png" alt="Your Company"></RouterLink>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink to="/dashboard" v-if="isLoggendIn"
                class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <RouterLink to="/login" v-if="isLoggendIn == false"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">LogIn
              </RouterLink>
              <RouterLink to="/register" v-if="isLoggendIn == false"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">SignUp
              </RouterLink>
              <RouterLink to="/profile" v-if="isLoggendIn"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Profile
              </RouterLink>
              <button @click="handleSignOut" v-if="isLoggendIn"
                class="text-gray-300 rounded-md px-3 py-2 text-sm font-medium" type="button">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>