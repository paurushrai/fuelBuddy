<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthStore } from '../stores/authStore';

import Button from '@/components/Button.vue';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const errMsg = ref('');

const handleLogin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      authStore.setUser(userCredential.user);
      // Signed in 
      console.log('userCredential', userCredential);
      console.log('User Logged In Successfully');
      // ...
      router.push('/dashboard')
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email !";
          break;
        case "auth/user-not-found":
          errMsg.value = "User Not Found !";
          break;
        case "auth/wrong-password":
          errMsg.value = "Wrong Password !";
          break;
        default:
          errMsg.value = "Email or Password is Wrong !";
          break;
      }
    });
}
</script>

<template>
  <section class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">LogIn in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" v-model="email"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" v-model="password"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <Button text="Log In" />

        <div>
          <p v-if="errMsg"
            class="flex w-full justify-center rounded-md bg-red-100 px-3 p-1.5 text-sm text-red-500 font-semibold leading-6 shadow-sm">
            {{ errMsg }}</p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped></style>